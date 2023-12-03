import React, { FunctionComponent, ReactElement, useState } from 'react';

interface LinkContainerProps {
  linkText: string;
  linkcolor?: string;
  linkUrl: string;
  icon?: ReactElement;
  underline?: boolean;
  small?: boolean;
  extraClass?: string;
  showDropdown?: boolean;
  overEvent?: () => void;
  leaveEvent?: () => void;
}

const LinkContainer: FunctionComponent<LinkContainerProps> = ({
  linkText,
  linkcolor,
  linkUrl,
  icon,
  underline,
  extraClass,
  small,
  overEvent,
  leaveEvent,
  showDropdown,
}) => {
  const [over, setOver] = useState(false);

  return (
    <a
      onMouseOver={() => {
        !over && showDropdown && setOver(true);
        overEvent && overEvent();
      }}
      onMouseLeave={() => {
        over && !showDropdown && setOver(false);

        leaveEvent && leaveEvent();
      }}
      className={`
      flex items-center group
      ${over ? 'text-red-500' : ''}
      ${extraClass ? extraClass : ''}
      ${small ? 'text-sm' : ''}
      ${
        linkcolor ? linkcolor : 'text-blue-600'
      } hover:contrast-75 font-extralight ${
        underline && 'hover:underline decoration-1 underline-offset-4'
      }`}
      href={linkUrl}>
      {linkText}
      {icon && (
        <span className='transition group-hover:translate-x-2 duration-300'>
          {icon}
        </span>
      )}
    </a>
  );
};

export default LinkContainer;
