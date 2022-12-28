import Grid from '@mui/material/Grid';
import DigitWithStarOrDot from './DigitWithStarOrDot';

import { I_ExampleStarOrDot_Level_7 } from '../../../../interfaces/interfaces';

function NumbersList({
  numbersList,
  direction = 'flex-end',
}: {
  numbersList: I_ExampleStarOrDot_Level_7[];
  direction: string;
}) {
  return (
    <Grid
      container
      flexDirection='row'
      alignItems='center'
      justifyContent={direction}
    >
      {numbersList &&
        numbersList.length > 0 &&
        numbersList.map((item, index) => (
          <DigitWithStarOrDot
            key={`${item}-${index}`}
            isStar={item.isStar}
            isDot={item.isDot}
            item={typeof item.digit === 'string' ? item.digit : `${item.digit}`}
            color={item.color ? item.color : 'inherit'}
          />
        ))}
    </Grid>
  );
}

export default NumbersList;
