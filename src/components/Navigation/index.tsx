import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { FC, PropsWithChildren } from "react";
import { RenderLinks } from "components/Navigation/RenderLinks";

import "./style.css";

export interface NavigationProps {
  levels?: number;
  links: Link[];
  type?: "main";
}

export type Link = {
  children?: Link[];
  icon?: IconDefinition;
  isActive?: boolean;
  label: string;
  url: string;
};

export interface NavigationProps {
  levels?: number;
  links: Link[];
  type?: "main";
}

/**
 *
 *
 * To be done:
 *   - https://www.w3schools.com/howto/howto_css_icon_bar.asp
 *   - https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
 *   - https://www.w3schools.com/howto/howto_css_searchbar.asp
 *   - https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp
 *   - https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp
 *   - https://www.w3schools.com/howto/howto_css_breadcrumbs.asp
 *   - https://www.w3schools.com/howto/howto_css_sticky_social_bar.asp
 *
 * @param
 * @returns
 */
const Navigation: FC<PropsWithChildren<NavigationProps>> = ({
  children,
  levels = 10,
  links = [],
  type = "main",
}) => {
  if (links.length === 0) return null;

  return (
    <nav
      className={`${type}-navigation`}
      role="navigation"
      aria-label="Main navigation"
    >
      {children}
      <ul>
        <RenderLinks links={links} levels={levels} />
      </ul>
    </nav>
  );
};

export default Navigation;
