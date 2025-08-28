import { render, screen } from "@testing-library/react";
import Markdown, { flattenToId, headingRenderer } from "components/Markdown";

type TestCase = {
  attributes?: Record<string, string>;
  content: string;
  selector?: string;
  tag: string;
  text?: string;
  title: string;
};

describe("Markdown component", () => {
  const testCases: TestCase[] = [
    {
      content: "This is a paragraph.",
      tag: "p",
      title: "renders a paragraph",
    },
    {
      attributes: { id: "heading-1" },
      content: "# Heading 1",
      tag: "h2",
      text: "Heading 1",
      title: "renders a heading 1 as h2",
    },
    {
      attributes: { id: "heading-2" },
      content: "## Heading 2",
      tag: "h3",
      text: "Heading 2",
      title: "renders a heading 2 as h3",
    },
    {
      attributes: { id: "heading-3" },
      content: "### Heading 3",
      tag: "h4",
      text: "Heading 3",
      title: "renders a heading 3 as h4",
    },
    {
      attributes: { id: "heading-4" },
      content: "#### Heading 4",
      tag: "h5",
      text: "Heading 4",
      title: "renders a heading 4 as h5",
    },
    {
      attributes: { id: "heading-5" },
      content: "##### Heading 5",
      tag: "h6",
      text: "Heading 5",
      title: "renders a heading 5 as h6",
    },
    {
      attributes: { href: "http://example.com", target: "_blank" },
      content: "[testing](http://example.com)",
      tag: "a",
      text: "testing",
      title: "renders an external link to open in a new tab",
    },
    {
      attributes: { href: "/testing" },
      content: "[testing](/testing)",
      tag: "a",
      text: "testing",
      title: "renders an internal link to app",
    },
    {
      attributes: { href: "http://example.com", target: "_blank" },
      content: "http://example.com",
      tag: "a",
      text: "http://example.com",
      title: "renders an autolink",
    },
    {
      attributes: {
        alt: "test alternative text",
        loading: "lazy",
        src: "/testing.jpg",
        title: "Some title",
      },
      content: '![test alternative text](/testing.jpg "Some title")',
      selector: "img",
      tag: "img",
      title: "renders an image",
    },
    {
      content: "~strikethrough~",
      tag: "del",
      text: "strikethrough",
      title: "renders an strikethrough text",
    },
    {
      content: "*emphasis*",
      tag: "em",
      text: "emphasis",
      title: "renders emphasis text",
    },
    {
      content: "**strong importance**",
      tag: "strong",
      text: "strong importance",
      title: "renders strong emphasis text",
    },
    {
      content: "> quoted text",
      tag: "p",
      text: "quoted text",
      title: "renders a blockquote",
    },
    {
      content: "* Lists\n* [ ] todo\n* [x] done",
      selector: "ul",
      tag: "ul",
      title: "renders a task list",
    },
  ];

  testCases.forEach(({ attributes, content, selector, tag, text, title }) => {
    test(title, () => {
      const { container } = render(<Markdown>{content}</Markdown>);
      const element = selector
        ? (container.querySelector(selector) as HTMLElement)
        : screen.getByText(text ?? content);
      try {
        expect(element).toBeInTheDocument();
        expect(element.tagName.toLowerCase()).toBe(tag);
        if (text) {
          expect(element).toHaveTextContent(text);
        }
        const atts = attributes ?? {};
        Object.keys(atts).forEach((key) => {
          expect(element).toHaveAttribute(key, atts[key]);
        });
      } catch (error) {
        console.error("Error:", error);
        console.log("HTML:", container.outerHTML);
        console.log("Element:", element.outerHTML);
        throw error;
      }
    });
  });

  test("renders a table", () => {
    const content = `| a | b |
| - | - |
| 1 | 2 |`;

    const { container } = render(<Markdown>{content}</Markdown>);

    const table = container.querySelector("table") as HTMLTableElement;
    expect(table).toBeInTheDocument();
    expect(table.tagName.toLowerCase()).toBe("table");

    const heading = table.querySelector("th");
    expect(heading).toHaveTextContent("a");

    const cell = table.querySelector("td");
    expect(cell).toHaveTextContent("1");
  });

  test("renders a code block", () => {
    const content = '```\nconsole.log("Hello, World!");\n```';
    const { container } = render(<Markdown>{content}</Markdown>);
    const code = container.querySelector("code");
    expect(code).toBeInTheDocument();
    expect(code).toHaveTextContent('console.log("Hello, World!");');
  });

  test("renders a code block with language", () => {
    const content = '```js\nconsole.log("Hello, World!");\n```';
    const { container } = render(<Markdown>{content}</Markdown>);
    const code = container.querySelector("code");
    expect(code).toBeInTheDocument();
    expect(code).toHaveClass("language-js");
    expect(code).toHaveTextContent('console.log("Hello, World!");');
  });

  test("renders a footnote", () => {
    const content = `Here is a simple footnote[^1]. With some additional text after it.

[^1]: My reference.`;
    const { container } = render(<Markdown>{content}</Markdown>);
    const footnote = container.querySelector("sup");

    expect(footnote).toBeInTheDocument();
    expect(footnote).toHaveTextContent("1");

    expect(screen.getByText("Footnotes")).toBeInTheDocument();
    expect(screen.getByText(/My reference/)).toBeInTheDocument();
  });

  describe("flatten to id utility", () => {
    test("flattens text to id", () => {
      const text = "This is a test";
      expect(flattenToId("", text)).toBe("this-is-a-test");
    });

    test("flattens react to id", () => {
      expect(
        flattenToId(
          "",
          <>
            <p>THIS is</p>
            <p>a test</p>
          </>,
        ),
      ).toBe("this-is-a-test");
    });
  });

  describe("heading renderer function", () => {
    test("errors if heading tag is invalid", () => {
      expect(() => {
        headingRenderer({ children: "test", node: { tagName: "div" } });
      }).toThrow("invalid heading tag");
    });

    test("errors if heading level is invalid", () => {
      expect(() => {
        headingRenderer({ children: "test", node: { tagName: "h8" } });
      }).toThrow(
        "heading level invalid! you have exeeded the maximum level of embedding",
      );
    });
  });
});
