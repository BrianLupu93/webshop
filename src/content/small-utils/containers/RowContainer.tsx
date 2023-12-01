import React, { ReactElement, FunctionComponent } from 'react';

interface RowContainerProps {
  children: ReactElement;
  bgColor?: string;
  extraClass?: string;
}

const RowContainer: FunctionComponent<RowContainerProps> = ({
  children,
  bgColor,
  extraClass,
}) => {
  return (
    <div
      className={`${bgColor ? bgColor : ''} w-full flex justify-center ${
        extraClass ? extraClass : ''
      }`}>
      <div className='2xl:w-8/12  md:w-10/12 w-full'>{children}</div>
    </div>
  );
};

export default RowContainer;
