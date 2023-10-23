import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export const Card = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { children, className, ...prop } = props;

  return (
    <div className="rounded-md border-2 border-white inline-block shadow-md" {...prop}>
      {children}
    </div>
  );
};
