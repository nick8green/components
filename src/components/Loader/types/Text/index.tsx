import type { FC } from "react";

import "./style.css";

export type TextLoaderArgs = {
  message: string;
};

export const TextLoader: FC<TextLoaderArgs> = ({ message }) => (
  <p className="loader-text-message">{message}</p>
);

export default TextLoader;
