import './style.css';

import SocialMediaLink, { type SocialMediaArgs } from '@lib/components/SocialMediaLink';
import type { FC } from 'react';

export interface SocialMediaListDisplayProps {
  direction?: 'row' | 'column';
  showHandles?: boolean;
}

export interface SocialMediaListProps {
  display?: SocialMediaListDisplayProps;
  socials?: SocialMediaArgs[];
}

const defaultDisplay: SocialMediaListDisplayProps = {
  direction: 'row',
  showHandles: false,
};

const SocialMediaList: FC<SocialMediaListProps> = ({ display = defaultDisplay, socials = [] }) => {
  return (
    <ul className={`social-media-list ${display?.direction}`} data-testid="social-media-list">
      {socials.map((social: SocialMediaArgs, index: number) => (
        <li key={`social-${social.platform}-${social.handle ?? index}`}>
          <SocialMediaLink {...social} displayHandle={display.showHandles} />
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
