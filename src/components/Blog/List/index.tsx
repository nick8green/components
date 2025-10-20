"use client";
import { useState, type FC } from "react";
import Preview, { type PreviewProps } from "components/Blog/Preview";

import "./style.css";
import Pagination from "components/Pagination";

type ListProps = {
  posts?: PreviewProps[];
  postsPerPage?: number;
  title?: string;
};

const List: FC<ListProps> = ({ posts, postsPerPage, title }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [visiblePage, setVisiblePage] = useState<number>(1);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isFadingIn, setIsFadingIn] = useState<boolean>(false);

  const getEndIndex = (): number | undefined => {
    if (postsPerPage) {
      return currentPage * postsPerPage;
    }
    return undefined;
  };

  const getFadingClass = (): string => {
    if (isFadingOut) {
      return "fade-out";
    }
    if (isFadingIn) {
      return "fade-in";
    }
    return "";
  };

  const getInitialIndex = (): number => {
    if (postsPerPage) {
      return (currentPage - 1) * postsPerPage;
    }
    return 0;
  };

  const handlePageChange = (newPage: number) => {
    setIsFadingOut(true);
    setIsFadingIn(false);

    setTimeout(() => {
      setVisiblePage(newPage); // swap content
      setCurrentPage(newPage); // update pagination
      setIsFadingOut(false);

      // trigger fade-in after content is mounted
      setTimeout(() => {
        setIsFadingIn(true);
      }, 70); // slight delay to allow DOM to register opacity 0
    }, 500); // match fade-out duration
  };

  return (
    <div className="blog-list-container">
      {title && <h3>{title}</h3>}
      <div className="blog-list-wrapper">
        <div
          aria-live="polite"
          className={`blog-list ${getFadingClass()}`}
          key={visiblePage}
        >
          {posts && posts.length > 0 ? (
            posts
              .toSorted((a, b) => b.date.getTime() - a.date.getTime())
              .slice(getInitialIndex(), getEndIndex())
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
        {postsPerPage && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil((posts?.length ?? 0) / postsPerPage)}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default List;
