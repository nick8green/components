import { FC, PropsWithChildren } from "react";

import "./style.css";

export interface HeaderProps {
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({ children }) => {
  return (
    <header>
        {children}
    </header>
  );
};

export default Header;
