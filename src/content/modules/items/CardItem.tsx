import React, { FunctionComponent } from 'react';
import { CardItemInterface } from '../../../types';
import { FaCircle } from 'react-icons/fa';

const CardItem: FunctionComponent<CardItemInterface> = ({
  title,
  price,
  available,
  discount,
  imageAlt,
  imageSrc,
  link,
}) => {
  return (
    <a
      href={link}
      className='relative w-full h-full flex md:flex-col flex-row border rounded-md shadow hover:shadow-md px-4 py-8'>
      {discount && (
        <div className='absolute flex  items-center w-[150px] top-[5%]'>
          <span className='w-6/12  bg-red-600 opacity-80 text-white text-center font-bold'>
            SALE
          </span>
        </div>
      )}
      <img
        className='w-[150px] self-center md:mb-8 mb-0'
        src={imageSrc}
        alt={imageAlt}
      />

      <div className='flex flex-col md:px-0 px-8'>
        <div className='text-md font-semibold mb-2'>{title}</div>
        <div className='flex items-center mb-2'>
          <span className='mr-2 text-sm'>Available</span>
          <FaCircle
            className={`text-xs ${
              available ? 'text-green-500' : 'text-red-600'
            }`}
          />
        </div>
        <div className='flex gap-2'>
          <div className='relative font-light text-sm text-gray-700'>
            <span className='font-semibold text-xs'>€</span>
            {price}
          </div>

          {/* {discount && (
          <div className='font-light text-sm text-red-600'>
            <span className='font-semibold text-xs'>€</span>
            {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
          </div>
        )} */}
        </div>
      </div>
    </a>
  );
};

export default CardItem;
