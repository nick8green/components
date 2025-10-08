import type { FC, PropsWithChildren } from "react";

import "./style.css";
import Icon from "components/Icon";

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
              Close <Icon pack="solid" name="close" />
            </button>
          </header>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
