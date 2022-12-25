import React from 'react';
import Typography from '@mui/material/Typography';

function ExerciseHeader({
  children,
  align,
}: {
  children: React.ReactNode;
  align: string;
}) {
  return (
    <Typography
      variant='h5'
      sx={{
        textAlign: align,
      }}
    >
      {children}
    </Typography>
  );
}

export default ExerciseHeader;
