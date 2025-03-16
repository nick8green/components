import type { FC, PropsWithChildren } from "react";

import type { SocialMediaArgs } from "components/SocialMediaLink";

import "./style.css";
import SocialMediaList, { type SocialMediaListDisplayProps } from "components/SocialMediaList";

export interface ContactInfoProps {
  address?: string;
  email?: string;
  fax?: string;
  phone?: string;
}

export interface CopyrightProps {
  year: number;
  owner: string;
}

export interface DisplayProps {
  socialMediaDisplay: SocialMediaListDisplayProps;
}

export interface FooterProps {
  contactInfo?: ContactInfoProps;
  copyright: CopyrightProps;
  display?: DisplayProps;
  links?: LinkProps[];
  socials?: SocialMediaArgs[];
}

export interface LinkProps {
  title: string;
  url: string;
}

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
              <p>{contactInfo.address.replaceAll(/,\s*/g, "\n")}</p>
            )}
            {contactInfo.phone && (
              <p>
                <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              </p>
            )}
            {contactInfo.fax && <p>{contactInfo.fax}</p>}
            {contactInfo.email && (
              <p>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </p>
            )}
          </div>
          <div id="socials">
            <SocialMediaList display={display.socialMediaDisplay} socials={socials} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
