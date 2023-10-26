import React from 'react';
import { TextWhite } from '@components/atoms';

interface CircleTextProps {
  size: 'lg' | 'md';
  text?: string;
}

export const CircleText = (props: CircleTextProps) => {
  const { size, text } = props;

  const divSize = size === 'md' ? 'w-[20px] h-[20px]' : 'w-[30px] h-[30px]';
  const fontSize = size === 'md' ? 'text-sm' : 'text-md';

  return (
    <div className={`flex items-center justify-center p-1 border-2 bg-white rounded-full ${divSize}`}>
      <TextWhite text={text} className={fontSize} />
    </div>
  );
};
