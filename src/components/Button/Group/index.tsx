import type { FC, PropsWithChildren } from "react";

import "./style.css";

export const ButtonGroup: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="button-group" data-testid="btn-grp">
      {children}
    </div>
  );
};

export default ButtonGroup;
