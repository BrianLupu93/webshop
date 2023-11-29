import React, { ReactElement, FunctionComponent } from 'react';

interface RowContainerProps {
  children: ReactElement;
  bgColor?: string;
}

const RowContainer: FunctionComponent<RowContainerProps> = ({
  children,
  bgColor,
}) => {
  return (
    <div className={`${bgColor} w-full flex justify-center mb-10`}>
      <div className='2xl:w-8/12  md:w-10/12 w-full'>{children}</div>
    </div>
  );
};

export default RowContainer;
