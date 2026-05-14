import List from '@lib/components/Blog/List';
import type { PreviewProps } from '@lib/components/Blog/Preview';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React, { act, type ReactNode } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// Mock Preview component to render title text
vi.mock('@lib/components/Blog/Preview', () => {
  return {
    __esModule: true,
    default: (props: any) => {
      return React.createElement('div', { 'data-testid': 'preview' }, props.title as ReactNode);
    },
  };
});

// Mock Pagination to render buttons for each page and call onPageChange when clicked
vi.mock('@lib/components/Pagination', () => {
  return {
    __esModule: true,
    default: (props: any) => {
      const buttons = Array.from({ length: props.totalPages || 0 }, (_, i) =>
        React.createElement(
          'button',
          {
            key: i,
            'data-testid': `page-${i + 1}`,
            onClick: () => props.onPageChange(i + 1),
          },
          String(i + 1),
        ),
      );
      return React.createElement('div', { 'data-testid': 'pagination' }, buttons);
    },
  };
});

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.runOnlyPendingTimers();
  vi.useRealTimers();
  vi.clearAllTimers();
  vi.restoreAllMocks();
});

describe('Blog List component', () => {
  it('shows no posts message when no posts provided', () => {
    render(<List />);
    expect(screen.getByText('No blog posts available.')).toBeDefined();
  });

  it('renders the title when provided', () => {
    render(<List title="My Blog" posts={[]} />);
    expect(screen.getByText('My Blog')).toBeDefined();
  });

  it('renders posts sorted by date descending', () => {
    const posts = [
      { title: 'Post A', date: new Date('2020-01-01'), url: '/a' },
      { title: 'Post B', date: new Date('2022-01-01'), url: '/b' },
      { title: 'Post C', date: new Date('2021-06-01'), url: '/c' },
    ] as PreviewProps[];
    const { container } = render(<List posts={posts} />);
    const previews = screen.getAllByTestId('preview').map((el) => el.textContent);
    // Expect descending: Post B (2022), Post C (2021), Post A (2020)
    expect(previews).toEqual(['Post B', 'Post C', 'Post A']);
    // ensure .blog-list exists
    expect(container.querySelector('.blog-list')).toBeTruthy();
  });

  it('paginates and applies fade-out then fade-in classes when changing pages', () => {
    const posts = [
      { title: 'Post 1', date: new Date('2022-01-03'), url: '/1' },
      { title: 'Post 2', date: new Date('2022-01-02'), url: '/2' },
      { title: 'Post 3', date: new Date('2022-01-01'), url: '/3' },
    ] as PreviewProps[];
    const { container } = render(<List posts={posts} postsPerPage={2} />);

    // initial page shows first two (sorted descending)
    expect(screen.getAllByTestId('preview').map((n) => n.textContent)).toEqual([
      'Post 1',
      'Post 2',
    ]);

    // Click page 2 button (from mocked Pagination)
    const page2 = screen.getByTestId('page-2');
    act(() => {
      fireEvent.click(page2);
    });

    // Immediately after click: fade-out class should be applied
    const listEl = container.querySelector('.blog-list');
    expect(listEl).toBeTruthy();
    expect(listEl?.className.includes('fade-out')).toBe(true);

    // Advance timers by 500ms to complete fade-out and swap content
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // After swap, fade-out removed and content updated to page 2 (only Post 3)
    const previewsAfterSwap = screen.getAllByTestId('preview').map((n) => n.textContent);
    expect(previewsAfterSwap).toEqual(['Post 3']);
    const listElAfterSwap = container.querySelector('.blog-list');
    expect(listElAfterSwap?.className.includes('fade-out')).toBe(false);

    // Advance timers by 70ms to trigger fade-in
    act(() => {
      vi.advanceTimersByTime(70);
    });

    // Now fade-in class should be present
    const listElAfterFadeIn = container.querySelector('.blog-list');
    expect(listElAfterFadeIn?.className.includes('fade-in')).toBe(true);
  });
});
