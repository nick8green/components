import Link from "next/link";
import type { FC, PropsWithChildren } from "react";

import "./style.css";

export interface NavigationProps {
  levels?: number;
  links: Link[];
  type?: "main";
  // type: "bar" | "icons" | "list" | "main" | "sidebar";
  sticky?: boolean;
  showIcons?: boolean;
}

export type Link = {
  children?: Link[];
  isActive?: boolean;
  label: string;
  url: string;
};

export const getExpansionIcon = (hasChildren: boolean) => {
  if (!hasChildren) {
    return null;
  }
};

export const renderLinks = (links: Link[], levels: number) => {
  if (levels <= 0) {
    return null;
  }
  return links.map((link) => {
    const { label, url, isActive, children } = link;
    return (
      <li key={label.replaceAll(/\s+/g, "-").toLowerCase()}>
        <Link className={isActive ? "active-link" : ""} href={url}>
          <span className="link-label">{label}</span>
          {getExpansionIcon(levels > 1 && (children ?? []).length > 0)}
        </Link>
        {children && children.length > 0 && (
          <ul>{renderLinks(children, levels - 1)}</ul>
        )}
      </li>
    );
  });
};

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
export const Navigation: FC<PropsWithChildren<NavigationProps>> = ({
  children,
  levels = 10,
  links = [],
  showIcons = true,
  sticky = false,
  type = "main",
}) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <nav
      className={`${type}-navigation ${sticky ? "sticky" : ""} ${showIcons ? "with-icons" : ""}`}
    >
      {children}
      <ul>{renderLinks(links, levels)}</ul>
    </nav>
  );
};

export default Navigation;
