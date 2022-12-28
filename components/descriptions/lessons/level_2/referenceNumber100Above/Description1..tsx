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
        <DescAccent>Умножение чисел больше 10</DescAccent>
        <DescrBody>
          Работает ли данный метод при перемножении чисел больше 10? Конечно,
          работает. Попробуем на примере:
        </DescrBody>
        <DescAccent>96 х 97 =</DescAccent>
        <DescrBody>
          К какому большему числу следует привести эти числа? Сколько не хватает
          до чего? До 100. Вписываем 4 в кружок под 96 и З под 97
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='96'
          numberRight='97'
          valueIntermediate=''
          hintMinusLeft='4'
          hintMinusRight='3'
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={false}
        />

        <DescrBody>
          Что мы делаем теперь? Мы вычитаем накрест: 96 минус З, так же как и 97
          минус 4, равно 93. Это первая (передняя) часть ответа. Что мы делаем
          затем? Перемножаем числа в кружках. Произведение 4 на З равняется 12.
          Это последняя (задняя) часть ответа. Сам ответ, соответственно, равен
          9312
        </DescrBody>
        <DescAccent>96 х 97 = 9312</DescAccent>
        <DescrBody>
          Какой метод проще: этот или тот, которому вас учили в школе?
          Разумеется, этот. Припомните мое первое правило математики: Чем проще
          метод, используемый вами для решения задачи, тем быстрее вы ее решите
          и тем меньше вероятность того, что вы допустите ошибку.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
