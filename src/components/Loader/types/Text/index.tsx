import './style.css';

import type { FC } from 'react';

export interface TextLoaderArgs {
  message: string;
}

const TextLoader: FC<TextLoaderArgs> = ({ message }) => (
  <p className="loader-text-message">{message}</p>
);

export default TextLoader;
