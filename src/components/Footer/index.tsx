import { FC, PropsWithChildren } from "react";

import "./style.css";

export interface FooterProps {
  copyright: {
    year: number;
    owner: string;
  }
}

const Footer: FC<PropsWithChildren<FooterProps>> = ({ children, copyright }) => {
  return (
    <footer>
        <p data-testid="copyright">&copy; {copyright.owner} {copyright.year}. All rights reserved.</p>
        {children}
    </footer>
  );
};

export default Footer;
