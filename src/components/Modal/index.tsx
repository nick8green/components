import type { FC, PropsWithChildren } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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

const Modal: FC<PropsWithChildren<ModalProps>> = ({
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
