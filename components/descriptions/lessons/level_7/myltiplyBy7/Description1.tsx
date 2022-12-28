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
        <DescAccent>Умножение на семь</DescAccent>
        <DescrBody>
          Правило умножения на 7 очень похоже на правило умножения на 6:
        </DescrBody>
        <DescAccent align='left'>
          Удвойте цифру и прибавьте половину соседа. Если цифра нечетная,
          прибавьте еще 5.
        </DescAccent>
        <DescrBody>Предположим, что мы хотим умножить 4242 на 7.</DescrBody>
        <DescrBody>
          Так как в этом числе нет нечетных цифр, то нам нет никакой
          необходимости дополнительно прибавлять 5. В этом примере мы действуем
          так же, как и при умножении на 6, если не считать того, что теперь мы
          удваиваем цифру:
        </DescrBody>

        <DescAccent>Первый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[{ digit: 4, isStar: false, isDot: false }]}
          comment='Дважды 2 будет 4.'
        />
        <DescAccent>Второй шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Дважды 4 плюс половина соседа.'
        />
        <DescAccent>Третий шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Дважды 2 плюс половина соседа.'
        />
        <DescAccent>Четвертый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Дважды 4 плюс половина соседа.'
        />
        <DescAccent>Последний шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 2, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Дважды нуль—нуль, но еще прибавляется половина соседа.'
        />
        <DescrBody>А вот пример с нечетными цифрами:</DescrBody>
        <DescAccent>Первый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[{ digit: 4, isStar: false, isDot: false }]}
          comment='Дважды 2; соседа нет.'
        />
        <DescAccent>Второй шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Дважды. 1 плюс 5 (1 — нечетная), будет 7, и плюс половина от 2.'
        />
        <DescAccent>Третий шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 8, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Четная: дважды 4 плюс половина от 1.'
        />
        <DescAccent>Четвертый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: true },
            { digit: 8, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Дважды 3 плюс 5 (3—нечетная) плюс половина от 4, будет 13.'
        />
        <DescAccent>Последний шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='7'
          listNumbersResult={[
            { digit: 2, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: true },
            { digit: 8, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='Дважды 0 будет 0, но надо прибавить еще половину от 3 и оставшуюся единицу.'
        />
        <DescrBody>Вот перечень рекомендуемых мысленных шагов:</DescrBody>
        <DescrBody>
          1. Скажите «1» вместо точки, когда переносится единица.
        </DescrBody>
        <DescrBody>
          2. Смотрите на следующую цифру и установите, нечетная ли она.
        </DescrBody>
        <DescrBody>
          Если да, то прибавьте 5 к перенесенной единице и скажите «6», или
          скажите «5», если точки не было.
        </DescrBody>
        <DescrBody>
          3. Когда мы смотрим на цифру и удваиваем ее в уме, мы говорим сумму 5
          и этой удвоенной цифры. Если, например, эта цифра 3, то мы говорим
          «5», а затем «11», так как удвоение 3, дающее 6, и прибавление 5 могут
          быть проделаны одним шагом.
        </DescrBody>
        <DescrBody>
          4. Когда мы смотрим на соседа, например 6, мы половину от 6 прибавляем
          к тому, что уже имеем. Мы только, что сказали, что у нас «11». Если
          сосед 6, мы затем говорим «14».
        </DescrBody>
        <DescrBody>
          Разрешите на этом процессе немного задержаться. Упражнение, с которым
          связано решение такого рода задач, очень ценно, ибо оно развивает
          способность сосредоточиваться, а в умении сосредоточиться практически
          весь секрет успеха. Эта способность не может быть достигнута сразу, но
          мы можем облегчить себе задачу тем, что некоторые отдельные ступени
          последовательно пройдем следующим образом:
        </DescrBody>
        <DescrBody>
          Во-первых, посмотрите на каждую из следующих цифр, удвойте ее и громко
          сразу же, без всяких промежуточных шагов, назовите полученное число.
          (Когда смотрите на 3, говорите тотчас же «6», не произнося «3».)
        </DescrBody>
        <DescAccent>2, 4, 1, 6, 0, 3, 5, 1, 4, 3, 8, 2, 6, 3,</DescAccent>
        <DescAccent>7, 5, 9, 2, 1, 0, 6, 3, 5, 2, 6, 8, 7, 4.</DescAccent>
        <DescrBody>
          Во-вторых, посмотрите на каждую левую цифру из каждой следующей пары
          чисел, произнесите вслух ее удвоенное значение (так, посмотрите на 3 и
          скажите «6»), затем прибавьте ее соседа (у пары 34 скажите «6,10»).
          Это и есть быстрый путь умножения на 12
        </DescrBody>
        <DescAccent>21__34__20__11__22__02</DescAccent>
        <DescAccent>27__15__60__71__45__09</DescAccent>
        <DescAccent>32__38__74__52__82__41</DescAccent>
        <DescrBody>
          В-третьих, в каждой следующей паре чисел смотрите на левую цифру,
          назовите громко ее удвоенное значение и прибавьте половину соседа
          (так, посмотрите на 26 и скажите «4, 7»). Это умножение на семь при
          четных цифрах:
        </DescrBody>
        <DescAccent>26__27__40__61__26__44</DescAccent>
        <DescAccent>04__22__29__81__88__89</DescAccent>
        <DescAccent>66__43__67__49__81__07</DescAccent>
        <DescrBody>
          В-четвертых, всмотритесь в каждое из следующих чисел и скажите «5»,
          затем «5 плюс удовоенное число» (смотря на 3, говорите «5, «11»):
        </DescrBody>
        <DescAccent>7, 5, 3, 1, 9, 3, 7, 5, 1.</DescAccent>
        <DescrBody>Проделайте все эти примеры еще раз!</DescrBody>
        <DescrBody>
          В-пятых, в каждой следующей паре чисел смотрите на левое число,
          скажите «5», затем скажите результат от 5 плюс удвоенное число, как мы
          это только что делали, прибавьте сразу же половину соседа и скажите
          результат (для пары 3 4 скажите «5, 11, 13»). Это умножение на семь
          при нечетных цифрах!
        </DescrBody>
        <DescAccent>10__12__16__18</DescAccent>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
