import Typography from '@mui/material/Typography';

function DividentDigit({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        width: '19px',
        height: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem',
        color: 'green',
        fontWeight: 'bold',
        padding: 0,
        // border: '1px solid blue',
      }}
    >
      {children}
    </Typography>
  );
}

export default DividentDigit;
