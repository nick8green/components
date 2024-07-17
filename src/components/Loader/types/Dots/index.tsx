import { FC } from "react";

import "./style.css";

export interface DotsLoaderArgs {
  message?: string;
}

const Dots: FC<DotsLoaderArgs> = ({ message = "Loading" }) => {
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
