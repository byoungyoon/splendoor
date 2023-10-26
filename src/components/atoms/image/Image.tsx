import React, { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export const Image = (props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  const { alt, src, ...prop } = props;

  return <img alt={alt} src={src} {...prop} />;
};
