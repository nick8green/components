import type { FC } from "react";

import "./style.css";

export type DotsLoaderArgs = {
  message?: string;
};

export const Dots: FC<DotsLoaderArgs> = ({ message = "Loading" }) => {
  return (
    <div className="dots">
      <div id="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default Dots;
