import { render } from "@testing-library/react";
import { vi } from "vitest";

import Seo from "components/Seo";

vi.mock("next/head", () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe("SEO component", () => {
  test("should render title tag when title is provided", () => {
    const title = "Test Title";
    const Component = () => (
      <Seo description="" title={title} url="http://test.com" />
    );

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

  test("warns if the title is too long", () => {
    const consoleSpy = vi.spyOn(console, "warn");
    const title = "a".repeat(161);
    const Component = () => (
      <Seo description="" title={title} url="http://test.com" />
    );
    render(<Component />);
    expect(consoleSpy).toHaveBeenCalledWith(
      "SEO title is too long. It should be less than 60 characters.",
    );
    consoleSpy.mockRestore();
  });

  test("adds meta description to the head", () => {
    const description = "This is a test page";
    const Component = () => (
      <Seo description={description} title="Testing" url="http://test.com" />
    );

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

  test("warns if the description is too long", () => {
    const consoleSpy = vi.spyOn(console, "warn");
    const description = "a".repeat(161);
    const Component = () => (
      <Seo description={description} title="Testing" url="http://test.com" />
    );
    render(<Component />);
    expect(consoleSpy).toHaveBeenCalledWith(
      "SEO description is too long. It should be less than 160 characters.",
    );
    consoleSpy.mockRestore();
  });

  test("adds the charset meta tag to the head", () => {
    const charset = "UTF-8";
    const Component = () => (
      <Seo
        charset={charset}
        description=""
        title="Testing"
        url="http://test.com"
      />
    );

    render(<Component />);

    expect(document.querySelector("meta")).toHaveAttribute("charSet", charset);
  });

  test("adds the viewport meta tag to the head", () => {
    const viewport = "width=device-width, initial-scale=1";
    const Component = () => (
      <Seo
        description=""
        title="Testing"
        viewport={viewport}
        url="http://test.com"
      />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="viewport"]')).toHaveAttribute(
      "content",
      viewport,
    );
  });

  test("adds the robots meta tag to the head", () => {
    const robots = "noindex";
    const Component = () => (
      <Seo
        description=""
        robots={robots}
        title="Testing"
        url="http://test.com"
      />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, nofollow",
    );
  });

  test.todo("adds the type to the head");

  test("adds the canonical link to the head", () => {
    const url = "n8g.uk";
    const Component = () => <Seo description="" url={url} title="Testing" />;

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
      <Seo description="" image={image} title="Testing" url="http://test.com" />
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
    const Component = () => (
      <Seo description="" icon={icon} title="Testing" url="http://test.com" />
    );

    render(<Component />);

    expect(document.querySelector('link[rel="icon"]')).toHaveAttribute(
      "href",
      icon,
    );
  });

  test("adds the touch icon link to the head", () => {
    const touchIcon = "/touch-icon.png";
    const Component = () => (
      <Seo
        description=""
        title="Testing"
        touchIcon={touchIcon}
        url="http://test.com"
      />
    );

    render(<Component />);

    expect(
      document.querySelector('link[rel="apple-touch-icon"]'),
    ).toHaveAttribute("href", touchIcon);
  });

  test("adds the manifest link to the head", () => {
    const manifest = "/manifest.json";
    const Component = () => (
      <Seo
        description=""
        manifest={manifest}
        title="Testing"
        url="http://test.com"
      />
    );

    render(<Component />);

    expect(document.querySelector('link[rel="manifest"]')).toHaveAttribute(
      "href",
      manifest,
    );
  });

  test("adds the theme color meta tag to the head", () => {
    const theme = "#f0f0f0";
    const Component = () => (
      <Seo description="" theme={theme} title="Testing" url="http://test.com" />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="theme-color"]')).toHaveAttribute(
      "content",
      theme,
    );
  });

  test("adds the author meta tag to the head", () => {
    const author = "Test Author";
    const Component = () => (
      <Seo
        description=""
        author={author}
        title="Testing"
        url="http://test.com"
      />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="author"]')).toHaveAttribute(
      "content",
      author,
    );
  });

  test("adds the keywords meta tag to the head", () => {
    const keywords = ["test", "keywords"];
    const Component = () => (
      <Seo
        description=""
        keywords={keywords}
        title="Testing"
        url="http://test.com"
      />
    );

    render(<Component />);

    expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute(
      "content",
      keywords.join(", "),
    );
  });

  test("warns if the keywords are too long", () => {
    const consoleSpy = vi.spyOn(console, "warn");
    const keywords = Array.from({ length: 11 }, (_, i) => `keyword${i}`);
    const Component = () => (
      <Seo
        description=""
        keywords={keywords}
        title="Testing"
        url="http://test.com"
      />
    );
    render(<Component />);
    expect(consoleSpy).toHaveBeenCalledWith(
      "SEO keywords are too many. It should be less than 10 keywords.",
    );
    consoleSpy.mockRestore();
  });
});
