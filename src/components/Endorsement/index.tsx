import moment from "moment";
import type { FC } from "react";

import "./style.css";

export type EndorsementProps = {
  comment: string;
  date?: Date;
  location?: string;
  name?: string;
};

const Endorsement: FC<EndorsementProps> = ({
  comment,
  date,
  location,
  name,
}) => {
  const cleanLine = (line: string): string => {
    let start = 0;
    let end = line.length;

    // Trim leading whitespace and quotes
    while (start < end && (line[start] === '"' || /\s/.test(line[start]))) {
      start++;
    }

    // Trim trailing whitespace and quotes
    while (end > start && (line[end - 1] === '"' || /\s/.test(line[end - 1]))) {
      end--;
    }

    // Replace remaining quotes with backticks
    return line.slice(start, end).replaceAll('"', "`");
  };

  return (
    <div className="endorsement" data-testid="endorsement">
      {comment?.split("\n").map(
        (line: string) =>
          line !== "" && (
            <p
              className="comment"
              key={`endorsement-line-${line.replaceAll(/\s/g, "-")}`}
            >
              &quot;
              {cleanLine(line)}
              &quot;
            </p>
          ),
      )}
      {(name || location) && (
        <p className="attribution">
          <span className="name">{name}</span>
          {name && location && " - "}
          <span className="location">{location}</span>
        </p>
      )}
      {date && <p className="date">({moment(date).format("MMM YYYY")})</p>}
    </div>
  );
};

export default Endorsement;
