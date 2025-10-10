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
  type?: "main" | "list";
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
  className = "",
  levels = 10,
  links = [],
  type = "main",
}) => {
  if (links.length === 0) return null;

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
