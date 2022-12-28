import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function DigitWithStarOrDot({
  isStar,
  isDot,
  item,
  color = 'inherit',
}: {
  isStar: boolean;
  isDot: boolean;
  item: string;
  color: string;
}) {
  return (
    <Grid
      item
      sx={{
        position: 'relative',
        marginRight: '1rem',
        // border: '1px solid red !important',
        padding: 0,
      }}
    >
      <span
        style={{
          display: isStar || isDot ? 'block' : 'none',
          position: 'absolute',
          left: isStar ? '0' : '-0.5rem',
          top: isStar ? '-0.6rem' : '-1rem',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        {isStar ? '*' : '.'}
      </span>

      <Typography sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: color }}>
        {`${item}`}
      </Typography>
    </Grid>
  );
}

export default DigitWithStarOrDot;
