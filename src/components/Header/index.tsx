import type { FC, PropsWithChildren } from "react";

export interface HeaderProps {
  title: string;
}

export const Header: FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title = "N8G Adequate Application",
}) => {
  return (
    <header>
      <h1 id="site-title">{title}</h1>
      {children}
    </header>
  );
};

export default Header;
