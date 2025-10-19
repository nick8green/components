/**
 * Timeline component for displaying events in chronological order.
 * Build with support from the following articles:
 *   - https://medium.com/free-code-camp/how-to-create-a-timeline-component-with-react-1b216f23d3d4
 */
import type { FC } from "react";
import {
  Item as ItemComponent,
  type ItemProps as Item,
} from "components/Timeline/Item";

import "./style.css";

export type TimelineProps = {
  dateFormat?: string;
  dateLocation?: "default" | "alternate";
  display?: "horizontal" | "vertical";
  order?: "asc" | "desc";
  items: Item[];
};

export const Timeline: FC<TimelineProps> = ({
  dateFormat = "DD/MM/YYYY",
  dateLocation = "default",
  display = "vertical",
  order = "asc",
  items = [],
}) => {
  return (
    <div className={`timeline ${display}`}>
      <div className="timeline-track">
        {items
          .toSorted((e1: Item, e2: Item) =>
            order === "desc"
              ? e2.date.getTime() - e1.date.getTime()
              : e1.date.getTime() - e2.date.getTime(),
          )
          .map((item: Item) => (
            <ItemComponent
              key={item.date.getTime()}
              display={dateLocation}
              format={dateFormat}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Timeline;
