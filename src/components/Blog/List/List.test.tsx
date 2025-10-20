import { describe, it, expect, vi, afterEach } from "vitest";
import { createElement } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import List from "components/Blog/List";

// Mock the Preview component used by List
vi.mock("components/Blog/Preview", () => {
  return {
    __esModule: true,
    // default export is a simple component that renders the title and exposes a test id
    default: (props: any) =>
      createElement("div", { "data-testid": "preview" }, props.title),
  };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("Blog List component", () => {
  it("renders the title when provided", () => {
    render(<List title="Recent Posts" posts={[]} />);
    expect(screen.getByText("Recent Posts")).toBeTruthy();
    // empty posts should still show fallback message
    expect(screen.getByText("No blog posts available.")).toBeTruthy();
  });

  it("shows fallback message when no posts are provided", () => {
    render(<List />);
    expect(screen.getByText("No blog posts available.")).toBeTruthy();
  });

  it("renders Preview for each post and sorts posts by date descending", () => {
    const older = { title: "Older Post", date: new Date("2020-01-01") };
    const newer = { title: "Newer Post", date: new Date("2021-06-01") };
    const middle = { title: "Middle Post", date: new Date("2020-12-01") };

    render(<List posts={[older, newer, middle] as any} />);

    const previews = screen.getAllByTestId("preview");
    // Expect three rendered previews
    expect(previews).toHaveLength(3);
    // Expect order: newest first
    expect(previews[0]).toHaveTextContent("Newer Post");
    expect(previews[1]).toHaveTextContent("Middle Post");
    expect(previews[2]).toHaveTextContent("Older Post");
  });

  it("uses title to build unique keys (indirectly ensures key logic does not crash)", () => {
    // Titles with spaces and mixed case to exercise replaceAll + toLowerCase usage in key
    const posts = [
      { title: "My First Post", date: new Date("2022-01-01") },
      { title: "Another Post Here", date: new Date("2022-02-01") },
    ];

    // Rendering should not throw and should render both previews
    render(<List posts={posts as any} />);
    const previews = screen.getAllByTestId("preview");
    expect(previews).toHaveLength(2);
    expect(previews[0]).toHaveTextContent("Another Post Here");
    expect(previews[1]).toHaveTextContent("My First Post");
  });
});
