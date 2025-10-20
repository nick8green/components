import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { act } from "react-dom/test-utils";
import List from "./index";

// Mock Preview component to render title text
vi.mock("components/Blog/Preview", () => {
  return {
    __esModule: true,
    default: (props: any) => {
      return React.createElement(
        "div",
        { "data-testid": "preview" },
        props.title,
      );
    },
  };
});

// Mock Pagination to render buttons for each page and call onPageChange when clicked
vi.mock("components/Pagination", () => {
  return {
    __esModule: true,
    default: (props: any) => {
      const buttons = Array.from({ length: props.totalPages || 0 }, (_, i) =>
        React.createElement(
          "button",
          {
            key: i,
            "data-testid": `page-${i + 1}`,
            onClick: () => props.onPageChange(i + 1),
          },
          String(i + 1),
        ),
      );
      return React.createElement(
        "div",
        { "data-testid": "pagination" },
        buttons,
      );
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

describe("Blog List component", () => {
  it("shows no posts message when no posts provided", () => {
    render(<List />);
    expect(screen.getByText("No blog posts available.")).toBeDefined();
  });

  it("renders the title when provided", () => {
    render(<List title="My Blog" posts={[]} />);
    expect(screen.getByText("My Blog")).toBeDefined();
  });

  it("renders posts sorted by date descending", () => {
    const posts = [
      { title: "Post A", date: new Date("2020-01-01"), href: "/a" },
      { title: "Post B", date: new Date("2022-01-01"), href: "/b" },
      { title: "Post C", date: new Date("2021-06-01"), href: "/c" },
    ];
    const { container } = render(<List posts={posts} />);
    const previews = screen
      .getAllByTestId("preview")
      .map((el) => el.textContent);
    // Expect descending: Post B (2022), Post C (2021), Post A (2020)
    expect(previews).toEqual(["Post B", "Post C", "Post A"]);
    // ensure .blog-list exists
    expect(container.querySelector(".blog-list")).toBeTruthy();
  });

  it("paginates and applies fade-out then fade-in classes when changing pages", async () => {
    const posts = [
      { title: "Post 1", date: new Date("2022-01-03"), href: "/1" },
      { title: "Post 2", date: new Date("2022-01-02"), href: "/2" },
      { title: "Post 3", date: new Date("2022-01-01"), href: "/3" },
    ];
    const { container } = render(<List posts={posts} postsPerPage={2} />);

    // initial page shows first two (sorted descending)
    expect(screen.getAllByTestId("preview").map((n) => n.textContent)).toEqual([
      "Post 1",
      "Post 2",
    ]);

    // Click page 2 button (from mocked Pagination)
    const page2 = screen.getByTestId("page-2");
    act(() => {
      fireEvent.click(page2);
    });

    // Immediately after click: fade-out class should be applied
    const listEl = container.querySelector(".blog-list");
    expect(listEl).toBeTruthy();
    expect(listEl?.className.includes("fade-out")).toBe(true);

    // Advance timers by 500ms to complete fade-out and swap content
    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    // After swap, fade-out removed and content updated to page 2 (only Post 3)
    const previewsAfterSwap = screen
      .getAllByTestId("preview")
      .map((n) => n.textContent);
    expect(previewsAfterSwap).toEqual(["Post 3"]);
    const listElAfterSwap = container.querySelector(".blog-list");
    expect(listElAfterSwap?.className.includes("fade-out")).toBe(false);

    // Advance timers by 70ms to trigger fade-in
    await act(async () => {
      vi.advanceTimersByTime(70);
    });

    // Now fade-in class should be present
    const listElAfterFadeIn = container.querySelector(".blog-list");
    expect(listElAfterFadeIn?.className.includes("fade-in")).toBe(true);
  });
});
