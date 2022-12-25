import Typography from '@mui/material/Typography';

function DescrCellRoundRefNumber({ text }: { text: string }) {
  return (
    <Typography
      variant='h3'
      align='center'
      color='error'
      sx={{
        borderRadius: '50%',
        border: '2px solid #f00',
        width: '5rem',
        height: '5rem',
        fontSize: '1.5rem',
        lineHeight: 3,
      }}
    >
      {text}
    </Typography>
  );
}

export default DescrCellRoundRefNumber;
