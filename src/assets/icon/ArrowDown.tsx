import React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

const ArrowDown = (props: SvgIconProps) => {
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
        d="M16.59 8L12 12.58L7.41 8L6 9.41L12 15.41L18 9.41L16.59 8Z"
        fill="#999999"
      />
    </SvgIcon>
  );
};

export default ArrowDown;
