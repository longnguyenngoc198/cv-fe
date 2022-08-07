import React from 'react';
import { activeColor, inactiveColor } from './config';

export interface Props {
  isActive: boolean;
}

function IconSidebarActivityLog({ isActive }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill={isActive ? activeColor : inactiveColor}
        fillRule="evenodd"
        d="M4.571 11.714a7.715 7.715 0 117.715 7.715 7.675 7.675 0 01-5.452-2.263l1.217-1.217a5.952 5.952 0 004.235 1.765c3.317 0 6-2.683 6-6s-2.683-6-6-6-6 2.683-6 6h2.571L5.394 15.17l-.06-.12L2 11.714h2.571zm6.858.857V8.286h1.285v3.557l3.017 1.791-.66 1.097-3.642-2.16z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconSidebarActivityLog;
