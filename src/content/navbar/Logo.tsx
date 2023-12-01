import React, { FunctionComponent } from 'react';

interface LogoProps {
  shopName: string;
  imageSrc: string;
}

const Logo: FunctionComponent<LogoProps> = ({ shopName, imageSrc }) => {
  return (
    <a href='/' className='flex items-center hover:contrast-125 mr-6'>
      <img className='h-[40px]' src={imageSrc} alt='shop-logo' />
      <div className='font-semibold text-rose-600'>{shopName}</div>
    </a>
  );
};

export default Logo;
