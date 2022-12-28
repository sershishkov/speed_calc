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
      <DescAccordion title='Умножение на одиннадцать'>
        <DescrBody>
          Основные правила умножения на 11 заключаются в следующем:
        </DescrBody>
        <DescAccent align='left'>
          1. Последняя цифра множимого (число, которое умножается) записывается
          как самая правая цифра результата,
        </DescAccent>
        <DescAccent align='left'>
          2. Каждая следующая цифра множимого складывается со своим правым
          соседом и записывается в результат.
        </DescAccent>
        <DescAccent align='left'>
          3. Первая цифра множимого становится самой левой циф­рой результата.
          Это последний шаг.
        </DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[]}
          comment=''
        />
        <DescrBody>
          Ответ пишется под 633, по одной цифре справа налево, как ука­зано в
          правилах. Звездочки над множимым в нашем примере пока­зывают цифры,
          используемые в каждом шаге при решении приме­ра. Приступим к решению
          примера.
        </DescrBody>
        <DescAccent>Первое правило:</DescAccent>
        <DescrBody>
          Напишите последнюю цифру числа 633 в качестве правой циф­ры
          результата;
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[{ digit: 3, isStar: false, isDot: false }]}
          comment=''
        />
        <DescAccent>Второе правило:</DescAccent>
        <DescrBody>
          Каждая последующая цифра числа 633 складывается со своим правым
          соседом и записывается в результат. 3 + 3, будет 6. Перед 3 записываем
          в результате 6:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          Применим правило еще раз:6 + 3 будет 9. Записываем и эту цифру в
          результате:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 6, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescAccent>Третье правило</DescAccent>
        <DescrBody>
          Первая цифра числа 633, т. е. 6, становится левой цифрой результата;
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 6, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescAccent align='left'>Ответ: 6963.</DescAccent>
        <DescrBody>
          Большие числа обрабатываются таким же способом. Второе правило
          («каждая последующая цифра множимого складывается со своим правым
          соседом») в нашем примере применено дважды; при больших числах это
          правило может быть применено многократно.Рассмотрим такой пример: 721
          324 умножить на 11:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[]}
          comment=''
        />
        <DescAccent align='center'>Первое правило:</DescAccent>
        <DescrBody>
          Последняя цифра множимого 721 324 пишется в качестве правой цифры
          результата
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[{ digit: 4, isStar: false, isDot: false }]}
          comment=''
        />
        <DescAccent align='center'>Второе правило:</DescAccent>
        <DescrBody>
          Каждая последующая цифра числа 721 324 складывается со своим соседом
          справа и записывается в результат. Применим это правило пять раз:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='2 плюс 4, будет 6.'
        />
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='3 плюс 2, будет 5.'
        />
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 4, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='1 плюс 3, будет 4.'
        />
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='2 плюс 1, будет 3.'
        />
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='7 плюс 2, будет 9.'
        />
        <DescAccent align='center'>Третье правило:</DescAccent>
        <DescrBody>
          Первая цифра числа 721 324 становится левой цифрой результата:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescAccent align='left'>Ответ: 7 934 564.</DescAccent>
        <DescrBody>
          Как видите, каждая цифра данного числа использована дважды. Первый раз
          она использована как «цифра», а в следующем шаге как «сосед». В
          приведенном выше примере цифра 1 (во множимом) была «цифрой*, когда
          она дала 4 в результате, но когда при следующем шаге она участвовала в
          образовании 3, она была «соседом»:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 4, isStar: false, isDot: false },
            { digit: '_', isStar: false, isDot: false },
            { digit: '_', isStar: false, isDot: false },
            { digit: '_', isStar: false, isDot: false },
          ]}
          comment=''
        />
        <Example
          listNumbersLeft={[
            { digit: 7, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
            { digit: 1, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: false },
            { digit: '_', isStar: false, isDot: false },
            { digit: '_', isStar: false, isDot: false },
            { digit: '_', isStar: false, isDot: false },
            { digit: '_', isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          Мы можем вместо трех правил пользоваться только одним, а именно вторым
          — правилом «прибавьте соседа», если будем применять его следующим
          образом. Сначала мы должны перед данным числом написать нуль или по
          крайней мере представить себе, что там находится нуль. Затем мы
          применяем идею «прибавления соседа» поочередно к каждой цифре данного
          числа:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[{ digit: 3, isStar: false, isDot: false }]}
          comment='«Соседа» нет, следовательно, мы ничего не прибавляем.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          comment='Как ранее.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: true, isDot: false },
            { digit: 6, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
          ]}
          comment='Нуль плюс 6, будет 6.'
        />
        <DescrBody>
          Этот пример показывает, для чего нам нужен нуль перед множимым. Он
          должен нам напоминать о том, что действие еще не закончено. Без нуля в
          начале числа мы могли бы забыть написать последнюю цифру и думать, что
          ответ равен только 963. Ответ длиннее данного числа на одну цифру, и
          нуль в начале указывает на это.
        </DescrBody>
        <DescrBody>
          Иногда при сложении числа с его «соседом» в ответе получается число,
          состоящее из двух цифр, так, 5 и 8 дают 13. В этом случае вы пишете 3
          и, как обычно, «переносите» 1. Однако, применяя метод Трахтецберга,
          вам никогда не придется переносить чисел, больших, чем 2. Это очень
          облегчает решение сложных задач. (При переносе единицы достаточно
          поставить точку, в тех редких случаях, когда переносится двойка, — две
          точки.)
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 1, isStar: false, isDot: false },
            { digit: 9, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: true },
            { digit: 9, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment='2—это 12 от сложения 7 и 5.'
        />
        <DescrBody>
          В том случае, когда в длинном числе, начинающемся с цифры 9, следующая
          цифра также велика, скажем 8, как в числе 98 834, мы можем при
          последнем шаге получить 10. Например:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 9, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='11'
          listNumbersResult={[
            { digit: 1, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: true },
            { digit: 1, isStar: false, isDot: true },
            { digit: 7, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
      </DescAccordion>
    </Grid>
  );
}

export default Description;
