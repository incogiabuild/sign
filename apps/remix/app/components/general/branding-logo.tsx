import type { ImgHTMLAttributes } from 'react';

export type LogoProps = ImgHTMLAttributes<HTMLImageElement>;

export const BrandingLogo = ({ alt = 'IncoSign', ...props }: LogoProps) => {
  return <img src="/static/incosign-logo.png" alt={alt} {...props} />;
};
