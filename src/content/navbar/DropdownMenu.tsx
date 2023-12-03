import React, { FunctionComponent } from 'react';
import RowContainer from '../small-utils/containers/RowContainer';

interface DropdownMenuProps {
  extraClass: string;
  overEvent?: () => void;
  leaveEvent?: () => void;
}

const DropdownMenu: FunctionComponent<DropdownMenuProps> = ({
  extraClass,
  leaveEvent,
  overEvent,
}) => {
  return (
    <RowContainer
      bgColor='absolute left-[170px] bg-transparent'
      extraClass={extraClass}>
      <div
        onMouseOver={overEvent && (() => overEvent())}
        onMouseLeave={leaveEvent && (() => leaveEvent())}
        className='bg-white w-[250px] rounded-b-sm py-2 px-4 font-light'>
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
