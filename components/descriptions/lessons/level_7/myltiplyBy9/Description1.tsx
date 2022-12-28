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
        <DescAccent>Умножение на девять</DescAccent>
        <DescrBody>
          При умножении на 8 и 9 мы мысленно делаем еще один новый шаг, который
          требует дальнейших упражнений. Раньше мы только складывали цифры,
          теперь нам нужно будет вычитать цифру из 9 или 10. Предположим, мы
          хотим 4567 умножить на 8 или 9. В обоих этих случаях первый шаг
          состоит в том, чтобы последнюю цифру большого числа (7) вычесть из 10.
          Мы начинаем с того, что смотрим на правый край числа 4 5б7 и говорим
          «3». Надо предварительно говорить: «10 минус 7, будет 3», реакция
          должна быть немедленная. Мы смотрим на 7 и говорим «3». Проверьте
          быстроту вашей реакции — посмотрите на каждую из следующих цифр и
          тотчас же скажите получаемый результат после вычета ее из 10:
        </DescrBody>
        <DescAccent>7, 6, 9, 2, 8, 1, 7, 4, 2, 3, 9, 6, 5, 3, 1, 9.</DescAccent>
        <DescrBody>
          Иногда нам придется вычитать цифру не из 10, а из 9. Мы смотрим,
          например, на цифру 7 и тут же говорим «2». Попробуйте как можно
          быстрее проделать это со следующими цифрами:
        </DescrBody>
        <DescAccent>
          7, 8 , 2, 4, 9, 5, 1, 7, 2, 0, 3, 8, 6, 5, 1, 0.
        </DescAccent>
        <DescrBody>
          Теперь вы сможете легко и быстро умножать на 9, не пользуясь таблицей
          умножения. Лучше всего это пояснит правило, которое нет необходимости
          выучивать наизусть, ибо после некоторой тренировки оно само закрепится
          в вашей памяти. Правило это гласит:
        </DescrBody>
        <DescAccent align='left'>
          1. Вычтите правую цифру большого числа из 10. Это дает правую цифру
          результата.
        </DescAccent>
        <DescAccent align='left'>
          2. Возьмите поочередно каждую из следующих цифр до самой последней,
          вычтите ее из 9 и прибавьте соседа.
        </DescAccent>
        <DescAccent align='left'>
          3. В последнем шаге, когда вы будете рассматривать цифру нуль, стоящую
          перед длинным числом, вычтите 1 из соседа, и полученное число будет
          самой левой цифрой результата.
        </DescAccent>
        <DescrBody>
          Если имеется точка (перенесенная 1), то, разумеется, при всех этих
          шагах вы, как обычно, должны ее прибавить.
        </DescrBody>
        <DescrBody>Рассмотрим пример: 8769 умножить на 9:</DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
          ]}
          numberRight='9'
          listNumbersResult={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: true },
            { digit: 1, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>Во-первых, вычитаем 9 из 10, получаем 1.</DescrBody>
        <DescrBody>
          Во-вторых, вычитаем 6 из 9 (получаем 3) и прибавляем соседа (9).
        </DescrBody>
        <DescrBody>Результат — 12, поэтому мы пишем точку и 2.</DescrBody>
        <DescrBody>
          В-ретьих, 7 вычитаем из 9 (получаем 2), плюс сосед (6), будет 8 и
          «плюс точка», будет 9.
        </DescrBody>
        <DescrBody>
          В-четвертых, 8 вычитаем из 9, будет 1, плюс сосед, будет 8.
        </DescrBody>
        <DescrBody>
          В-пятых, это последний шаг; мы рассматриваем самую левую цифру — нуль,
          поэтому мы уменьшаем самую левую цифру от числа 8769 на 1, и 7
          становится самой левой цифрой результата.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
