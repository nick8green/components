import moment from "moment";
import Link from "next/link";
import type { FC } from "react";
import Markdown from "components/Markdown";

import "./style.css";

export type PreviewProps = {
  date: Date;
  excerpt: string;
  title: string;
  url: string;
};

const Preview: FC<PreviewProps> = ({ date, excerpt, title, url }) => {
  if (!url) {
    throw new Error(
      "the path to the full blog post is required via the url prop!",
    );
  }

  return (
    <div className="blog-preview" data-testid="blog-preview">
      <Link href={url}>
        <h3>{title}</h3>
      </Link>
      <p className="timestamp">{moment(date).format("MMMM D, YYYY")}</p>
      {/* <p className="meta"></p> */}
      <Markdown>{excerpt}</Markdown>
      <Link href={url}>Read more</Link>
    </div>
  );
};

export default Preview;
