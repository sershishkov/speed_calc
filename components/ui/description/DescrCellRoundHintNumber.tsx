import Typography from '@mui/material/Typography';

function DescrCellRoundHintNumber({ text }: { text: string }) {
  return (
    <Typography
      variant='h3'
      align='center'
      sx={{
        borderRadius: '50%',
        border: '2px solid #000',
        width: '3rem',
        height: '3rem',
        fontSize: '2.3rem',
        color: 'green',
      }}
    >
      {text}
    </Typography>
  );
}

export default DescrCellRoundHintNumber;
