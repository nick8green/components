import type { FC } from "react";
import Preview, { type PreviewProps } from "components/Blog/Preview";

import "./style.css";

type ListProps = {
  posts?: PreviewProps[];
  title?: string;
};

const List: FC<ListProps> = ({ posts, title }) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <div className="blog-list">
        {posts && posts.length > 0 ? (
          posts
            .toSorted((a, b) => b.date.getTime() - a.date.getTime())
            .map((post: PreviewProps) => (
              <Preview
                key={post.title.replaceAll(" ", "-").toLowerCase()}
                {...post}
              />
            ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
