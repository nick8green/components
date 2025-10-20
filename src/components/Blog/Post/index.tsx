import { type FC, type JSX } from "react";

import "./style.css";
import Markdown, { flattenToId } from "components/Markdown";
import moment from "moment";

type PostProps = {
  action?: "create" | "edit";
  author?: string;
  content: string;
  date: Date;
  title: string;
  views?: number;
};

const Post: FC<PostProps> = ({
  action,
  author,
  content,
  date,
  title,
  views,
}) => {
  const headerRenderer = ({ children, node, ...props }: any): JSX.Element => {
    const tag: RegExpExecArray | null = /^h(\d+)/.exec(node.tagName);
    if (!tag) {
      throw new Error("invalid heading tag");
    }
    const level = Number.parseInt(tag[1]) + 2;
    const OutputTag = `h${level}`;
    return (
      <OutputTag id={flattenToId("", children)} {...props}>
        {children}
      </OutputTag>
    );
  };

  const getActionText = (): string => {
    if (action === "create") {
      return "Created by";
    }
    if (action === "edit") {
      return "Edited by";
    }
    return "By";
  };

  return (
    <div className="blog-post" data-testid="blog-post">
      <h2 className="title">{title}</h2>
      <div className="meta">
        <p>
          {getActionText()} {author} on {moment(date).format("Do MMMM YYYY")}
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
      {/* Comments to go here once developed */}
    </div>
  );
};

export default Post;
