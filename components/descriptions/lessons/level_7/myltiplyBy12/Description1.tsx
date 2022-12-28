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
        <DescrBody>Правило умножения на 12 заключается в следующем!</DescrBody>
        <DescAccent>
          Нужно удваивать поочередно каждую цифру и прибавлять к ней ее
          «соседа».
        </DescAccent>
        <DescrBody>
          В отличие от умножения на 11, теперь каждую цифру удваивают, прежде
          чем прибавлять к ней «соседа». Рассмотрим это на примере. Умножим 413
          на 12.
        </DescrBody>
        <DescAccent>Первый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[{ digit: 6, isStar: false, isDot: false }]}
          comment='Удваиваем самую правую цифру и под ней пишем ответ («соседа» нет).'
        />
        <DescAccent>Второй шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='Удваиваем 1 и прибавляем 3.'
        />
        <DescAccent>Третий шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='Удваиваем 4 и прибавляем 1.'
        />
        <DescAccent>Последний шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[
            { digit: 4, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='Удвоенный нуль есть нуль,прибавляем 4.'
        />
        <DescAccent align='left'>Ответ: 4 956.</DescAccent>
        <DescrBody>
          Проделав это самостоятельно, вы убедитесь, что действие производится
          очень быстро и легко.
        </DescrBody>
        <DescrBody>
          Умножим 63 247 на 12. Напишите цифры множимого через интервал и каждую
          цифру результата пишите точно под той цифрой числа 63 247, из которой
          она образовалась. Такой порядок нужен не только ради красоты, он ценен
          тем, что гарантирует от ошибок. При данном методе умножения это
          особенно важно еще и потому, что так удобнее распознавать цифру и
          «соседа».
        </DescrBody>
        <DescrBody>
          Свободное место для следующей цифры ответа находится прямо под цифрой
          (в этом примере — под цифрой, которая должна быть удвоена). Цифра
          рядом справа — «сосед», который должен быть прибавлен:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 7, isStar: true, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[{ digit: 4, isStar: false, isDot: true }]}
          comment='Дважды 7, будет 14; переносим 1.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 7, isStar: true, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: true },
          ]}
          comment='Дважды 4 плюс 7 плюс 1, будет 16;переносим 1'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: true },
          ]}
          comment='Дважды 2 плюс 4 плюс 1, будет 9.'
        />
        <DescrBody>Окончательно:</DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='12'
          listNumbersResult={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: true },
            { digit: 8, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: true },
          ]}
          comment=''
        />
        <DescrBody>
          При умножении на 5, 6 и 7 используется идея деления цифры «пополам».
          Мы берем слово «пополам» в кавычки, так как дроби, которые могут при
          этом встретиться, мы отбрасываем. Так, «половина» от 5 у нас 2. В
          действительности она равна 2 &frac12; , но дроби мы в расчет не берем.
          Так, «половина» от 3 равна 1, а «половина» от 1 равна нулю.
          Разумеется, половина от 4 равна 2. Этот шаг делается непосредственно.
          Мы не говорим про себя: «Половина от 4 будет 2»— или что-либо
          подобное. Мы смотрим на 4 и говорим «2». Попробуйте это проделать со
          следующими цифрами:
        </DescrBody>
        <DescAccent>
          2, 6, 4, 5, 8, 7, 2, 9, 4, 3, 0, 7, 6, 8, 5, 9, 3, 6, 1.
        </DescAccent>
        <DescrBody>
          Отличительная особенность нечетных цифр A, 3, 5, 7 и 9) состоит в том,
          что при делении их «пополам» мы отбрасываем дроби. Четные цифры 0, 2,
          4, 6 и 8) дают обычный результат.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
