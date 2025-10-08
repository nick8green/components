"use client";

import type { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconRegistry, type IconName, type IconPack } from "lib/icons";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export type IconProps<P extends IconPack = IconPack> = {
  pack: P;
  name: IconName<P>;
  size?: "xs" | "sm" | "lg" | "1x" | "2x" | "3x" | "4x" | "5x";
  className?: string;
  title?: string;
};

export const Icon: FC<IconProps> = ({
  pack,
  name,
  size = "1x",
  className,
  title,
}) => {
  const icon = iconRegistry[pack]?.[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in pack "${pack}"`);
    return null;
  }

  return (
    <FontAwesomeIcon
      icon={icon as IconProp}
      size={size}
      className={className}
      title={title}
    />
  );
};

export default Icon;
