import moment from "moment";
import type { FC, ReactNode } from "react";

import Markdown from "components/Markdown";

import "./style.css";

export type ItemProps = {
  content: string | ReactNode;
  date: Date;
  display?: "alternate" | "default";
  format?: string;
  icon?: ReactNode;
  link?: string;
  tag?: string;
  title?: string;
};

export const Item: FC<ItemProps> = ({
  content,
  date,
  display = "default",
  format,
  icon,
  link,
  tag,
  title,
}) => {
  const linkOpts: { href?: string; target?: string; rel?: string } = link
    ? { href: link }
    : {};
  if (link?.match(/^https?:\/\//)) {
    linkOpts.target = "_blank";
    linkOpts.rel = "noopener noreferrer";
  }

  return (
    <div className={`timeline-item date-${display}`}>
      <span className="circle">
        <span>{icon}</span>
      </span>
      {tag && <span className="tag">{tag}</span>}
      <time>{moment(date).format(format || "DD/MM/YYYY")}</time>
      <div className="content">
        {title && <h3>{title}</h3>}
        {typeof content === "string" ? (
          <div>
            <Markdown>{content}</Markdown>
          </div>
        ) : (
          content
        )}
        {link && (
          <a className="read-more" {...linkOpts}>
            Read more
          </a>
        )}
      </div>
    </div>
  );
};

export default Item;
