import React from 'react';

import Typography from '@mui/material/Typography';

function DescrTitle({ children }: { children: React.ReactNode }) {
  return <Typography variant='h6'>{children}</Typography>;
}

export default DescrTitle;
