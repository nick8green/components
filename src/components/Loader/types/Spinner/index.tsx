import type { FC } from "react";

import "./style.css";

export interface SpinnerLoaderArgs {
  message?: string;
}

const Spinner: FC<SpinnerLoaderArgs> = ({ message = "Loading" }) => {
  return (
    <div className="spinner">
      <div></div>
      <p>{message}</p>
    </div>
  );
};

export default Spinner;
