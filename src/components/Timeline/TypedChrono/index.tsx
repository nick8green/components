import { Chrono } from "react-chrono";

interface ChronoProps {
  children?: React.ReactNode;
  className?: string;
  disableToolbar?: boolean;
  items: {
    title: string;
    cardTitle?: string;
    cardSubtitle?: string;
    cardDetailedText?: string[];
  }[];
  mode?: "HORIZONTAL" | "VERTICAL" | "VERTICAL_ALTERNATING";
  slideItemDuration?: number;
  slideShow?: boolean;
  timelinePointDimension?: number;
  theme?: Record<string, string>;
}

export default Chrono as React.FC<ChronoProps>;
