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
}) => (
  <div className="endorsement" data-testid="endorsement">
    {comment?.split("\n").map(
      (line: string) =>
        line !== "" && (
          <p
            className="comment"
            key={`endorsement-line-${line.replaceAll(/ /g, "-")}`}
          >
            &quot;
            {line
              .trim()
              .replaceAll(/^("+)?|("+)?$/g, "")
              .replaceAll('"', String("`"))}
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

export default Endorsement;
