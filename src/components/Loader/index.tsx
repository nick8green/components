import type { FC } from "react";

import Modal, { ModalType } from "components/Modal";
import Dots, { type DotsLoaderArgs } from "components/Loader/types/Dots";
import Spinner, {
  type SpinnerLoaderArgs,
} from "components/Loader/types/Spinner";
import TextLoader, { type TextLoaderArgs } from "components/Loader/types/Text";

import "./style.css";

/**
 * Some loaders to be looked at and possibly implemented...
 * https://blog.hubspot.com/website/css-loading-animation
 */

type LoaderArgs = DotsLoaderArgs | SpinnerLoaderArgs | TextLoaderArgs;

export enum LoaderType {
  DOTS = "dots",
  SPINNER = "spinner",
  TEXT = "text",
}

export type LoaderProps = {
  args?: LoaderArgs;
  displayed?: boolean;
  type?: LoaderType;
};

const Loader: FC<LoaderProps> = ({
  args,
  displayed = false,
  type = LoaderType.TEXT,
}) => {
  const getDisplay = () => {
    switch (type) {
      case LoaderType.DOTS:
        return <Dots {...(args as DotsLoaderArgs)} />;
      case LoaderType.SPINNER:
        return <Spinner {...(args as SpinnerLoaderArgs)} />;
      case LoaderType.TEXT:
        return <TextLoader {...(args as TextLoaderArgs)} />;
      default:
        throw new Error("cannot determine the loader to display!");
    }
  };

  return (
    <Modal type={ModalType.LOADER} visible={displayed}>
      <div id="loading-container">{getDisplay()}</div>
    </Modal>
  );
};

export default Loader;
