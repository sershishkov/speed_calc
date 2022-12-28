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
        <DescAccent>Умножение на восемь</DescAccent>
        <DescrBody>Правила умножения на 8 таковы:</DescrBody>
        <DescAccent align='left'>
          1. Первая цифра: вычтите из 10 и удвойте.
        </DescAccent>
        <DescAccent align='left'>
          2. Средние цифры: вычтите из 9 и удвойте полученное, затем прибавьте
          соседа.
        </DescAccent>
        <DescAccent align='left'>
          3. Левая цифра: вычтите 2 из самой левой цифры большого числа.
        </DescAccent>
        <DescrBody>
          Умножение на 8 аналогично умножению на 9, с той лишь разницей, что
          происходит удвоение разностей и в последнем шаге из левой цифры
          большого числа вычитается не 1, а 2. Рассмотрим пример: 789 X 8:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 9, isStar: true, isDot: false },
          ]}
          numberRight='8'
          listNumbersResult={[{ digit: 2, isStar: false, isDot: false }]}
          comment=''
        />
        <DescrBody>
          Написанная в результате цифра 2 получается после вычитания 9 из 10 и
          удвоения результата. Следующая цифра числа 789 является одной из
          «средних цифр», поэтому мы ее вычитаем из 9, i удваиваем результат и
          прибавляем соседа:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 9, isStar: true, isDot: false },
          ]}
          numberRight='8'
          listNumbersResult={[
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          7 также считается «средней цифрой», мы получим окончательное решение
          лишь тогда, когда достигнем нуля перед числом 789. Поэтому у 7 мы
          удваиваем 2 (из 9 вычесть 7, будет 2), и полученную цифру 4 прибавляем
          к 8:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 7, isStar: true, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 9, isStar: false, isDot: false },
          ]}
          numberRight='8'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: true },
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          Наконец, крайняя левая цифра 7 уменьшается на 2, это дает 5, и мы
          прибавляем перенесенную единицу.
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 7, isStar: true, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
          ]}
          numberRight='8'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: true },
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          Обратите внимание, насколько этот метод, после того как вы его как
          следует усвоили, проще и легче обычного умножения. При обычном методе
          мы должны не только твердо знать таблицу умножения (а многие люди
          неуверенно умножают 8 X 7, 8 х 8 и 8 X 9), но еще и вынуждены
          переносить 7, а затем снова 7. Все это может привести к ошибкам. В
          методе Трахтенберга при умножении не требуется переносить больше
          единицы.
        </DescrBody>
        <DescrBody>
          Само собой разумеется, что лишь тогда владеешь методом, когда умеешь
          пользоваться им, не думая ни о каких «правилах». Чтобы добиться этого,
          необходимо выработать автоматизм в применении метода, который
          достигается после некоторой тренировки.
        </DescrBody>
        <DescrBody>
          Конечно, эти правила применимы и к однозначным числам. Предположим, мы
          хотим умножить 7 на 9. Нет «средних цифр». Поэтому мы, как при обычном
          первом шаге, 7 вычитаем иа 10 и затем, как при последнем шаге,
          вычитаем 1 из 7. Это выглядит следующим образом:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='9'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          comment=''
        />
      </DescAccordion>
    </Grid>
  );
}

export default Description;
