// Components

import dynamic from 'next/dynamic';

export { default as Accordion } from '@lib/components/Accordion';
export { default as BlogList } from '@lib/components/Blog/List';
export { default as BlogPost } from '@lib/components/Blog/Post';
export {
  default as BlogPreview,
  type PreviewProps as BlogPreviewProps,
} from '@lib/components/Blog/Preview';
export { default as Button } from '@lib/components/Button';
export { default as ButtonGroup } from '@lib/components/Button/Group';
export { default as Endorsement, type EndorsementProps } from '@lib/components/Endorsement';
export {
  type ContactInfoProps,
  type CopyrightProps,
  default as Footer,
  type FooterProps,
  type LinkProps,
} from '@lib/components/Footer';
export { default as Header, type HeaderProps } from '@lib/components/Header';
export { default as Icon } from '@lib/components/Icon';
export const ClientIcon = dynamic(() => import('@lib/components/Icon'), {
  ssr: false,
});
export { default as Input, type InputProps, InputType } from '@lib/components/Input';
export { default as Loader, type LoaderProps, LoaderType } from '@lib/components/Loader';
export { default as Markdown, type MarkdownProps } from '@lib/components/Markdown';
export { default as Modal, type ModalProps, ModalType } from '@lib/components/Modal';
export { default as MultiStepForm, type MultiStepProps } from '@lib/components/MultiStepForm';
export { type Link, default as Navigation, type NavigationProps } from '@lib/components/Navigation';
export { default as Pagination } from '@lib/components/Pagination';
export {
  default as QRCode,
  type QRCodeDisplayOptions,
  type QRCodeProps,
} from '@lib/components/QRCode';
export {
  type SocialMediaArgs,
  default as SocialMediaLink,
  Platform as SocialMediaPlatform,
} from '@lib/components/SocialMediaLink';
export {
  default as SocialMediaList,
  type SocialMediaListDisplayProps,
  type SocialMediaListProps,
} from '@lib/components/SocialMediaList';
export { default as Switch, type ToggleProps } from '@lib/components/Switch';
export { default as Timeline, type TimelineProps } from '@lib/components/Timeline';

// Utilities

export * as colours from '@lib/utils/colours';
