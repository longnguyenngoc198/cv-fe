import React from 'react';
import { inactiveColor, activeColor } from './config';

interface Props {
  isActive?: boolean;
}

function IconSidebarDashboard({ isActive }: Props) {
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
        d="M11 3v10H3V7a4 4 0 014-4h4zM7 21a4 4 0 01-4-4v-2h8v6H7zm6 0h4a4 4 0 004-4v-6h-8v10zm0-12V3h4a4 4 0 014 4v2h-8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconSidebarDashboard;
