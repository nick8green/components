import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Item, { type ItemProps } from "./index";

// Mock Markdown component
vi.mock("components/Markdown", () => ({
  default: ({ children }: { children: string }) => (
    <span data-testid="markdown">{children}</span>
  ),
}));

describe("Item", () => {
  const baseProps: ItemProps = {
    content: "Test content",
    date: new Date("2024-06-01"),
  };

  it("renders with default props", () => {
    render(<Item {...baseProps} />);
    expect(screen.getByText("Test content")).toBeInTheDocument();
    expect(screen.getByText("01/06/2024")).toBeInTheDocument();
    expect(screen.getByTestId("markdown")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("renders with alternate display", () => {
    render(<Item {...baseProps} display="alternate" />);
    expect(screen.getByTestId("timeline-item")).toHaveClass(
      "timeline-item date-alternate",
    );
  });

  it("renders with custom date format", () => {
    render(<Item {...baseProps} format="YYYY-MM-DD" />);
    expect(screen.getByText("2024-06-01")).toBeInTheDocument();
  });

  it("renders icon", () => {
    render(<Item {...baseProps} icon={<span data-testid="icon">Icon</span>} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders tag", () => {
    render(<Item {...baseProps} tag="Important" />);
    expect(screen.getByText("Important")).toHaveClass("tag");
  });

  it("renders title", () => {
    render(<Item {...baseProps} title="My Title" />);
    expect(screen.getByText("My Title")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("renders link with internal href", () => {
    render(<Item {...baseProps} link="/internal" />);
    const link = screen.getByRole("link", { name: "Read more" });
    expect(link).toHaveAttribute("href", "/internal");
    expect(link).not.toHaveAttribute("target");
    expect(link).not.toHaveAttribute("rel");
  });

  it("renders link with external href", () => {
    render(<Item {...baseProps} link="https://example.com" />);
    const link = screen.getByRole("link", { name: "Read more" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders ReactNode content", () => {
    render(
      <Item
        {...baseProps}
        content={<span data-testid="custom-content">Custom</span>}
      />,
    );
    expect(screen.getByTestId("custom-content")).toBeInTheDocument();
    expect(screen.queryByTestId("markdown")).not.toBeInTheDocument();
  });
});
