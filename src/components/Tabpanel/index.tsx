import React from 'react';
import { Box } from '@material-ui/core';

export interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}
export function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
