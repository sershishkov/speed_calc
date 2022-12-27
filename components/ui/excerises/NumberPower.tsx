import Typography from '@mui/material/Typography';

function NumberPower({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        position: 'absolute',
        top: '0',
        right: '0',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'green',
      }}
    >
      {children}
    </Typography>
  );
}

export default NumberPower;
