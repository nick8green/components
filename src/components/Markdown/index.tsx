/**
 * Useful Links:
 *     * https://medium.com/@muzaffar640/typescript-and-reactmarkdown-a-tale-of-types-tears-and-triumph-1db07a499412
 */

import {
  Children,
  createElement,
  type Component,
  type ComponentType,
  type FC,
  type JSX,
  type PropsWithChildren,
} from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  children?: React.ReactNode;
  node?: any;
  [key: string]: any;
};

export type MarkdownProps = {
  renderers?: {
    [key: string]: ComponentType<MarkdownRendererProps> | Component<any, any>;
  };
};

export const flattenToId = (text: string, child: any): string => {
  if (typeof child === "string") {
    return `${text.length > 0 ? `${text}-` : text}${child}`
      .toLowerCase()
      .replace(/\W/g, "-");
  }
  return Children.toArray(child?.props.children).reduce(flattenToId, text);
};

export const codeRenderer: FC<PropsWithChildren> = ({
  children,
  className,
  language,
  ...props
}: any) => (
  <pre>
    <code className={`${className} ${language}`} {...props}>
      {children}
    </code>
  </pre>
);

export const headingRenderer = ({
  children,
  node,
  ...props
}: any): JSX.Element => {
  const tag: RegExpExecArray | null = /^h(\d+)/.exec(node.tagName);
  if (!tag) {
    throw new Error("invalid heading tag");
  }
  const level = Number.parseInt(tag[1]) + 1;

  if (level > 6) {
    throw new Error(
      "heading level invalid! you have exeeded the maximum level of embedding",
    );
  }

  return createElement(
    `h${level}`,
    { id: flattenToId("", children), ...props },
    children,
  );
};

export const imageRenderer = ({ children, ...props }: any): JSX.Element => {
  return createElement("img", { ...props, loading: "lazy" }, children);
};

export const linkRenderer = ({ children, href, node }: any): JSX.Element => {
  if (/^\/[a-z0-9]+/i.exec(href)) {
    return <a {...node.properties}>{children}</a>;
  }
  return createElement("a", { target: "_blank", ...node.properties }, children);
};

export const components: Components = {
  a: linkRenderer,
  code: codeRenderer,
  img: imageRenderer,
  h1: headingRenderer,
  h2: headingRenderer,
  h3: headingRenderer,
  h4: headingRenderer,
  h5: headingRenderer,
  h6: headingRenderer,
};

const Markdown: FC<PropsWithChildren<MarkdownProps>> = ({
  children: content,
  renderers,
}) => {
  return (
    <div className="markdown">
      <ReactMarkdown
        components={{
          ...components,
          ...renderers,
        }}
        rehypePlugins={[rehypeReact]}
        remarkPlugins={[remarkGfm]}
      >
        {typeof content === "string" ? content : content?.toString()}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
