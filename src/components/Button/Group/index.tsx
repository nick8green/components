import './style.css';

import type { FC, PropsWithChildren } from 'react';

const ButtonGroup: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="button-group" data-testid="btn-grp">
      {children}
    </div>
  );
};

export default ButtonGroup;
