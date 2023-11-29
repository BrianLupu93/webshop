import React, { FunctionComponent } from 'react';
import ModuleContainer from '../../small-utils/containers/ModuleContainer';
import HeadlineContainer from '../../small-utils/containers/HeadlineContainer';
import LinkContainer from '../../small-utils/containers/LinkContainer';

import { GoChevronRight } from 'react-icons/go';

interface ModuleProps {
  headline: string;
  subheadline?: string;
  linkUrl?: string;
  linkText?: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
  textColor?: string;
}

const ModuleHeaderImageText: FunctionComponent<ModuleProps> = ({
  headline,
  subheadline,
  linkUrl,
  linkText,
  imageSrc,
  imageAlt,
  bgColor,
  textColor,
}) => {
  return (
    <div
      className={`${bgColor ? bgColor : ''} ${
        textColor ? textColor : 'text-black'
      } flex md:flex-row flex-col h-[420px]`}>
      <div className='flex flex-col md:w-6/12 w-full md:h-full h-1/2'>
        <ModuleContainer>
          <>
            <HeadlineContainer headline large headlineText={headline} />

            {subheadline && (
              <HeadlineContainer subheadline large headlineText={subheadline} />
            )}
            {linkUrl && linkText && (
              <LinkContainer
                linkUrl={linkUrl}
                linkText={linkText}
                linkcolor='text-white'
                icon={<GoChevronRight />}
              />
            )}
          </>
        </ModuleContainer>
      </div>

      <div className='md:w-6/12 w-full  md:h-full h-1/2'>
        <img
          className='w-full h-full object-cover'
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  );
};

export default ModuleHeaderImageText;
