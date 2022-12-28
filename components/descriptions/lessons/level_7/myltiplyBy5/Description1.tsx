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
        <DescAccent>Умножение на пять</DescAccent>
        <DescrBody>
          Правило умножения на 5 подобно правилу умножения на 6 и 7, только оно
          проще. Вместо того чтобы прибавлять цифру, как мы это делали при
          умножении на 6, или удваивать ее, как при умножении на 7, мы
          используем цифру только для того, чтобы определить ее четность или
          нечетность.
        </DescrBody>
        <DescrBody>
          Если цифра нечетная, берем половину соседа и прибавляем 5. Если цифра
          четная, пишем половину соседа.
        </DescrBody>
        <DescrBody>Предположим, мы хотим 426 умножить на 5:</DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 6, isStar: true, isDot: false },
          ]}
          numberRight='5'
          listNumbersResult={[{ digit: 0, isStar: false, isDot: false }]}
          comment='Смотрим на цифру 6, она четная; 5 не прибавляется (соседа нет).'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 6, isStar: true, isDot: false },
          ]}
          numberRight='5'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
          ]}
          comment='Смотрим на цифру 2, она четная; пишем половину от 6.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          numberRight='5'
          listNumbersResult={[
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
          ]}
          comment='Смотрим на цифру 4, она четная; пишем половину от 2.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          numberRight='5'
          listNumbersResult={[
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
          ]}
          comment='Смотрим на 0, цифра четная; возьмем половину от 4.'
        />
        <DescrBody>
          Если бы мы имели во множимом нечетную цифру, мы бы прибавляли 5:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: true, isDot: false },
          ]}
          numberRight='5'
          listNumbersResult={[{ digit: 0, isStar: false, isDot: false }]}
          comment='Как выше.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 6, isStar: true, isDot: false },
          ]}
          numberRight='5'
          listNumbersResult={[
            { digit: 8, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
          ]}
          comment='3—нечетная; 5 плюс половина соседа (3), т. е. 8.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
          ]}
          numberRight='5'
          listNumbersResult={[
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          Все это легко выполнимо. Вычислений тут очень мало.
        </DescrBody>
        <DescrBody>
          Сначала эти действия покажутся вам немного странными, поскольку
          приходится несколько перестроить ход своих мыслей. Так, вы больше
          используете соседа, чем цифру. Очень полезно поупражняться в умении
          удерживать в поле зрения определенное место числа. Позже, когда мы
          будем умножать одно большое число на другое, мы убедимся, что
          требуется известное умение сосредоточиваться, чтобы вспомнить, в какой
          стадии умножения мы находимся. Данный метод умножения на 5 является
          некоторым предварительным упражнением.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
