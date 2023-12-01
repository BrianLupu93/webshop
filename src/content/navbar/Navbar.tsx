import React, { FunctionComponent, useState } from 'react';
import RowContainer from '../small-utils/containers/RowContainer';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { BsHandbagFill } from 'react-icons/bs';
import { MdOutlineFavorite } from 'react-icons/md';
import LinkContainer from '../small-utils/containers/LinkContainer';
import DropdownMenu from './DropdownMenu';

type Category = {
  name: string;
  link: string;
};
type Link = {
  name: string;
  link: string;
};

interface NavbarProps {
  categories: Category[];
  links: Link[];
}

const Navbar: FunctionComponent<NavbarProps> = ({ categories, links }) => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <RowContainer extraClass='mb-0'>
        <div className='flex items-center py-4'>
          <div className='flex items-center md:w-5/12'>
            <Logo
              imageSrc='src/assets/images/shop-logo.png'
              shopName='ThePhoneShop'
            />
            <div className='flex items-center gap-2'>
              <LinkContainer
                small
                linkText='Categories'
                linkUrl='/'
                underline
                linkcolor='text-black'
              />
              <LinkContainer
                small
                linkText='Accessories'
                linkUrl='/'
                underline
                linkcolor='text-black'
              />
            </div>
          </div>

          <div className='md:w-4/12'>
            <SearchBar />
          </div>

          <div className='flex md:w-3/12 justify-end'>
            <div className='flex items-center mr-4 hover:cursor-pointer hover:text-rose-500 hover:contrast-125'>
              <span className='text-sm mr-2'>Favorites</span>
              <MdOutlineFavorite className='text-xl text-rose-500' />
            </div>

            <div className='flex items-center hover:cursor-pointer hover:text-blue-900 hover:contrast-125'>
              <span className='text-sm mr-2'>Bag</span>
              <BsHandbagFill className='text-xl text-blue-900' />
            </div>
          </div>
        </div>
      </RowContainer>
      <DropdownMenu extraClass='group-hover:block hidden' />
    </>
  );
};

export default Navbar;
