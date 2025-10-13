"use client";

import { type FC } from "react";
import { icon as iconRenderer } from "@fortawesome/fontawesome-svg-core";
import { iconRegistry, type IconName, type IconPack } from "lib/icons";

export type IconProps<P extends IconPack = IconPack> = {
  pack: P;
  name: IconName<P>;
  size?: "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "4x" | "5x";
  className?: string;
  title?: string;
  "data-testid"?: string;
};

export const Icon: FC<IconProps> = ({
  pack,
  name,
  size = "1x",
  className,
  title,
  "data-testid": dataTestId,
}) => {
  const icon = iconRegistry[pack]?.[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in pack "${pack}"`);
    return null;
  }

  const html = iconRenderer(icon as any)
    .html.join("")
    .replace(
      /class="([a-z\- ]+)"/,
      `class="$1 ${className} fa-${size}" data-testid="${
        dataTestId ?? "fa-icon"
      }" title="${title}"`,
    );
  return (
    <span
      className="icon"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default Icon;
