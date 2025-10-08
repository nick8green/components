import type { FC } from "react";
import type { Link as LinkData } from "components/Navigation";
import Link from "next/link";
import Icon from "components/Icon";

const ExpansionIcon: FC<{ hasChildren: boolean; topLevel: boolean }> = ({
  hasChildren,
  topLevel,
}) => {
  if (!hasChildren) return null;
  return (
    <Icon
      className="link-icon"
      name={topLevel ? "down" : "right"}
      pack="solid"
    />
  );
};

export const RenderLinks: FC<{
  links: LinkData[];
  levels: number;
  topLevel?: boolean;
}> = ({ links, levels, topLevel = true }) => {
  if (levels <= 0) return null;

  return (
    <>
      {links.map(({ icon, label, url, isActive, children }) => (
        <li
          className={isActive ? "active-link" : ""}
          key={(label ?? "link").trim().toLowerCase().replaceAll(/\s+/g, "-")}
        >
          <Link href={url}>
            {icon && <Icon className="link-icon" name={icon} pack="solid" />}
            <span className="link-label">{label}</span>
            <ExpansionIcon
              hasChildren={levels > 1 && !!children?.length}
              topLevel={topLevel}
            />
          </Link>
          {children && children?.length > 0 && (
            <ul>
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
