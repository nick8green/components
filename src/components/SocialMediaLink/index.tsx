"use client";
import type { FC } from "react";
import dynamic from "next/dynamic";

import * as icons from "@fortawesome/free-brands-svg-icons";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  {
    ssr: false,
  },
);

import "./style.css";

export enum Platform {
  Facebook = "Facebook",
  Instagram = "Instagram",
  LinkedIn = "Linkedin",
  X = "X",
  Github = "Github",
  Pinterest = "Pinterest",
  Youtube = "Youtube",
  Google = "Google",
  Tumblr = "Tumblr",
  Flickr = "Flickr",
  Vimeo = "Vimeo",
  Medium = "Medium",
  WhatsApp = "Whatsapp",
  Telegram = "Telegram",
  Slack = "Slack",
  Discord = "Discord",
  Reddit = "Reddit",
  Snapchat = "Snapchat",
  Tiktok = "Tiktok",
  Spotify = "Spotify",
  SoundCloud = "Soundcloud",
  Bandcamp = "Bandcamp",
  LastFM = "Lastfm",
  Twitch = "Twitch",
  Steam = "Steam",
  Xbox = "Xbox",
  Playstation = "Playstation",
  ItchIo = "ItchIo",
  Etsy = "Etsy",
  Patreon = "Patreon",
  PayPal = "Paypal",
  Amazon = "Amazon",
  Ebay = "Ebay",
}

export type SocialMediaArgs = {
  displayHandle?: boolean;
  handle: string;
  platform: Platform;
  url: string;
};

export const SocialMediaLink: FC<SocialMediaArgs> = ({
  displayHandle,
  handle,
  platform,
  url,
}) => {
  const getHandle = () => {
    if (platform === Platform.X && !handle.startsWith("@")) {
      return `@${handle}`;
    }
    return handle;
  };

  const getIcon = () => {
    switch (platform) {
      case Platform.Facebook:
        return icons.faSquareFacebook;
      case Platform.X:
        return icons.faXTwitter;
      case Platform.Snapchat:
        return icons.faSquareSnapchat;
      default:
        return icons[`fa${platform}`];
    }
  };

  const getLink = () => {
    return url;
  };

  return (
    <a
      href={getLink()}
      data-testid={`${platform.toLowerCase()}-link`}
      className={`social-link ${platform.toLowerCase()} ${displayHandle ? "with-handle" : ""}`}
      target="_blank"
      rel="noreferrer"
      title={platform}
    >
      <FontAwesomeIcon data-testid="social-media-icon" icon={getIcon()} />
      <span>{getHandle()}</span>
    </a>
  );
};

export default SocialMediaLink;
