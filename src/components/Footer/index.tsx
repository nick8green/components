import { Fragment, type FC, type PropsWithChildren } from "react";

import type { SocialMediaArgs } from "components/SocialMediaLink";

import "./style.css";
import SocialMediaList, {
  type SocialMediaListDisplayProps,
} from "components/SocialMediaList";

export type ContactInfoProps = {
  address?: string;
  email?: string;
  fax?: string;
  phone?: string;
};

export type CopyrightProps = {
  year: number;
  owner: string;
};

export type DisplayProps = {
  socialMediaDisplay: SocialMediaListDisplayProps;
};

export type FooterProps = {
  contactInfo?: ContactInfoProps;
  copyright: CopyrightProps;
  display?: DisplayProps;
  links?: LinkProps[];
  socials?: SocialMediaArgs[];
};

export type LinkProps = {
  title: string;
  url: string;
};

const defaultDisplay: DisplayProps = {
  socialMediaDisplay: {
    direction: "row",
    showHandles: false,
  },
};

const Footer: FC<PropsWithChildren<FooterProps>> = ({
  children,
  contactInfo = {},
  copyright,
  display = defaultDisplay,
  links = [],
  socials = [],
}) => {
  return (
    <footer data-testid="footer">
      <p data-testid="copyright">
        &copy; {copyright.owner} {copyright.year}. All rights reserved.
      </p>
      <div>
        <div id="links">
          <ul>
            {links.map((link: LinkProps, index: number) => (
              <li key={index}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div id="content">{children}</div>
        <div id="contact">
          <div id="info">
            {contactInfo.address && (
              <p data-testid="address">
                {contactInfo.address
                  .split(/,\s*/g)
                  .map((line, key, address) => {
                    return (
                      <Fragment key={line.replaceAll(/\s+/g, "-")}>
                        <span>{line}</span>
                        {key < address.length - 1 && <br />}
                      </Fragment>
                    );
                  })}
              </p>
            )}
            {contactInfo.phone && (
              <p data-testid="phone">
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
            )}
            {contactInfo.fax && <p data-testid="fax">{contactInfo.fax}</p>}
            {contactInfo.email && (
              <p data-testid="email">
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            )}
          </div>
          <div id="socials">
            <SocialMediaList
              display={display.socialMediaDisplay}
              socials={socials}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
