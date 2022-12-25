import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Description1 from '../components/descriptions/landing/Description1';
import Description2 from '../components/descriptions/landing/Description2';
import Description3 from '../components/descriptions/landing/Description3';

export default function Home() {
  return (
    <>
      <Head>
        <title>SpeedCalc</title>
        <meta name='description' content='SpeedCalc' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Grid
        container
        direction='column'
        sx={
          {
            // border: '1px solid red',
          }
        }
      >
        <Grid item>
          <Typography variant='h5' align='center'>
            Считайте в уме как компютер
          </Typography>
        </Grid>
        <Description1 />
        <Description2 />
        <Description3 />
      </Grid>
    </>
  );
}
