import ButtonPrev from '../../ui/buttons/ButtonPrev';
import ButtonNext from '../../ui/buttons/ButtonNext';
import TimerBasic from '../TimerBasic';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function Header({
  hrefPrev,
  hrefNext,
  time,
  title,
}: {
  hrefPrev: string;
  hrefNext: string;
  time: number;
  title: string;
}) {
  return (
    <>
      <Grid item>
        <Grid container alignItems='center' justifyContent='space-between'>
          <Grid item>
            <Grid container alignItems='center' justifyContent='flex-start'>
              <Grid
                item
                sx={{
                  mr: '5px',
                  display: hrefPrev ? 'block' : 'none',
                }}
              >
                <ButtonPrev href={hrefPrev} />
              </Grid>
              <Grid
                item
                sx={{
                  mr: '5px',
                  display: hrefNext ? 'block' : 'none',
                }}
              >
                <ButtonNext href={hrefNext} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <TimerBasic time={time} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant='h5' align='center'>
          {title}
        </Typography>
      </Grid>
    </>
  );
}

export default Header;
