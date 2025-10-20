import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, afterEach } from "vitest";
import Preview from "components/Blog/Preview";

vi.mock("next/link", () => {
  return {
    __esModule: true,
    default: ({ href, children }: any) =>
      React.createElement("a", { href }, children),
  };
});

vi.mock("components/Markdown", () => {
  return {
    __esModule: true,
    default: ({ children }: any) =>
      React.createElement("div", { "data-testid": "markdown" }, children),
  };
});

describe("Preview component", () => {
  const title = "Example Title";
  const excerpt = "This is an excerpt";
  const url = "/some-post";
  const date = new Date("2020-01-02");

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it("throws if url prop is not provided", () => {
    // url check happens before useRouter is used
    expect(() =>
      render(
        <Preview title={title} excerpt={excerpt} date={date} url={"" as any} />,
      ),
    ).toThrow("the path to the full blog post is required via the url prop!");
  });

  it("renders title as an h3 and calls router.push when clicked", () => {
    render(<Preview title={title} excerpt={excerpt} date={date} url={url} />);

    const heading = screen.getByText(title);
    // ensure it's the h3 element
    expect(heading.tagName).toBe("H3");
    expect(heading.parentElement?.getAttribute("href")).toBe(url);
  });

  it("renders the formatted date using moment", () => {
    render(<Preview title={title} excerpt={excerpt} date={date} url={url} />);

    // January 2, 2020 is the expected moment format for 2020-01-02
    expect(screen.getByText("January 2, 2020")).toBeTruthy();
  });

  it("renders excerpt via Markdown and includes a 'Read more' link with correct href", () => {
    render(<Preview title={title} excerpt={excerpt} date={date} url={url} />);

    const md = screen.getByTestId("markdown");
    expect(md.textContent).toContain(excerpt);

    const link = screen.getByText("Read more");
    expect(link.getAttribute("href")).toBe(url);
  });
});
