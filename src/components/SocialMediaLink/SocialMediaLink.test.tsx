import { render, screen } from "@testing-library/react";
import { describe, test, vi } from "vitest";
import Socials, { Platform } from "./index";

vi.mock("@fortawesome/react-fontawesome", () => {
  return {
    FontAwesomeIcon: ({
      "data-testid": testId,
    }: {
      "data-testid"?: string;
    }) => (
      <svg data-testid={testId ?? "social-media-icon"} data-icon="mock-icon" />
    ),
  };
});

interface SocialLinkTestCase {
  handle: string;
  platform: Platform;
  url: string;
  handleText?: string;
  iconName?: string;
}

describe("Social Media Link Component", () => {
  const testCases: SocialLinkTestCase[] = [
    {
      handle: "Facebook",
      platform: Platform.Facebook,
      url: "https://www.facebook.com",
      iconName: "square-facebook",
    },
    {
      handle: "Instagram",
      platform: Platform.Instagram,
      url: "https://www.instagram.com",
    },
    {
      handle: "LinkedIn",
      platform: Platform.LinkedIn,
      url: "https://www.linkedin.com",
    },
    {
      handle: "Twitter",
      platform: Platform.X,
      url: "https://www.x.com",
      handleText: "@Twitter",
      iconName: "x-twitter",
    },
    {
      handle: "Github",
      platform: Platform.Github,
      url: "https://www.github.com",
    },
    {
      handle: "Pinterest",
      platform: Platform.Pinterest,
      url: "https://www.pinterest.com",
    },
    {
      handle: "Youtube",
      platform: Platform.Youtube,
      url: "https://www.youtube.com",
    },
    {
      handle: "Google",
      platform: Platform.Google,
      url: "https://www.google.com",
    },
    {
      handle: "Tumblr",
      platform: Platform.Tumblr,
      url: "https://tumblr.com",
    },
    {
      handle: "Flickr",
      platform: Platform.Flickr,
      url: "https://www.flickr.com",
    },
    {
      handle: "Vimeo",
      platform: Platform.Vimeo,
      url: "https://www.vimeo.com",
    },
    {
      handle: "Medium",
      platform: Platform.Medium,
      url: "https://www.medium.com",
    },
    {
      handle: "WhatsApp",
      platform: Platform.WhatsApp,
      url: "https://www.whatsapp.com",
    },
    {
      handle: "Telegram",
      platform: Platform.Telegram,
      url: "https://www.telegram.com",
    },
    {
      handle: "Slack",
      platform: Platform.Slack,
      url: "https://www.slack.com",
    },
    {
      handle: "Discord",
      platform: Platform.Discord,
      url: "https://www.discord.com",
    },
    {
      handle: "Reddit",
      platform: Platform.Reddit,
      url: "https://www.reddit.com",
    },
    {
      handle: "Snapchat",
      platform: Platform.Snapchat,
      url: "https://www.snapchat.com",
      iconName: "square-snapchat",
    },
    {
      handle: "Tiktok",
      platform: Platform.Tiktok,
      url: "https://www.tiktok.com",
    },
    {
      handle: "Spotify",
      platform: Platform.Spotify,
      url: "https://www.spotify.com",
    },
    {
      handle: "SoundCloud",
      platform: Platform.SoundCloud,
      url: "https://www.soundcloud.com",
    },
    {
      handle: "Bandcamp",
      platform: Platform.Bandcamp,
      url: "https://www.bandcamp.com",
    },
    {
      handle: "LastFM",
      platform: Platform.LastFM,
      url: "https://www.lastfm.com",
    },
    {
      handle: "Twitch",
      platform: Platform.Twitch,
      url: "https://www.twitch.com",
    },
    {
      handle: "Steam",
      platform: Platform.Steam,
      url: "https://www.steam.com",
    },
    {
      handle: "Xbox",
      platform: Platform.Xbox,
      url: "https://www.xbox.com",
    },
    {
      handle: "Playstation",
      platform: Platform.Playstation,
      url: "https://www.playstation.com",
    },
    {
      handle: "ItchIo",
      platform: Platform.ItchIo,
      url: "https://www.itch.io",
      iconName: "itch-io",
    },
    {
      handle: "Etsy",
      platform: Platform.Etsy,
      url: "https://www.etsy.com",
    },
    {
      handle: "Patreon",
      platform: Platform.Patreon,
      url: "https://www.patreon.com",
    },
    {
      handle: "PayPal",
      platform: Platform.PayPal,
      url: "https://www.paypal.com",
    },
    {
      handle: "Amazon",
      platform: Platform.Amazon,
      url: "https://www.amazon.com",
    },
    {
      handle: "Ebay",
      platform: Platform.Ebay,
      url: "https://www.ebay.com",
    },
  ];

  testCases.forEach(({ handle, platform, url, handleText }) => {
    test(`renders link for ${handle}`, () => {
      render(<Socials handle={handle} platform={platform} url={url} />);
      const link = screen.getByRole("link", { name: handleText ?? handle });
      expect(link).toHaveAttribute("href", url);
    });

    test(`renders icon for ${handle}`, () => {
      render(<Socials handle={handle} platform={platform} url={url} />);
      const icon = screen.getByTestId("social-media-icon");
      expect(icon).toBeInTheDocument();
    });
  });

  test("does not add display handler class when hidden", () => {
    render(
      <Socials
        handle="Twitter"
        platform={Platform.X}
        url="https://www.twitter.com"
        displayHandle={false}
      />,
    );
    const link = screen.getByTestId("x-link");
    expect(link).not.toHaveClass("with-handle");
  });

  test("adds display handler class when visible", () => {
    render(
      <Socials
        handle="Twitter"
        platform={Platform.X}
        url="https://www.twitter.com"
        displayHandle={true}
      />,
    );
    const link = screen.getByTestId("x-link");
    expect(link).toHaveClass("with-handle");
  });
});
