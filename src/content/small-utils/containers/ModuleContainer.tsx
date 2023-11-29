import React, { FunctionComponent, ReactElement } from 'react';

interface ModuleContainerProps {
  children: ReactElement;
}

const ModuleContainer: FunctionComponent<ModuleContainerProps> = ({
  children,
}) => {
  return (
    <div className='w-full h-full flex flex-col justify-center md:px-8 md:py-6 p-4'>
      {children}
    </div>
  );
};

export default ModuleContainer;
