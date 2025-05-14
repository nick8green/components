import type { FC, PropsWithChildren } from "react";

import "./style.css";
import SocialMediaList from "components/SocialMediaList";
import type { SocialMediaArgs } from "components/SocialMediaLink";

export interface HeaderProps {
  title: string;
  socials?: SocialMediaArgs[];
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({
  children,
  socials,
  title,
}) => {
  return (
    <header>
      <h1 id="site-title">{title}</h1>
      {children}
      {socials && (
        <SocialMediaList
          display={{ direction: "row", showHandles: false }}
          socials={socials}
        />
      )}
    </header>
  );
};

export default Header;
