import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./index";

// Mock Button and Icon modules used by the component
vi.mock("components/Button", () => {
  return {
    default: (props: any) => {
      const { onClick, disabled, label, children, className, ...rest } = props;
      const text = children ?? label;
      return (
        <button
          {...rest}
          className={className}
          disabled={disabled}
          onClick={onClick}
        >
          {text}
        </button>
      );
    },
  };
});
vi.mock("components/Icon", () => {
  return {
    default: (props: any) => <span data-icon={props.name} />,
  };
});

describe("Pagination", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders page info and page buttons with the current page disabled", () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={2} totalPages={4} onPageChange={onPageChange} />,
    );

    // page info text
    const info = screen.getByText("Page 2 of 4");
    expect(info).toBeDefined();

    // numeric page buttons 1..4 present
    expect(screen.getByText("1")).toBeDefined();
    const btn2 = screen.getByText("2") as HTMLButtonElement;
    expect(btn2).toBeDefined();
    expect(btn2.disabled).toBe(true); // current page disabled
    expect(screen.getByText("3")).toBeDefined();
    expect(screen.getByText("4")).toBeDefined();
  });

  it("disables Next on first page", () => {
    const onPageChange = vi.fn();
    // First page
    render(
      <Pagination currentPage={1} totalPages={3} onPageChange={onPageChange} />,
    );
    const prev = screen.getByTestId("previous") as HTMLButtonElement;
    const next = screen.getByTestId("next") as HTMLButtonElement;
    expect(prev.disabled).toBe(true);
    expect(next.disabled).toBe(false);
  });

  it("disables Previous on last page", () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={3} totalPages={3} onPageChange={onPageChange} />,
    );
    const prevLast = screen.getByTestId("previous") as HTMLButtonElement;
    const nextLast = screen.getByTestId("next") as HTMLButtonElement;
    expect(prevLast.disabled).toBe(false);
    expect(nextLast.disabled).toBe(true);
  });

  it("calls onPageChange when numeric, previous and next buttons are clicked", () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />,
    );

    // Click numeric page 1
    fireEvent.click(screen.getByText("1"));
    expect(onPageChange).toHaveBeenCalledWith(1);

    // Click Previous (should go to 1)
    fireEvent.click(screen.getByTestId("previous"));
    expect(onPageChange).toHaveBeenCalledWith(1);

    // Click Next (should go to 3)
    fireEvent.click(screen.getByTestId("next"));
    expect(onPageChange).toHaveBeenCalledWith(3);

    // Click numeric page 3
    fireEvent.click(screen.getByText("3"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("throws when currentPage is out of bounds or totalPages is less than 1", () => {
    const noop = () => {};

    // currentPage < 1
    expect(() =>
      render(<Pagination currentPage={0} totalPages={3} onPageChange={noop} />),
    ).toThrow("current page value is out of bounds");

    // currentPage > totalPages
    expect(() =>
      render(<Pagination currentPage={4} totalPages={3} onPageChange={noop} />),
    ).toThrow("current page value is out of bounds");

    // totalPages < 1
    expect(() =>
      render(<Pagination currentPage={1} totalPages={0} onPageChange={noop} />),
    ).toThrow("total pages must be 1 or greater");
  });
});
