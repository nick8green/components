import { render } from "@testing-library/react";
import { vi } from "vitest";

import SEO from "components/SEO";

vi.mock("next/head", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("SEO component", () => {
  test("should render title tag when title is provided", () => {
    const title = "Test Title";
    const Component = () => <SEO description="" title={title} />;

    render(<Component />);

    expect(document.title).toBe(title);
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute(
      "content",
      title,
    );
    expect(
      document.querySelector('meta[name="twitter:title"]'),
    ).toHaveAttribute("content", title);
  });

  test("adds meta description to the head", () => {
    const description = "This is a test page";
    const Component = () => <SEO description={description} title="Testing" />;

    render(<Component />);

    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      description,
    );
    expect(
      document.querySelector('meta[property="og:description"]'),
    ).toHaveAttribute("content", description);
    expect(
      document.querySelector('meta[name="twitter:description"]'),
    ).toHaveAttribute("content", description);
  });

  test("adds the charset meta tag to the head", () => {
    const charset = "UTF-8";
    const Component = () => (
      <SEO charset={charset} description="" title="Testing" />
    );

    render(<Component />);

    expect(document.querySelector("meta")).toHaveAttribute("charSet", charset);
  });

  test("adds the viewport meta tag to the head", () => {
    const viewport = "width=device-width, initial-scale=1";
    const Component = () => (
      <SEO description="" title="Testing" viewport={viewport} />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="viewport"]')).toHaveAttribute(
      "content",
      viewport,
    );
  });

  test("adds the robots meta tag to the head", () => {
    const robots = "noindex, nofollow";
    const Component = () => (
      <SEO description="" robots={robots} title="Testing" />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      robots,
    );
  });

  test.todo("adds the type to the head");

  test("adds the canonical link to the head", () => {
    const url = "n8g.uk";
    const Component = () => <SEO description="" url={url} title="Testing" />;

    render(<Component />);

    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      url,
    );
    expect(document.querySelector('meta[property="og:url"]')).toHaveAttribute(
      "content",
      url,
    );
  });

  test("adds the image meta tag to the head", () => {
    const image = "/test.jpg";
    const Component = () => (
      <SEO description="" image={image} title="Testing" />
    );

    render(<Component />);

    expect(document.querySelector('meta[property="og:image"]')).toHaveAttribute(
      "content",
      image,
    );
    expect(
      document.querySelector('meta[name="twitter:image"]'),
    ).toHaveAttribute("content", image);
  });

  test("adds the favicon link to the head", () => {
    const icon = "/favicon.ico";
    const Component = () => <SEO description="" icon={icon} title="Testing" />;

    render(<Component />);

    expect(document.querySelector("link")).toHaveAttribute("href", icon);
  });

  test("adds the touch icon link to the head", () => {
    const touchIcon = "/touch-icon.png";
    const Component = () => (
      <SEO description="" title="Testing" touchIcon={touchIcon} />
    );

    render(<Component />);

    expect(document.querySelector("link")).toHaveAttribute("href", touchIcon);
  });

  test("adds the manifest link to the head", () => {
    const manifest = "/manifest.json";
    const Component = () => (
      <SEO description="" manifest={manifest} title="Testing" />
    );

    render(<Component />);

    expect(document.querySelector("link")).toHaveAttribute("href", manifest);
  });

  test("adds the theme color meta tag to the head", () => {
    const theme = "#f0f0f0";
    const Component = () => (
      <SEO description="" theme={theme} title="Testing" />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute(
      "content",
      theme,
    );
  });
});
