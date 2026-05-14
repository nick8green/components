import './style.css';

import type { FC } from 'react';

export interface SpinnerLoaderArgs {
  message?: string;
}

const Spinner: FC<SpinnerLoaderArgs> = ({ message = 'Loading' }) => {
  return (
    <div className="spinner">
      <div></div>
      <p>{message}</p>
    </div>
  );
};

export default Spinner;
