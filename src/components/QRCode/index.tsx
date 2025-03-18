import type { FC } from "react";
import { QRCodeSVG } from "qrcode.react";

export type QRCodeDisplayOptions = {
  background?: string;
  foreground?: string;
  image?: string;
};

export type QRCodeProps = {
  display?: QRCodeDisplayOptions;
  title: string;
  value: string | string[];
};

type QRProps = {
  bgColor: string;
  fgColor: string;
  imageSettings?: {
    src: string;
    height: number;
    width: number;
    excavate: boolean;
    opacity: number;
  };
  marginSize: number;
  title: string;
  value: string | string[];
};

const QRCode: FC<QRCodeProps> = ({ display, title, value }) => {
  const opts: QRProps = {
    bgColor: display?.background ?? "#ffffff",
    fgColor: display?.foreground ?? "#000000",
    marginSize: 2,
    title,
    value,
  };

  if (display?.image) {
    opts.imageSettings = {
      src: display?.image,
      height: 64,
      width: 64,
      excavate: false,
      opacity: 0.75,
    };
  }

  return <QRCodeSVG data-testid="qr-code" {...opts} />;
};

export default QRCode;
