import './style.css';

import Markdown, { flattenToId } from '@lib/components/Markdown';
import type { Element } from 'hast';
import moment from 'moment';
import { type FC, type JSX, type ReactNode } from 'react';

interface PostProps {
  action?: 'create' | 'edit';
  author?: string;
  content: string;
  date: Date;
  title: string;
  views?: number;
}

interface HeaderRendererProps {
  children?: ReactNode;
  node?: ReactNode;
  [key: string]: string | ReactNode;
}

const Post: FC<PostProps> = ({ action, author, content, date, title, views }) => {
  const headerRenderer = ({ children, node, ...props }: HeaderRendererProps): JSX.Element => {
    const tag: RegExpExecArray | null = /^h(\d+)/.exec((node as unknown as Element)?.tagName ?? '');
    if (!tag) {
      throw new Error('invalid heading tag');
    }
    const level = Number.parseInt(tag[1]) + 2;
    const OutputTag = `h${level}` as keyof JSX.IntrinsicElements;
    return (
      <OutputTag id={flattenToId('', children)} {...props}>
        {children}
      </OutputTag>
    );
  };

  const getActionText = (): string => {
    if (action === 'create') {
      return 'Created by';
    }
    if (action === 'edit') {
      return 'Edited by';
    }
    return 'By';
  };

  return (
    <div className="blog-post" data-testid="blog-post">
      <h2 className="title">{title}</h2>
      <div className="meta">
        <p>
          {getActionText()} {author} on {moment(date).format('Do MMMM YYYY')}
        </p>
        {views !== undefined && <p className="views">{views} views</p>}
      </div>
      <Markdown
        renderers={{
          h1: headerRenderer,
          h2: headerRenderer,
          h3: headerRenderer,
          h4: headerRenderer,
          h5: headerRenderer,
          h6: headerRenderer,
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default Post;
