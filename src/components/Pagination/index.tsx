import Button from "components/Button";
import Icon from "components/Icon";
import type { FC } from "react";

import "./style.css";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages < 1) {
    throw new Error("total pages must be 1 or greater");
  }
  if (currentPage < 1 || currentPage > totalPages) {
    throw new Error("current page value is out of bounds");
  }

  return (
    <div className="pagination">
      <div className="controls">
        <Button
          className="nav-btn"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          label="Previous"
          data-testid="previous"
        >
          <Icon pack="solid" name="left" />
          Previous
        </Button>
        <ul>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <li key={page}>
              <Button
                disabled={page === currentPage}
                onClick={() => onPageChange(page)}
                label={page.toString()}
              />
            </li>
          ))}
        </ul>
        <Button
          className="nav-btn"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          label="Next"
          data-testid="next"
        >
          <Icon pack="solid" name="right" />
          Next
        </Button>
      </div>
      <p>
        Page {currentPage} of {totalPages}
      </p>
    </div>
  );
};

export default Pagination;
