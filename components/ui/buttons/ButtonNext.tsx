import React from 'react';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Tooltip from '@mui/material/Tooltip';

function ButtonNext({ href }: { href: string }) {
  return (
    <Tooltip title='Следующий Урок'>
      <Button variant='contained' component={Link} href={href} color='primary'>
        <ArrowForwardIcon />
      </Button>
    </Tooltip>
  );
}

export default ButtonNext;
