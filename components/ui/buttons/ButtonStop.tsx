import Button from '@mui/material/Button';

import CloseIcon from '@mui/icons-material/Close';

function ButtonStop({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button
      fullWidth
      variant='contained'
      color='error'
      onClick={onClick}
      sx={{ margin: 'auto' }}
    >
      <CloseIcon />
      stop
    </Button>
  );
}

export default ButtonStop;
