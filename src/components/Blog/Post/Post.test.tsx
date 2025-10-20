import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Post from "./index";

// Mock the Markdown module to control renderer invocation and flattenToId
vi.mock("components/Markdown", () => {
  return {
    __esModule: true,
    // default export: a component that invokes the h1 renderer to simulate markdown rendering
    default: ({ renderers }: any) => {
      // Simulate a markdown document that contains an h1 heading
      const rendered = renderers.h1({
        children: ["Heading Text"],
        node: { tagName: "h1" },
      });
      return rendered;
    },
    // Provide a deterministic flattenToId implementation
    flattenToId: () => "mocked-id",
  };
});

describe("Blog Post component", () => {
  const baseProps = {
    title: "My Post",
    author: "Alice",
    content: "# Heading Text\n\nContent",
    date: new Date(2020, 0, 15), // 15th January 2020
  };

  it("renders title and default meta (By ...) with formatted date", () => {
    render(<Post {...baseProps} />);
    expect(screen.getByText("My Post")).toBeTruthy();
    // Moment formats "Do MMMM YYYY" -> "15th January 2020"
    expect(screen.getByText(/By Alice on 15th January 2020/)).toBeTruthy();
  });

  it("shows 'Created by' when action is create", () => {
    render(<Post {...baseProps} action="create" />);
    expect(
      screen.getByText(/Created by Alice on 15th January 2020/),
    ).toBeTruthy();
  });

  it("shows 'Edited by' when action is edit", () => {
    render(<Post {...baseProps} action="edit" />);
    expect(
      screen.getByText(/Edited by Alice on 15th January 2020/),
    ).toBeTruthy();
  });

  it("displays views when provided", () => {
    render(<Post {...baseProps} views={123} />);
    expect(screen.getByText("123 views")).toBeTruthy();
  });

  it("headerRenderer increases heading level by 2 and uses flattenToId for id", () => {
    const { container } = render(<Post {...baseProps} />);
    // The mocked Markdown calls the h1 renderer which should produce an h3 element
    const h3 = container.querySelector("h3");
    expect(h3).toBeTruthy();
    expect(h3?.textContent).toBe("Heading Text");
    expect(h3?.getAttribute("id")).toBe("mocked-id");
  });
});
