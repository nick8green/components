/**
 * Timeline component for displaying events in chronological order.
 * Built using the Chrono library.
 * https://github.com/prabhuignoto/react-chrono-docs/tree/main./a
 * 
 * Maybe I need to refactor:
 * https://medium.com/free-code-camp/how-to-create-a-timeline-component-with-react-1b216f23d3d4
 */
import type { FC } from "react";
import Chrono from "components/Timeline/TypedChrono";
import { hexToRgb } from "utils/colours";

import "./style.css";

export enum DisplayMode {
  VERTICAL = "VERTICAL",
  HORIZONTAL = "HORIZONTAL",
  VERTICAL_ALTERNATING = "VERTICAL_ALTERNATING",
}

export type Item = {
  date: Date;
  details: string | string[];
  icon?: string;
  subtitle?: string;
  title: string;
};

export type TimelineProps = {
  dimensions?: number;
  display?: DisplayMode;
  items: Item[];
  order?: "asc" | "desc";
  show?: boolean;
  slideDuration?: number;
  toolbar?: boolean;

  primaryColour?: string;
  secondaryColour?: string;
};

export const Timeline: FC<TimelineProps> = ({
  dimensions = 20,
  display = DisplayMode.HORIZONTAL,
  items,
  order = "asc",
  show = false,
  slideDuration = 5000,
  toolbar = false,

  primaryColour = "007fff",
  secondaryColour = "ffdf00",
}) => {
  const sortedItems = [...items].sort((a, b) => {
    if (a.date && b.date) {
      return order === "asc"
        ? a.date.getTime() - b.date.getTime()
        : b.date.getTime() - a.date.getTime();
    }
    return 0;
  });

  const icons = sortedItems.map((item) => {
    if (!item.icon) {
      return <span key={item.date.toISOString()}></span>;
    }
    if (typeof item.icon === "string") {
      return (
        <img alt={item.title} key={item.date.toISOString()} src={item.icon} />
      );
    }
    return item.icon;
  });

  const [pr, pg, pb] = hexToRgb(`#${primaryColour}`) ?? [0, 0, 0];

  return (
    <Chrono
      className="timeline"
      disableToolbar={!toolbar}
      items={sortedItems.map((item, index) => {
        return {
          title: item.date?.toISOString(),
          cardTitle: item.title,
          cardSubtitle: item.subtitle,
          cardDetailedText: Array.isArray(item.details)
            ? item.details
            : [item.details],
          date: item.date?.toISOString(),
          key: index.toString(),
        };
      })}
      mode={display}
      slideItemDuration={slideDuration}
      slideShow={show}
      timelinePointDimension={dimensions}
      theme={{
        cardTitleColor: `#${primaryColour.replace("#", "")}`,

        primary: `#${primaryColour.replace("#", "")}`,
        secondary: `#${secondaryColour.replace("#", "")}`,

        iconBackgroundColor: `#${primaryColour.replace("#", "")}`,
        iconColor: `#${primaryColour.replace("#", "")}`,

        titleColor: `#${primaryColour.replace("#", "")}`,
        titleColorActive: `#${primaryColour.replace("#", "")}`,

        buttonActiveBgColor: `#${primaryColour.replace("#", "")}`,

        buttonBorderColor: `#${primaryColour.replace("#", "")}`,
        buttonHoverBorderColor: `#${primaryColour.replace("#", "")}`,
        buttonActiveBorderColor: `#${primaryColour.replace("#", "")}`,

        shadowColor: `rgba(${pr}, ${pg}, ${pb}, 0.1)`,
        glowColor: `rgba(${pr}, ${pg}, ${pb}, 0.2)`,

        darkToggleActiveBgColor: `#${primaryColour.replace("#", "")}`,
        darkToggleActiveBorderColor: `#${primaryColour.replace("#", "")}`,
      }}
    >
      <div className="chrono-icons">{icons}</div>
    </Chrono>
  );
};

export default Timeline;
