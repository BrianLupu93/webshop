import React from 'react';
import Banner from './content/small-utils/Banner';
import ModuleHeaderImageText from './content/modules/header/ModuleHeaderImageText';
import RowContainer from './content/small-utils/containers/RowContainer';
import ItemsList from './content/modules/items/ItemsList';

import { items } from './testData';
import Navbar from './content/navbar/Navbar';

function App() {
  return (
    <>
      <Banner
        title='Xmas:'
        text='Up to 50% discounts'
        bgColor='bg-yellow-600'
        textColor='text-white'
      />

      <Navbar />

      <RowContainer bgColor='bg-red-800' extraClass='mb-10'>
        <ModuleHeaderImageText
          headline='Let Santa to discount your presents'
          subheadline='This year is special'
          linkText='Discover all the Christmas discounts'
          linkUrl='/'
          imageAlt='imageAlt'
          imageSrc='src/assets/images/header.jpeg'
          textColor='text-yellow-600'
        />
      </RowContainer>

      <Banner
        title='Free delivery:'
        text='from 01.12 to 31.12'
        bgColor='bg-gray-800'
        textColor='text-white'
        marginBottom
      />

      <RowContainer>
        <ItemsList items={items} />
      </RowContainer>
    </>
  );
}

export default App;
