import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ alt = 'IncoSign', ...props }: LogoProps) => {
  return <img src="/static/incosign-icon.png" alt={alt} {...props} />;
};
