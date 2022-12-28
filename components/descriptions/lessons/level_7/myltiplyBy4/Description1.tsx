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
        <DescAccent>Умножение на четыре</DescAccent>

        <DescrBody>
          Большинство людей, обладающих даже самыми скромными математическими
          знаниями, совершенно уверены в том, что умеют умножать на 4. Но мы
          все-таки сейчас рокажем, как это делается при помощи способа,
          аналогичного тем, которые Мы рассматривали выше.
        </DescrBody>
        <DescrBody>Полностью правила таковы:</DescrBody>
        <DescAccent align='left'>
          1. Вычтите самую правую цифру данного числа из 10 и прибавьте 5, если
          цифра нечетная.
        </DescAccent>
        <DescAccent align='left'>
          2. Вычтите поочередно каждую цифру данного числа из 9, прибавьте 5,
          если цифра нечетная, и прибавьте половину соседа.
        </DescAccent>
        <DescAccent align='left'>
          3. Напишите под нулем перед заданным числом половину соседа этого нуля
          минус 1.
        </DescAccent>
        <DescrBody>Пример 1. 20 684 умножить на 4.</DescrBody>
        <DescAccent>Первый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[{ digit: 6, isStar: false, isDot: false }]}
          comment='Цифру 4 вычтите из 10:'
        />
        <DescAccent>Второй шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='3 — это 9 минус 8 плюс половина от 4.'
        />
        <DescAccent>Третий шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: true, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='7 — это 9 минус 6 плюс половина от 8.'
        />
        <DescAccent>Четвертый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: true, isDot: false },
            { digit: 6, isStar: true, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 2, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='2 — это 9 минус нуль плюс половина от 6.'
        />
        <DescAccent>Пятый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 0, isStar: true, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 8, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='8 — это 9 минус 2 плюс точка.'
        />
        <DescAccent>Последний шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          comment='Нуль — это половина от 2 минус 1'
        />
        <DescrBody>
          Пример 2. В примере 1 не было необходимости прибавлять дополнительно
          5, так как все цифры числа 20 684 четные. Вот пример, в котором
          некоторые цифры нечетные. Умножить 365 187 на 4.
        </DescrBody>
        <DescAccent>Первый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 7, isStar: true, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[{ digit: 8, isStar: false, isDot: false }]}
          comment='От 10 отнять 7, будет 3, прибавим затем 5, так как 7 нечетно.'
        />
        <DescAccent>Второй шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 7, isStar: true, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 4, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          comment='От 9 отнять 8 плюс половина от 7.'
        />
        <DescAccent>Третий шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 7, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          comment='7 — это 9 минус 1 плюс 5 плюс половина от 8.'
        />
        <DescrBody>
          <b>Четвертый, пятый и шестой шаги</b>. Мы повторяем второе правило.
          Помните о том, что цифры 3 и 5 нечетные и требуют прибавления 5:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 4, isStar: false, isDot: true },
            { digit: 6, isStar: false, isDot: true },
            { digit: 0, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescAccent>Последний шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='4'
          listNumbersResult={[
            { digit: 1, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: true },
            { digit: 6, isStar: false, isDot: true },
            { digit: 0, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          comment='1 — это «половина» от 3 минус 1 плюс точка.'
        />

        <DescrBody>
          Для закрепления этих правил требуется куда меньше упражнений, чем при
          изучении таблицы умножения. Спустя несколько часов все операции
          кажутся естественными и простыми.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
