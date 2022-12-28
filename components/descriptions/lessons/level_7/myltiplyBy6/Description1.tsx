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
        <DescAccent>Умножение на шесть</DescAccent>
        <DescrBody>
          Рассмотрим подробнее умножение на 6. Приводим часть правил умножения
          на 6:
        </DescrBody>
        <DescAccent align='left'>
          Прибавить к каждой цифре «половину» «соседа».
        </DescAccent>
        <DescrBody>
          Допустим временно, что это все, что нам необходимо знать об умножении
          на 6, и решим следующую задачу!
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[]}
          comment=''
        />
        <DescAccent>Первый шаг.</DescAccent>
        <DescrBody>
          4 является правой цифрой данного числа, и, так как «соседа» у нее нет,
          прибавлять нечего:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[{ digit: 4, isStar: false, isDot: false }]}
          comment=''
        />
        <DescAccent>Второй шаг.</DescAccent>
        <DescrBody>
          Вторая цифра 8, ее «сосед» 4. Мы берем 8, прибавляем половину 4 (2) и
          получаем 10:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 0, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescAccent>Третий шаг.</DescAccent>
        <DescrBody>
          Следующая цифра нуль. Мы прибавляем к ней половину «соседа» — 8; 0 +
          4, будет 4, плюс перенос (1):
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: true, isDot: false },
            { digit: 8, isStar: true, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 5, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>Окончательно:</DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>Приведем теперь полное правило умножения на 6:</DescrBody>
        <DescAccent align='left'>
          Прибавьте к каждой цифре половину «соседа» и еще 5 в том случае, если
          цифра нечетная.
        </DescAccent>
        <DescrBody>
          Является ли «сосед» четным или нечетным — никакой роли не играет. Мы
          смотрим только на «цифру»: если она четная, прибавляем к ней половину
          «соседа», если нечетная, то, кроме «половины» «соседа», прибавляем еще
          5. Например:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[]}
          comment=''
        />
        <DescrBody>
          Цифры 3 и 5 — нечетные. Поэтому, обрабатывая 3 и 5, мы дополнительно
          должны прибавить 5 только потому, что они нечетные. Это происходит
          следующим образом:
        </DescrBody>
        <DescAccent>Первый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 2, isStar: true, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[{ digit: 2, isStar: false, isDot: false }]}
          comment='2—четная и не имеет "соседа" напишем,ее снизу.'
        />
        <DescAccent>Второй шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 5, isStar: true, isDot: false },
            { digit: 2, isStar: true, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment='5—нечетная; 5 плюс 5 плюс половина от 2, будет 11.'
        />
        <DescAccent>Третий шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: true, isDot: false },
            { digit: 5, isStar: true, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 3, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment='«Половина» от 5, будет 2; затем прибавим перенос.'
        />
        <DescAccent>Четвертый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 0, isStar: true, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 8, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment='3—нечетная; 3 плюс 5, будет 8.'
        />
        <DescAccent>Пятый шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 5, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment='4 плюс «половина» от 3.'
        />
        <DescAccent>Шестой шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 6, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment='4 плюс половина от 4.'
        />
        <DescAccent>Последний шаг.</DescAccent>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 2, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 5, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
            { digit: 3, isStar: false, isDot: false },
            { digit: 1, isStar: false, isDot: true },
            { digit: 2, isStar: false, isDot: false },
          ]}
          comment='Нуль плюс половина от 4.'
        />
        <DescAccent align='left'>Ответ: 2 658 312.</DescAccent>
        <DescrBody>
          Разумеется, все эти объяснения приводятся здесь только для большей
          ясности, поскольку метод излагается впервые. При практическом
          применении метода это делается быстро, так как шаг прибавления
          «соседа» очень прост. Достаточно нескольких упражнений, и он
          выполняется автоматически, без всяких предварительных рассуждений.
        </DescrBody>
        <DescrBody>
          Числа, которые мы умножали на 6, были длинными. А будет ли работать
          метод, если мы попытаемся умножать на шесть однозначные числа,
          например 6 на 6? Да, и даже не потребуется никаких изменений.
          Попробуем умножить 8 на 6, применив тот же способ:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[{ digit: 8, isStar: false, isDot: false }]}
          comment='«Соседа» нет; пишем просто 8.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 4, isStar: false, isDot: false },
            { digit: 8, isStar: false, isDot: false },
          ]}
          comment='Нуль плюс половина от 8, будет 4.'
        />
        <DescrBody>
          Когда множимое нечетное, например 7, то при первом шаге мы должны
          прибавить 5. Разумеется, мы ее не прибавляем при ыором шаге, так как
          нуль мы рассматриваем как четное число!
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[{ digit: 2, isStar: false, isDot: true }]}
          comment='7 плюс 5, будет 12.'
        />
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 7, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 4, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: true },
          ]}
          comment='Нуль плюс «половина» от 7 плюс перенесенная 1.'
        />
        <DescrBody>
          Большинство людей, по-видимому, считают, что знают наизусть таблицу
          умножения на 6. Во всяком случае, математики обычно искренне в этом
          уверены, хотя и не всегда имеют на то основание. Использованные в
          данном методе умножения приемы будут нами в дальнейшем применены в
          более сложных ситуациях без всяких выучиваемых наизусть таблиц. Но
          демонстрировать новые способы лучше всего на относительно знакомом
          материале. Что мы сейчас и делаем.
        </DescrBody>
        <DescrBody>
          Таким же образом (и это важнее, чем может казаться) постепенно
          прививаются необходимые для вычислений умственные навыки. Все мы
          слышали о критике манеры чтения у малокультурных людей, слышали также
          о клиниках, в которых развивают способность к быстрому чтению. Критики
          утверждают, что слишком многие люди имеют привычку читать букву за
          буквой, складывая по слогам все, что они читают. Нам рекомендуется
          совершенствовать наши навыки в чтении, воспринимая сразу, целиком
          слово или фразу. Указывается и на другие моменты. Все они сводятся к
          следующему: большинство людей настолько плохо читают, насколько-
          неудовлетворительны их навыки в чтении.
        </DescrBody>
        <DescrBody>
          В какой-то степени это справедливо и для арифметики. Тот, кто
          подвержен этим скверным привычкам в арифметике, в результате попусту
          расточает свое время и энергию. Только те, кто большую часть своего
          времени имеет дело с числами, например бухгалтеры, сами вырабатывают
          удобные для себя приемы. Но и остальные люди, не занимающиеся
          вычислениями заработка ради, могут при известном напряжении и
          небольшой тренировке овладеть полезными приемами счета.
        </DescrBody>
        <DescrBody>
          Один из таких мысленных приемов, кстати очень простой, как раз и был
          упомянут, когда мы говорили о «половине соседа». Необходимо
          натренировать себя до такой степени, чтобы при взгляде на отдельную
          цифру, скажем 2 или 8, тут же говорить «1» или «4», не делая в уме
          никаких промежуточных шагов. Как только мы видим 2 или 8, ответ должен
          возникнуть в уме немедленно, как бы в результате рефлекса.
        </DescrBody>
        <DescrBody>
          Следующий шаг состоит в том, чтобы при прибавлении соседа или половины
          соседа (мы уже привыкли к этим условным терминам, поэтому позволим
          себе писать их без кавычек) говорить про себя только ответ, как в этом
          примере:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 2, isStar: false, isDot: false },
            { digit: 6, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 8, isStar: false, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          8 — это 6 + половина от 4. Но не говорите: «Половина от 4— это 2 и 6
          4- 2 — это 8». Вместо этого посмотрите на 6 и 4, заметьте, что
          половина 4 равна 2, и скажите про себя: «6, 8». Вначале это будет
          трудновато, поэтому, пожалуй, лучше сказать про себя «6, 2, 8».
        </DescrBody>
        <DescrBody>
          Еще один пункт, требующий упражнения, — это шаг с прибавлением 5,
          когда цифра (а не сосед!) нечетная. Возьмите такой случай:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: false, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 4, isStar: true, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 0, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          Как указывает точка, нуль является нулем от 10, а 10 — это 3 плюс 5
          (так как 3 нечетно) плюс 2 (половина от 4). Для начала правильное
          действие состоит в том, чтобы сказать «3, 5, 2, 10». Прежде всего надо
          прибавить 5, которая появляется потому, что 3 нечетно, иначе мы можем
          забыть это сделать. Так же следует поступать, когда вместо
          перенесенной единицы стоит точка, которую надо «прибавить» перед тем,
          как мы прибавляем соседа (при умножении на 11) или половину соседа
          (при умножении на 6). Если же мы будем пытаться не трогать
          перенесенную единицу до того, как мы прибавили соседа, мы ее иногда
          будем забывать. В приведенной выше задаче очередную цифру ответа мы
          находим следующим образом:
        </DescrBody>
        <Example
          listNumbersLeft={[
            { digit: 0, isStar: false, isDot: false },
            { digit: 6, isStar: true, isDot: false },
            { digit: 3, isStar: true, isDot: false },
            { digit: 4, isStar: false, isDot: false },
          ]}
          numberRight='6'
          listNumbersResult={[
            { digit: 8, isStar: false, isDot: false },
            { digit: 0, isStar: false, isDot: true },
            { digit: 4, isStar: false, isDot: false },
          ]}
          comment=''
        />
        <DescrBody>
          «Прибавляя» точку, мы смотрим на 6 и говорим «7», затем мы говорим
          «8», прибавляя половину от 3. Для начала, «прибавляя» точку, лучше
          посмотреть на 6 и сказать «7», затем сказать «1» для половины от 3,
          затем «8», написать 8. Когда надо «прибавить» точку и 5 (так как цифра
          нечетная), вы говорите «6» вместо «5» и прибавляете саму цифру. Это
          экономит шаг и легко может быть проделано.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
