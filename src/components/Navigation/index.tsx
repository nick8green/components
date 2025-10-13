import type { FC, PropsWithChildren } from "react";
import { RenderLinks } from "components/Navigation/RenderLinks";

import "./style.css";

export type Link = {
  children?: Link[];
  icon?: string;
  isActive?: boolean;
  label: string;
  url: string;
};

export interface NavigationProps {
  className?: string;
  levels?: number;
  links: Link[];
  type?: "breadcrumb" | "categories" | "icon" | "main" | "sidebar";
}

/**
 * Built following the w3schools examples:
 *   - https://www.w3schools.com/howto/howto_css_breadcrumbs.asp
 *   - https://www.w3schools.com/howto/howto_css_icon_bar.asp
 *   - https://www.w3schools.com/howto/howto_css_topnav.asp
 *
 * To be done:
 *   - https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
 *   - https://www.w3schools.com/howto/howto_css_searchbar.asp
 *   - https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp
 *   - https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp
 *   - https://www.w3schools.com/howto/howto_css_sticky_social_bar.asp
 *
 * @param
 * @returns
 */
const Navigation: FC<PropsWithChildren<NavigationProps>> = ({
  children,
  className = "",
  levels = 10,
  links = [],
  type = "main",
}) => {
  if (links.length === 0) return null;

  const getLowerestNestedLevel = (linksArray: Link[], level = 1): number => {
    for (const link of linksArray) {
      if (link.children) {
        return getLowerestNestedLevel(link.children, level + 1);
      }
    }
    return level;
  };

  if (type === "breadcrumb" && getLowerestNestedLevel(links) > 1) {
    console.warn("breadcrumb navigation should not have nested links!");
  }
  // if (type === "breadcrumb") {
  //   console.warn("only the last link should be active!");
  // }

  if (type === "categories" && getLowerestNestedLevel(links) > 2) {
    console.warn(
      "categories navigation currently doesn't support more than 2 levels!",
    );
  }

  if (type === "sidebar" && getLowerestNestedLevel(links) > 2) {
    console.warn(
      "sidebar navigation currently doesn't support more than 2 levels!",
    );
  }

  return (
    <nav
      className={`${type}-navigation ${className}`.trim()}
      role="navigation"
      aria-label={`${type} navigation`}
    >
      {children}
      <ul>
        <RenderLinks links={links} levels={levels} />
      </ul>
    </nav>
  );
};

export default Navigation;
