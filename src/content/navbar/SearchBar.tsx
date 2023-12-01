import React from 'react';

const SearchBar = () => {
  return (
    <div className='flex justify-center w-full px-2 text-sm'>
      <input
        className='w-full border border-zinc-400 rounded-md px-2 py-1 focus:outline-none focus:ring-0 focus:border-rose-500 font-extralight'
        placeholder='Search'
      />
    </div>
  );
};

export default SearchBar;
