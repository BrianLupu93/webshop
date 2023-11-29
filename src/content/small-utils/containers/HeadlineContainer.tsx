import React, { FunctionComponent } from 'react';

interface HeadlineContainerProps {
  headlineText: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  headline?: boolean;
  subheadline?: boolean;
}

const HeadlineContainer: FunctionComponent<HeadlineContainerProps> = ({
  headlineText,
  small,
  medium,
  large,
  headline,
  subheadline,
}) => {
  return (
    <div
      className={`w-full ${
        small
          ? `mb-1 ${
              headline ? 'text-md font-bold' : subheadline ? 'text-sm' : ''
            }`
          : medium
          ? `mb-2 ${
              headline ? 'text-xl font-bold' : subheadline ? 'text-lg' : ''
            }`
          : large
          ? `mb-4 ${
              headline ? 'text-3xl font-bold' : subheadline ? 'text-xl' : ''
            }`
          : ''
      }`}>
      {headlineText}
    </div>
  );
};

export default HeadlineContainer;
