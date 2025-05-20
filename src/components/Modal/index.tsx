import dynamic from "next/dynamic";
import type { FC, PropsWithChildren } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  {
    ssr: false,
  },
);

import "./style.css";

export enum ModalType {
  INPUT = "input",
  LOADER = "loader",
}

export type ModalProps = {
  close?: () => void;
  type?: ModalType;
  visible: boolean;
};

export const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  close,
  type = ModalType.INPUT,
  visible,
}) => {
  if (type === ModalType.INPUT && !close) {
    throw new Error("please provide closure for an input modal");
  }

  return (
    <div id="modal" className={visible ? "show" : "hidden"} data-testid="modal">
      <div className={`content ${type}`}>
        {type === ModalType.INPUT && (
          <header>
            <button className="close" onClick={() => (close ? close() : null)}>
              Close <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </header>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
