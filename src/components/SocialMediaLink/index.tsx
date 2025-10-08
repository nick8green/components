import type { FC } from "react";

import "./style.css";
import Icon from "components/Icon";

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

const SocialMediaLink: FC<SocialMediaArgs> = ({
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
      <Icon
        data-testid="social-media-icon"
        name={platform.toLowerCase()}
        pack="brands"
      />
      <span>{getHandle()}</span>
    </a>
  );
};

export default SocialMediaLink;
