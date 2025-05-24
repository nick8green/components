import React from 'react';

interface NextImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  unoptimized?: boolean;
  placeholder?: string;
  blurDataURL?: string;
}

const NextImageMock: React.FC<NextImageProps> = (props) => {
  // Just render a normal <img> for Storybook
  return <img {...props} alt={props.alt || 'image'} />;
};

export default NextImageMock;
