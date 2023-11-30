import React, { FunctionComponent, ReactElement } from 'react';
import { CardItemInterface } from '../../../utils/types';
import { FaCircle } from 'react-icons/fa';
import { displaySalePrice } from '../../../utils/finctions';

const CardItem: FunctionComponent<CardItemInterface> = ({
  title,
  price,
  available,
  discount,
  imageAlt,
  imageSrc,
  link,
}) => {
  const styleOldPrice = (price: string): ReactElement => {
    return (
      <div
        className={`border-b border-black ${
          price.length === 5
            ? 'w-[31px]'
            : price.length === 6
            ? 'w-[40px]'
            : 'w-[48px]'
        } absolute top-[50%] left-[10px]`}></div>
    );
  };

  return (
    <a
      href={link}
      className='relative w-full h-full flex md:flex-col flex-row border rounded-md shadow-sm hover:shadow-lg px-4 py-8 cursor-pointer bg-white'>
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

      <div className='flex flex-col h-full md:px-0 px-8'>
        <div className='flex-1 text-md font-semibold mb-2'>{title}</div>
        <div className='flex items-center mb-2'>
          <span className='mr-2 text-sm'>Available</span>
          <FaCircle
            className={`text-xs ${
              available ? 'text-green-500' : 'text-red-600'
            }`}
          />
        </div>
        <div className='relative flex gap-2'>
          <div className='relative font-light text-sm text-gray-700'>
            <span className='font-semibold text-xs'>€</span>
            {price}
          </div>

          {discount && styleOldPrice(price)}
          {discount && (
            <div className='font-light text-sm text-red-600'>
              <span className='font-semibold text-xs'>€</span>
              {displaySalePrice(price, discount)}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default CardItem;
