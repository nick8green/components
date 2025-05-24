import React from 'react';

interface NextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  passHref?: boolean;
  legacyBehavior?: boolean;
  replace?: boolean;
  scroll?: boolean;
  shallow?: boolean;
  prefetch?: boolean;
  locale?: string | false;
}

const NextLinkMock: React.FC<NextLinkProps> = ({ children, href, ...rest }) => {
  // Render a normal <a> tag for Storybook
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

export default NextLinkMock;
