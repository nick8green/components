import type { Element } from 'hast';
import {
  Children,
  type ComponentType,
  createElement,
  type FC,
  type JSX,
  type PropsWithChildren,
  type ReactNode,
} from 'react';
import ReactMarkdown, { type Components, type ExtraProps } from 'react-markdown';
import rehypeReact from 'rehype-react';
import remarkGfm from 'remark-gfm';

type BaseProps = PropsWithChildren<ExtraProps>;

interface MarkdownRendererProps {
  children?: ReactNode;
  node?: ReactNode;
  [key: string]: string | ReactNode;
}

export interface MarkdownProps {
  renderers?: {
    [key: string]: ComponentType<MarkdownRendererProps>;
  };
}

export const flattenToId = (text: string, child: ReactNode): string => {
  if (typeof child === 'string') {
    return `${text.length > 0 ? `${text}-` : text}${child}`.toLowerCase().replace(/\W/g, '-');
  }
  if (child && typeof child === 'object' && 'props' in child) {
    return Children.toArray((child as { props: { children: ReactNode } }).props.children).reduce(
      flattenToId,
      text,
    );
  }
  return text;
};

export const codeRenderer: FC<BaseProps & { className?: string; language?: string }> = ({
  children,
  className,
  language,
  ...props
}) => (
  <pre>
    <code className={`${className ?? ''} ${language ?? ''}`} {...props}>
      {children}
    </code>
  </pre>
);

export const headingRenderer = ({ children, node, ...props }: BaseProps): JSX.Element => {
  const tag: RegExpExecArray | null = /^h(\d+)/.exec((node as Element)?.tagName ?? '');
  if (!tag) {
    throw new Error('invalid heading tag');
  }
  const level = Number.parseInt(tag[1]) + 1;

  if (level > 6) {
    throw new Error('heading level invalid! you have exceeded the maximum level of embedding');
  }

  return createElement(`h${level}`, { id: flattenToId('', children), ...props }, children);
};

export const imageRenderer = ({ children, ...props }: BaseProps): JSX.Element => {
  return createElement('img', { ...props, loading: 'lazy' }, children);
};

export const linkRenderer = ({ children, node }: BaseProps): JSX.Element => {
  const element = node as Element;
  const href = element?.properties?.href as string | undefined;

  if (href && /^\/[a-z0-9]+/i.exec(href)) {
    return <a {...element.properties}>{children}</a>;
  }
  return createElement('a', { target: '_blank', ...element?.properties }, children);
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

const Markdown: FC<PropsWithChildren<MarkdownProps>> = ({ children: content, renderers }) => {
  const contentString = typeof content === 'string' ? content : undefined;

  return (
    <div className="markdown" data-testid="markdown">
      <ReactMarkdown
        components={{
          ...components,
          ...renderers,
        }}
        rehypePlugins={[rehypeReact]}
        remarkPlugins={[remarkGfm]}
      >
        {contentString}
      </ReactMarkdown>
    </div>
  );
};

export default Markdown;
