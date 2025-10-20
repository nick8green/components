import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Post from "./index";

vi.mock("components/Markdown", () => {
  // simple deterministic flattenToId used by the component's headerRenderer
  const flattenToId = () => "flattened-heading";
  // Minimal Markdown mock:
  // - exposes default component that calls a heading renderer when content contains a leading "# "
  // - also renders the raw content in a div[data-testid="md-content"] so tests can assert presence
  const Markdown = ({ children, renderers }: any) => {
    const nodes: any[] = [];
    const text = String(children || "");
    if (
      text.startsWith("# ") &&
      renderers &&
      typeof renderers.h1 === "function"
    ) {
      nodes.push(
        renderers.h1({
          children: text.slice(2).trim(),
          node: { tagName: "h1" },
        }),
      );
    }
    nodes.push(
      React.createElement(
        "div",
        { "data-testid": "md-content", key: "md" },
        text,
      ),
    );
    return React.createElement(React.Fragment, null, ...nodes);
  };
  return { default: Markdown, flattenToId };
});

describe("Post component", () => {
  it("renders title and default action text with formatted date", () => {
    render(
      <Post
        title="My Title"
        author="Alice"
        date={new Date("2020-09-03T00:00:00Z")}
        content="No headings here"
      />,
    );

    const title = screen.getByText("My Title");
    expect(title.tagName).toBe("H2");

    expect(screen.getByText(/By Alice on 3rd September 2020/)).toBeTruthy();
  });

  it("shows Created by when action is create and Edited by when action is edit", () => {
    const { rerender } = render(
      <Post
        title="T"
        author="Bob"
        date={new Date("2020-09-03T00:00:00Z")}
        content="c"
        action="create"
      />,
    );
    expect(
      screen.getByText(/Created by Bob on 3rd September 2020/),
    ).toBeTruthy();

    rerender(
      <Post
        title="T"
        author="Bob"
        date={new Date("2020-09-03T00:00:00Z")}
        content="c"
        action="edit"
      />,
    );
    expect(
      screen.getByText(/Edited by Bob on 3rd September 2020/),
    ).toBeTruthy();
  });

  it("conditionally renders views when provided", () => {
    const { rerender } = render(
      <Post
        title="T"
        author="C"
        date={new Date("2020-09-03T00:00:00Z")}
        content="c"
        views={42}
      />,
    );
    expect(screen.getByText("42 views")).toBeTruthy();

    rerender(
      <Post
        title="T"
        author="C"
        date={new Date("2020-09-03T00:00:00Z")}
        content="c"
      />,
    );
    const views = screen.queryByText(/views$/);
    expect(views).toBeNull();
  });

  it("uses the header renderer to render markdown headings and increases heading level by 2", () => {
    render(
      <Post
        title="Heading Test"
        author="D"
        date={new Date("2020-09-03T00:00:00Z")}
        content="# Hello"
      />,
    );

    // Our Markdown mock will invoke renderers.h1 with node.tagName 'h1' and child 'Hello'.
    // The component's headerRenderer adds +2 to level, so expect an h3 with id 'flattened-heading'.
    const heading = screen.getByText("Hello");
    expect(heading.tagName).toBe("H3");
    expect(heading).toHaveAttribute("id", "flattened-heading");
  });
});
