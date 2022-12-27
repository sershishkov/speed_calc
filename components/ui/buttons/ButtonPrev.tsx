import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Tooltip from '@mui/material/Tooltip';

function ButtonPrev({ href }: { href: string }) {
  return (
    <Tooltip title='Предыдущий Урок'>
      <Button variant='contained' component={Link} href={href} color='primary'>
        <ArrowBackIcon />
      </Button>
    </Tooltip>
  );
}

export default ButtonPrev;
