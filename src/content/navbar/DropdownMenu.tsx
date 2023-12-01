import React, { FunctionComponent } from 'react';
import RowContainer from '../small-utils/containers/RowContainer';

interface DropdownMenuProps {
  extraClass: string;
}

const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({ extraClass }) => {
  return (
    <RowContainer
      bgColor='absolute left-[170px] bg-transparent'
      extraClass={extraClass}>
      <div className='bg-white w-1/3 rounded-b-sm py-2 px-4 font-light'>
        <div>Apple</div>
        <div>Samsung</div>
        <div>Huawei</div>
        <div>Sony</div>
        <div>OnePlus</div>
        <div>Motorola</div>
      </div>
    </RowContainer>
  );
};

export default DropdownMenu;
