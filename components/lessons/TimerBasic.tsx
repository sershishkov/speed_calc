import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function TimerBasic({ time }: { time: number }) {
  return (
    <Grid container alignItems='center' justifyContent='flex-end'>
      <Grid item>
        <Typography variant='h6' align='center'>
          {time > 60
            ? Math.floor(time / 60) < 10
              ? `0${Math.floor(time / 60)}`
              : Math.floor(time / 60)
            : '00'}
          :
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h6' align='center'>
          {time % 60 < 10 ? `0${time % 60}` : `${time % 60}`}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TimerBasic;
