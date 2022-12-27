import Typography from '@mui/material/Typography';

function HintOperator({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        position: 'absolute',
        top: '0.2rem',
        right: '1.5rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        // color: 'red',
      }}
    >
      {children}
    </Typography>
  );
}

export default HintOperator;
