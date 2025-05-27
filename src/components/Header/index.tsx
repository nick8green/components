import type { FC, PropsWithChildren } from "react";

import "./style.css";

export interface HeaderProps {
  title: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({ children, title }) => {
  return (
    <header>
      <h1 id="site-title">{title}</h1>
      {children}
    </header>
  );
};

export default Header;
