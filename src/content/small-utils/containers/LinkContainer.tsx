import React, { FunctionComponent, ReactElement } from 'react';

interface LinkContainerProps {
  linkText: string;
  linkcolor?: string;
  linkUrl: string;
  icon?: ReactElement;
  underline?: boolean;
}

const LinkContainer: FunctionComponent<LinkContainerProps> = ({
  linkText,
  linkcolor,
  linkUrl,
  icon,
  underline,
}) => {
  return (
    <a
      className={`
      flex items-center group
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
