import React, { FunctionComponent } from 'react';
import CardItem from './CardItem';
import { CardItemInterface } from '../../../types';

interface ItemsListProps {
  items: CardItemInterface[];
}

const ItemsList: FunctionComponent<ItemsListProps> = ({ items }) => {
  return (
    <div className='grid md:grid-cols-5 grid-cols-1 gap-4 md:px-0 px-6'>
      {items.length > 0 &&
        items.map((item) => {
          return (
            <CardItem
              imageAlt={item.imageAlt}
              imageSrc={item.imageSrc}
              price={item.price}
              title={item.title}
              available={item.available}
              discount={item.discount}
            />
          );
        })}
    </div>
  );
};

export default ItemsList;
