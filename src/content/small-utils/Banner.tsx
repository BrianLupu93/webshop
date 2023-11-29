import React, { FunctionComponent } from 'react';

interface BannerProps {
  title: string;
  text?: string;
  textColor?: string;
  bgColor: string;
  marginBottom?: boolean;
}

const Banner: FunctionComponent<BannerProps> = ({
  title,
  text,
  textColor,
  bgColor,
  marginBottom,
}) => {
  return (
    <div
      className={`${bgColor} ${textColor ? textColor : 'text-black'} ${
        marginBottom && 'mb-10'
      } flex justify-center items-center py-2`}>
      <div className='text-md font-bold'>{title}</div>
      {text && <div className='ml-2 text-sm'>{text}</div>}
    </div>
  );
};

export default Banner;
