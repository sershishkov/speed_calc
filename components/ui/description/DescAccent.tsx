import React from 'react';
import Typography from '@mui/material/Typography';

function DescAccent({
  children,
  align = 'center',
}: {
  children: React.ReactNode;
  align: string;
}) {
  return (
    <Typography
      variant='h5'
      sx={{
        // color: 'red',
        fontWeight: 'bold',
        textAlign: align,
      }}
    >
      {children}
    </Typography>
  );
}

export default DescAccent;
