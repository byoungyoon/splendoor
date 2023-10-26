import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

interface TextWhiteProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  /**
   * @default "test"
   * text white children text
   */
  text?: string;
}

export const TextWhite = (props: TextWhiteProps) => {
  const { text, className, ...prop } = props;

  return (
    <h2 className={`font-['Anton'] webkit-white ${className}`} {...prop}>
      {text}
    </h2>
  );
};
