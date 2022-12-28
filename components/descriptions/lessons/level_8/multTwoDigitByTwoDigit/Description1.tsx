import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';

import ExampleColorDigit from '../ExampleColorDigit';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Быстрое умножение прямым методом'>
        <DescrBody>
          Новый подход к умножению приучил нас пользоваться парой цифр множимого
          для получения каждой цифры ответа. Вспомните, что «цифра» стоит
          непосредственно над свободным местом, на котором появится очередная
          цифра результата. «Сосед» — это цифра множимого, находящаяся
          непосредственно справа от «цифры». Такие пары цифра — сосед будут
          снова использованы в этой главе, но теперь уже немного по-другому.
        </DescrBody>
        <DescrBody>
          Мы уже подготовлены к тому, чтобы сделать очередной шаг в изучении
          метода, направленный к сокращению процесса умножения. Мы будем учиться
          умножать одни числа на другие числа независимо от их длины и сразу же
          получать ответ без промежуточных действий. Например, сокращенная форма
          умножения 625 на 346 будет выглядеть так:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 6, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'inherit' },
            { digit: 5, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
            { digit: 6, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[
            { digit: 2, isStar: false, isDot: false, color: 'inherit' },
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 6, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'inherit' },
            { digit: 5, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
          ]}
          comment=''
        />
        <DescrBody>
          Познакомимся с тем, как по зтой форме производится умножение. Ничего
          другого записывать нам уже не придется. Употребляемые при обычном
          умножении три ряда промежуточных чисел нами не используются.
        </DescrBody>
        <DescrBody>
          Имеются два пути решения данной задачи. Каждый из них в определенных
          ситуациях имеет свои преимущества, но оба в конечном счете приводят к
          правильному ответу. К счастью, они имеют много общего, так что легко
          усвоить оба. В зтой главе мы рассмотрим тот путь, который мы называем
          «прямым» методом умножения. Он больше применяется в тех случаях, когда
          множимые содержат малые цифры, такие, как 1, 2 и 3. В следующей главе
          мы используем другой метод, который мы назовем «быстрым умножением».
        </DescrBody>
        <DescrBody>
          Еще раз отметим.что оба метода могут быть применены при решении любой
          задачи. Мы только что высказали свою точку зрения на то, когда какой
          метод предпочтительней применить, но это всецело вопрос удобства, и в
          каждом отдельном случае вы можете сделать выбор по собственному
          усмотрению. Между прочим, заметим, что системой быстрого умножения,
          сходной с прямым методом, пользовались,по-видимому, мастера быстрого
          счета еще до введения системы Трахтенберга. Эти «чародеи-математики»,
          которые эффектными фокусами устного счета приводили зрителей в
          изумление, по обыкновению хранили свои приемы быстрого счета в
          абсолютной тайне; все же представляется, что они, должно быть,
          пользовались чем-то, что походит на наш прямой метод умножения, —
          может быть, с некоторыми изменениями.
        </DescrBody>
        <DescrBody>
          Разрешите начать с простого примера прямого метода и от него двигаться
          к решению более сложных; сначала мы будем умножать сравнительно малое
          число на другое сравнительно малое число.
        </DescrBody>
        <DescAccent>УМНОЖЕНИЕ ДВУЗНАЧНЫХ ЧИСЕЛ НА ДВУЗНАЧНЫЕ</DescAccent>
        <DescrBody>
          Предположим, мы хотим 23 умножить на 14. Мы пишем это по следующей
          форме:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[]}
          comment='(результат пишется здесь под чертой).'
        />

        <DescrBody>
          Запомним прежде всего, что при перемножении двузначных чисел мы ставим
          перед множимым 2 нуля.
        </DescrBody>
        <DescrBody>
          Ответ пишется под 0023, цифра за цифрой, начиная справа. Это означает,
          что последнюю цифру ответа мы должны написать под 3 и, двигаясь влево
          цифра за цифрой, записать оставшуюся часть ответа.
        </DescrBody>
        <DescAccent>Первый шаг.</DescAccent>
        <DescrBody>
          Умножим крайнюю справа цифру множимого (3) на крайнюю справа цифру
          множителя (4). В ответе мы записываем 2 от числа 12 и переносим 1
          (используя точку)
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumbersResult={[
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '.',
              color: 'inherit',
            },
          ]}
          comment='3 X 4 = 12; пишем 2 и переносим 1.'
        />
        <DescAccent>Второй шаг.</DescAccent>

        <DescrBody>
          Следующая цифра результата пишется под второй цифрой справа (2); она
          получается путем сложения двух промежуточных слагаемых. Одно из них
          (8) получается при умножении цифр 2 и 4:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'green' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumbersResult={[
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '.',
              color: 'inherit',
            },
          ]}
          comment=''
        />
        <DescrBody>
          Второе промежуточное слагаемое получается в результате перемножения 3
          и 1:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'green' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '.',
              color: 'inherit',
            },
          ]}
          comment=''
        />
        <DescrBody>
          Сложим теперь оба промежуточных результата: 8 + 3 = 11; прибавим
          теперь перенесенную 1, так что следующая «цифра» ответа будет 12;
          значит, пишем 2 и 1 переносим:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '.',
              color: 'inherit',
            },
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '.',
              color: 'inherit',
            },
          ]}
          comment='2x4 = 8; 3x1 = 3; 8 + 3 = 11; прибавляя перенесенную 1, получим 12.'
        />

        <DescAccent>Последний шаг.</DescAccent>
        <DescrBody>
          Умножим левую цифру множимого (2) на левую цифру множителя (1):
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 2, isStar: false, isDot: false, color: 'green' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'green' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '.',
              color: 'inherit',
            },
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '.',
              color: 'inherit',
            },
          ]}
          comment='2x1 = 2 плюс перенесенная 1, будет 3.'
        />

        <DescrBody>
          В этом случае нам нет необходимости использовать левый нуль, который
          мы написали перед числом. Нуль стоит там только для того, чтобы дать
          место для переносимой цифры в том случае, когда встретится число,
          большее или равное 1Ю.
        </DescrBody>
        <DescrBody>
          Второй шаг является для нас новым. Для получения одной цифры
          результата мы использовали 4 цифры сомножителей. Промежуточные
          результаты (8 и 3) мы получили в результате перемножения двух пар
          чисел, которые мы будем называть «внешней парой» и «внутренней парой».
        </DescrBody>
        <DescAccent>Правило нахождения этих пар следующее:</DescAccent>
        <DescrBody>
          Цифра множимого, которую мы в данный момент обрабатываем, т. е. цифра,
          стоящая над очередной искомой цифрой результата, является частью
          внешней пары (в приведенном примере это цифра 2 из числа 23).
        </DescrBody>
        <DescrBody>
          Другой цифрой внешней пары будет правая цифра множителя (в нашем
          примере это 4 из числа 14). Вторая пара — внутренняя 3 и 1) образуется
          из цифр, стоящих непосредственно друг возле друга, внутри только что
          использованной внешней пары.
        </DescrBody>
        <DescrBody>
          «Внешней парой» и «внутренней парой» мы будем пользоваться часто.
          Поэтому эти понятия надо хорошо усвоить.
        </DescrBody>
        <DescAccent>Пример:</DescAccent>
        <DescrBody>
          Умножение 38 на 14. Припишем к числу 38 слева 2 нуля:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
            { digit: 8, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[]}
          comment=''
        />
        <DescAccent>Первый шаг.</DescAccent>
        <DescrBody>
          Прежде всего мы умиожаем 8 на 4 и получаем 32. Пишем 2 и переносим 3:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
            { digit: 8, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumbersResult={[
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '3',
              color: 'inherit',
            },
          ]}
          comment=''
        />
        <DescAccent>Второй шаг.</DescAccent>
        <DescrBody>
          Чтобы найти следующее число, мы используем внешнюю и внутреннюю пары.
          Цифра числа 38, с которой мы сейчас работаем, это 3, так как она стоит
          Как раз над тем местом, где появится очередная цифра нашего ответа.
          Поэтому 3 Является частью внешней пары. Какова же другая цифра внешней
          пары? Конечно 4 (внешняя цифра числа 14). Между этими цифрами —
          внутренняя пара (8 и 1)
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'green' },
            { digit: 8, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumbersResult={[
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '3',
              color: 'inherit',
            },
          ]}
          comment=''
        />
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
            { digit: 8, isStar: false, isDot: false, color: 'green' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'green' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '3',
              color: 'inherit',
            },
          ]}
          comment=''
        />

        <DescrBody>
          Теперь умножайте: 3 на 4, будет 12; 8 на 1, будет 8. Сложите два
          частичных произведения 12 и 8, и вы получите 20. Так как нужно
          прибавить перенесенную 3, в результате — 23. Напишите 3 и перенесите
          2:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'inherit' },
            { digit: 8, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'inherit' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[
            {
              digit: 3,
              isStar: false,
              isDot: true,
              dots: '2',
              color: 'inherit',
            },
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '3',
              color: 'inherit',
            },
          ]}
          comment=''
        />
        <DescAccent>Последний шаг:</DescAccent>
        <DescrBody>
          Умножьте обе левых цифры (3 из числа 38 и 1 из числа 14) Это дает 3;
          перенесенная 2 увеличивает ее до 5:
        </DescrBody>
        <ExampleColorDigit
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 0, isStar: false, isDot: false, color: 'inherit' },
            { digit: 3, isStar: false, isDot: false, color: 'green' },
            { digit: 8, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumberRight={[
            { digit: 1, isStar: false, isDot: false, color: 'green' },
            { digit: 4, isStar: false, isDot: false, color: 'inherit' },
          ]}
          listNumbersResult={[
            {
              digit: 0,
              isStar: false,
              isDot: false,
              dots: '',
              color: 'inherit',
            },
            {
              digit: 5,
              isStar: false,
              isDot: false,
              dots: '',
              color: 'inherit',
            },
            {
              digit: 3,
              isStar: false,
              isDot: true,
              dots: '2',
              color: 'inherit',
            },
            {
              digit: 2,
              isStar: false,
              isDot: true,
              dots: '3',
              color: 'inherit',
            },
          ]}
          comment=''
        />

        <DescrBody>
          Если вы проанализируете те действия, которые мы сейчас разбирали, то
          убедитесь, что они очень просты. Вам требовалось перемножить два
          двузначных числа. Чтобы выполнить это, вы находили правую цифру
          ответа, перемножив обе правые цифры (так, при умножении 23 на 14 вы
          умножили 3 на 4). Чтобы найти левую цифру ответа, вы перемножили обе
          левые цифры (умножая 23 на 14, вы умножили 2 на 1). Чтобы получить
          средние цифры ответа, вы использовали внешнюю и внутреннюю пары.
          Каждая пара состоит из двух цифр, умножаемых одна на другую, так что
          каждая пара дает одно число. Затем оба эти числа складываются; и вы
          получаете часть результата.
        </DescrBody>
        <DescrBody>
          В дальнейшем мы этими внешними и внутренними парами будем пользоваться
          все чаще и больше. Разумеется, когда вы самостоятельно решаете задачу,
          нет необходимости выделять пары связывающих цифры. В первых параграфах
          это было сделано лишь для того, чтобы объяснить метод решения задачи.
          На практике внешнюю пару можно определить тем, что она содержит ту
          цифру множимого, которая стоит прямо над следующим свободным местом,
          где станет следующая цифра ответа. Внутренняя пара — это пара цифр,
          стоящих между цифрами внешней пары.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
