import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';
import Example from '../Example';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescAccent>Умножение на три</DescAccent>
        <DescrBody>
          Умножение на 3, за некоторыми исключениями, похоже на умножение на 8.
          Вместо того чтобы прибавлять соседа, как при умножении на 8, мы теперь
          прибавляем только половину соседа. Само собой разумеется, когда цифра
          нечетная, то мы дополнительно прибавляем еще и 5.
        </DescrBody>
        <DescrBody>
          Правила умножения на 3 выглядят следующим образом:
        </DescrBody>
        <DescAccent align='left'>
          1. Первая цифра: вычтите ее из 10 и удвойте. Если цифра нечетная,
          прибавьте 5.
        </DescAccent>
        <DescAccent align='left'>
          2. Средние цифры: вычтите цифру из 9 и полученное удвойте, затем
          прибавьте половину соседа и 5, если цифра нечетная.
        </DescAccent>
        <DescAccent align='left'>
          3. Самая левая цифра: разделите на 2 самую левую цифру большого числа
          и вычтите 2.
        </DescAccent>
        <DescrBody>Умножим 2588 на 3.</DescrBody>
        <DescAccent>Первый шаг.</DescAccent>

        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 8, isStar: true, isDot: false },
          ]}
          numberRight='3'
          listNumbersResult={[{ digit: 4, isStar: false, isDot: false }]}
          comment='4 — это 10 минус 8, удваиваем; соседа нет.'
        />
        <DescAccent>Второй шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 8, isStar: true, isDot: false },
          ]}
          numberRight='3'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='6 — это 9 минус 8, удваиваем (получаем 2),плюс половина от 8.'
        />

        <DescAccent>Третий шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 5, isStar: true, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          numberRight='3'
          listNumbersResult={[
            { digit: 7, isStar: false, isDot: true },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='9 минус 5, удваиваем, плюс 5, плюс половина от 8.'
        />
        <DescAccent>Четвертый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 5, isStar: true, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          numberRight='3'
          listNumbersResult={[
            { digit: 7, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: true },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescAccent>Последний шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          numberRight='3'
          listNumbersResult={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: true },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Нуль — это половина от 2, плюс точка и минус 2.'
        />
        <DescrBody>
          В последнем шаге мы, как всегда, получаем самую левую цифру ответа из
          самой левой цифры данного числа. При умножении на 8 мы эту последнюю
          цифру ответа получали, уменьшив самую левую цифру данного числа на 2.
          Сейчас, при умножении на 3, мы уменьшаем половину этой цифры на 2.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
