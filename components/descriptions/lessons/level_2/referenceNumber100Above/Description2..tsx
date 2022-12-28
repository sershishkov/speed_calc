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
        <DescAccent>Умножение чисел больше 100</DescAccent>
        <DescrBody>
          Можно ли использовать данный метод для перемножения чисел больше 100?
          Разумеется.
        </DescrBody>
        <DescrBody>
          Чтобы умножить 106 на 104, возьмем 100 в качестве опорного числа.
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='6'
          hintPlusRight='4'
          refNumber='100'
          numberLeft='106'
          numberRight='104'
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

        <DescrBody>
          Складываем накрест. 106 плюс 4 равно 110; Запишем 110 после знака
          равенства.
        </DescrBody>
        <DescrBody>
          Умножим 110 на опорное число 100. Как умножить любое число на 100?
          Приписать к нему справа два нуля. Получаем. промежуточный результат:
          11000
        </DescrBody>
        <DescrBody>
          Теперь перемножим числа в кружках: 6 х 4 = 24. Приплюсуем результат к
          11000 и получаем 11024.
        </DescrBody>
        <DescrBody>
          Полностью решенный пример выглядит следующим образом:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='6'
          hintPlusRight='4'
          refNumber='100'
          numberLeft='106'
          numberRight='104'
          valueIntermediate='11000'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+24'
          valueToMinus=''
          valueResult='11024'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />

        <DescrBody>
          Немного попрактиковавшись, вы сможете решать все подобные примеры без
          ручки и бумаги. В глазах другихлодей это будет очень эффектно.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
