import Button from '@mui/material/Button';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function ButtonGo({
  onClick,
  id,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  id: string;
}) {
  return (
    <Button
      id={id}
      variant='contained'
      color='info'
      onClick={onClick}
      sx={{ mt: 3, mb: 2 }}
    >
      <PlayCircleFilledWhiteIcon />
      start
    </Button>
  );
}

export default ButtonGo;
