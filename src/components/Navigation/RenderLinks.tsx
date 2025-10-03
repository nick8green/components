"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import type { FC } from "react";
import type { Link } from "components/Navigation";

const ExpansionIcon: FC<{ hasChildren: boolean; topLevel: boolean }> = ({
  hasChildren,
  topLevel,
}) => {
  if (!hasChildren) return null;
  return (
    <FontAwesomeIcon
      className="link-icon"
      icon={topLevel ? faCaretDown : faCaretRight}
    />
  );
};

export const RenderLinks: FC<{
  links: Link[];
  levels: number;
  topLevel?: boolean;
}> = ({ links, levels, topLevel = true }) => {
  if (levels <= 0) return null;

  return (
    <>
      {links.map(({ icon, label, url, isActive, children }) => (
        <li
          className={isActive ? "active-link" : ""}
          key={(label ?? "link").trim().toLowerCase().replace(/\s+/g, "-")}
          role="treeitem"
          aria-expanded={children?.length ? "true" : "false"}
        >
          <a href={url}>
            {icon && <FontAwesomeIcon className="link-icon" icon={icon} />}
            <span className="link-label">{label}</span>
            <ExpansionIcon
              hasChildren={levels > 1 && !!children?.length}
              topLevel={topLevel}
            />
          </a>
          {children && children?.length > 0 && (
            <ul role="tree">
              <RenderLinks
                links={children}
                levels={levels - 1}
                topLevel={false}
              />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};
