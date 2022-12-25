import React from 'react';
import Typography from '@mui/material/Typography';

function DescrCellMain({
  children,
  align,
}: {
  children: React.ReactNode;
  align: string;
}) {
  return (
    <Typography
      variant='h3'
      sx={{
        textAlign: align,
      }}
    >
      {children}
    </Typography>
  );
}

export default DescrCellMain;
