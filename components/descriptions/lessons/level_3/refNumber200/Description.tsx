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
        <DescAccent>Числа 200 и 500 в качестве опорных</DescAccent>

        <DescrBody>
          Если перемножаемые числа близки либо к 200, либо к 500, вычисления не
          представляют особого труда, поскольку и 200, и 500 легко использовать
          в качестве опорных чисел.
        </DescrBody>
        <DescrBody>
          Как, - например, нам найти произведение 216 Х 216?
        </DescrBody>
        <DescrBody>
          Если использовать 200 в качестве опорного, пример решается легко, в
          том числе и в уме:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='16'
          hintPlusRight='16'
          refNumber='200'
          numberLeft='216'
          numberRight='216'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescAccent>216 + 16 = 232</DescAccent>
        <DescAccent>232 х 200 = 46400</DescAccent>
        <DescAccent>(232 х 2 = 464, 464 х 100 = 46400)</DescAccent>
        <DescrBody>
          Вычисляем 16 х 16, взяв 10 в качестве опорного числа.
        </DescrBody>
        <DescAccent>16 х 16 = 256</DescAccent>
        <DescrBody>Полное решение выглядит так:</DescrBody>
        <ExampleTableMult
          hintPlusLeft='16'
          hintPlusRight='16'
          refNumber='200'
          numberLeft='216'
          numberRight='216'
          valueIntermediate='46400'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+256'
          valueToMinus=''
          valueResult='46656'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />
      </DescAccordion>
    </Grid>
  );
}

export default Description;
