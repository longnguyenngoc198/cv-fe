import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const ArrowRight = (props: SvgIconProps) => {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.29492 16.295L12.8749 11.705L8.29492 7.11496L9.70492 5.70496L15.7049 11.705L9.70492 17.705L8.29492 16.295Z"
        fill="#999999"
      />
    </SvgIcon>
  );
};

export default ArrowRight;
