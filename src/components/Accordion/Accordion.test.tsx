import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Accordion from "components/Accordion";

/**
 * Mock the AccordionItem used by the Accordion component.
 * The mock renders:
 * - a button with data-testid `toggle-${title}` which calls onToggle when clicked
 * - a div with data-testid `content-${title}` that is rendered only when active is true
 */
vi.mock("components/Accordion/Item", () => {
  return {
    default: (props: any) =>
      React.createElement(
        "li",
        null,
        React.createElement(
          "button",
          { "data-testid": `toggle-${props.title}`, onClick: props.onToggle },
          props.title,
        ),
        props.active
          ? React.createElement(
              "div",
              { "data-testid": `content-${props.title}` },
              props.children,
            )
          : null,
      ),
  };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("Accordion component", () => {
  it("renders the provided title", () => {
    render(<Accordion title="My Accordion" items={[]} />);
    expect(screen.getByText("My Accordion")).toBeTruthy();
  });

  it("toggles an item open and closed when clicked", () => {
    const items = [
      { title: "First Item", children: <span>First content</span> },
    ];
    render(<Accordion items={items} />);

    const toggle = screen.getByTestId("toggle-First Item");
    // initially closed
    expect(screen.queryByTestId("content-First Item")).toBeNull();

    // open
    fireEvent.click(toggle);
    expect(screen.getByTestId("content-First Item")).toHaveTextContent(
      "First content",
    );

    // close
    fireEvent.click(toggle);
    expect(screen.queryByTestId("content-First Item")).toBeNull();
  });

  it("only allows one open item by default", () => {
    const items = [
      { title: "First", children: <span>First content</span> },
      { title: "Second", children: <span>Second content</span> },
    ];
    render(<Accordion items={items} />);

    const toggleFirst = screen.getByTestId("toggle-First");
    const toggleSecond = screen.getByTestId("toggle-Second");

    fireEvent.click(toggleFirst);
    expect(screen.getByTestId("content-First")).toBeTruthy();
    expect(screen.queryByTestId("content-Second")).toBeNull();

    fireEvent.click(toggleSecond);
    expect(screen.getByTestId("content-Second")).toBeTruthy();
    // First should have closed
    expect(screen.queryByTestId("content-First")).toBeNull();
  });

  it("allows multiple items open when allowMultipleOpen is true", () => {
    const items = [
      { title: "A", children: <span>A content</span> },
      { title: "B", children: <span>B content</span> },
    ];
    render(<Accordion items={items} allowMultipleOpen />);

    const toggleA = screen.getByTestId("toggle-A");
    const toggleB = screen.getByTestId("toggle-B");

    fireEvent.click(toggleA);
    fireEvent.click(toggleB);

    expect(screen.getByTestId("content-A")).toHaveTextContent("A content");
    expect(screen.getByTestId("content-B")).toHaveTextContent("B content");
  });
});
