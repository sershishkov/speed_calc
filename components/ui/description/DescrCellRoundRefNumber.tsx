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
        width: '3rem',
        height: '3rem',
        fontSize: '1.5rem',
        lineHeight: 1.8,
      }}
    >
      {text}
    </Typography>
  );
}

export default DescrCellRoundRefNumber;
