import type { FC } from "react";

import SocialMediaLink, {
  type SocialMediaArgs,
} from "components/SocialMediaLink";

import "./style.css";

export interface SocialMediaListDisplayProps {
  direction?: "row" | "column";
  showHandles?: boolean;
}

export interface SocialMediaListProps {
  display?: SocialMediaListDisplayProps;
  socials?: SocialMediaArgs[];
}

const defaultDisplay: SocialMediaListDisplayProps = {
  direction: "row",
  showHandles: false,
};

const SocialMediaList: FC<SocialMediaListProps> = ({ display = defaultDisplay, socials = [] }) => {
  return (
    <ul className={`social-media-list ${display?.direction}`} data-testid="social-media-list">
      {socials.map((social: SocialMediaArgs, index: number) => (
        <li key={index}>
          <SocialMediaLink {...social} displayHandle={display.showHandles} />
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
