import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NumbersList from './NumbersList';
import { I_ExampleStarOrDot_Level_7 } from '../../../../interfaces/interfaces';

function ExampleColorDigit({
  listNumbersLeft,
  numberRight,
  listNumbersResult,
  comment,
  listNumberRight,
}: {
  listNumbersLeft: I_ExampleStarOrDot_Level_7[];
  numberRight?: string;
  listNumbersResult: I_ExampleStarOrDot_Level_7[];
  listNumberRight: I_ExampleStarOrDot_Level_7[];
  comment: string;
}) {
  return (
    <Box
      sx={{
        width: 'max-content',
        margin: '1rem auto',
        display: 'grid',
        gridTemplateColumns: '220px 1.5rem 1fr',
      }}
    >
      <Box sx={{ borderBottom: '2px solid black' }}>
        <NumbersList numbersList={listNumbersLeft} direction='flex-end' />
      </Box>
      <Typography
        sx={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}
      >
        x
      </Typography>
      {/* <Typography
        align='left'
        sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'green' }}
      >
        {numberRight}
      </Typography> */}
      <Box
        sx={
          {
            // border: '2px solid black'
          }
        }
      >
        <NumbersList numbersList={listNumberRight} direction='flex-start' />
      </Box>
      <Box sx={{ marginTop: '0.5rem' }}>
        <NumbersList numbersList={listNumbersResult} direction='flex-end' />
      </Box>
      <Typography></Typography>
      <Typography variant='subtitle2'></Typography>
      <Typography
        variant='subtitle2'
        sx={{
          gridColumn: '1 / 3',
        }}
      >
        {comment}
      </Typography>
    </Box>
  );
}

export default ExampleColorDigit;
