import Link from "next/link";
import type { FC, PropsWithChildren } from "react";
import {
  faCaretDown,
  faCaretRight,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const getExpansionIcon = (hasChildren: boolean, topLevel: boolean) => {
  if (!hasChildren) {
    return null;
  }
  if (topLevel) {
    return <FontAwesomeIcon className="link-icon" icon={faCaretDown} />;
  }
  return <FontAwesomeIcon className="link-icon" icon={faCaretRight} />;
};

export const renderLinks = (
  links: Link[],
  levels: number,
  topLevel: boolean = true,
) => {
  if (levels <= 0) {
    return null;
  }
  return links.map((link) => {
    const { icon, label, url, isActive, children } = link;
    return (
      <li
        className={isActive ? "active-link" : ""}
        key={label.replaceAll(/\s+/g, "-").toLowerCase()}
      >
        <Link href={url}>
          {icon && <FontAwesomeIcon className="link-icon" icon={icon} />}
          <span className="link-label">{label}</span>
          {getExpansionIcon(
            levels > 1 && (children ?? []).length > 0,
            topLevel,
          )}
        </Link>
        {children && children.length > 0 && (
          <ul>{renderLinks(children, levels - 1, false)}</ul>
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
const Navigation: FC<PropsWithChildren<NavigationProps>> = ({
  children,
  levels = 10,
  links = [],
  type = "main",
}) => {
  if (links.length === 0) {
    return null;
  }

  return (
    <nav className={`${type}-navigation`}>
      {children}
      <ul>{renderLinks(links, levels)}</ul>
    </nav>
  );
};

export default Navigation;
