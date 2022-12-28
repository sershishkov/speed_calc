import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';

import ExampleTableMult from '../../tables/ExampleTableMult';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescrBody>А как насчет 512 х 512?</DescrBody>
        <DescAccent>512 х 512 =</DescAccent>
        <DescAccent>512 + 12 = 524</DescAccent>
        <DescrBody>
          512 х 500 равно произведению 524 х 1000, деленному на 2.
        </DescrBody>
        <DescAccent>524 х 1000 = 524000</DescAccent>
        <DescrBody>Половина от 524000 равняется 262000 .</DescrBody>
        <DescrBody>
          Для деления 524 тысяч пополам можно разбить его на 500 тысяч и 24
          тысячи. Половину обоих чисел легко вычислить в уме. Половина от 500
          тысяч равна 250 тысячам. Половина от 24 тысяч равна 12 тысячам. 250
          тысяч плюс 12 тысяч дает 262 тысячи. Теперь перемножим числа в
          кружках:
        </DescrBody>
        <DescAccent>12 х 12 = 144</DescAccent>
        <DescAccent>262000 + 144 = 262144</DescAccent>
        <DescrBody>Полный пример выглядит так:</DescrBody>

        <ExampleTableMult
          hintPlusLeft='12'
          hintPlusRight='12'
          refNumber='500'
          numberLeft='512'
          numberRight='512'
          valueIntermediate='262000'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+144'
          valueToMinus=''
          valueResult='262144'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />
      </DescAccordion>
    </Grid>
  );
}

export default Description;
