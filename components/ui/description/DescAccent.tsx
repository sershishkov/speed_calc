import React from 'react';
import Typography from '@mui/material/Typography';

function DescAccent({
  align = 'center',
  children,
}: {
  align?: string;
  children: React.ReactNode;
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
