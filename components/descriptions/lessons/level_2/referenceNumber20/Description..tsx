import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';

import ExampleTableMult from '../../../../descriptions/lessons/tables/ExampleTableMult';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescAccent>Опорное число</DescAccent>
        <DescrBody>
          Мы еще не до конца разобрались с методом перемножения чисел. Для
          задач, которые мы рассматривали до сих пор, метод работал безупречно.
          Теперь, после некоторой модификации, мы сможем применить его к любым
          числам.
        </DescrBody>

        <DescAccent>
          Число 10 в качестве опорного Вернемся к примеру 7 х 8.
        </DescAccent>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='10'
          numberLeft='7'
          numberRight='8'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescrBody>
          Число 10 слева от примера является опорным. Это число, из которого мы
          вычитаем множители.
        </DescrBody>
        <DescrBody>
          Итак, запишем опорное число слева от примера. Теперь спросим себя,
          числа, которые мы перемножаем, являются больше (выше) или меньше
          (ниже), чем опорное число? В рассматриваемом случае множитель меньше
          (ниже), чем опорное число, оба раза. Поэтому рисуем кружки ниже
          множителей. На сколько множители меньше опорного числа? На З и 2
          соответственно. Вписываем З и 2 в кружки. 7 равно 10 минус З, поэтому
          ставим знак «минус» перед кружком с цифрой З. 8 — это 10 минус 2,
          значит, ставим знак «минус» и перед кружком с цифрой 2
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='10'
          numberLeft='7'
          numberRight='8'
          valueIntermediate=''
          hintMinusLeft='3'
          hintMinusRight='2'
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={false}
        />

        <DescrBody>
          Теперь вычитаем накрест. 7 минус 2 и 8 минус З дают 5. Записываем 5
          после знака равенства. Теперь умножим 5 на опорное число 10. 5,
          умноженное на 10, дает 50, поэтому записываем 0 после 5. (При
          умножении любого числа на 10 достаточно дописать к числу справа нуль.)
          50 является нашим промежуточным результатом.
        </DescrBody>
        <DescrBody>
          Теперь перемножим числа в кружках. З на 2 дает 6. Прибавим результат к
          50 и получим окончательный ответ: 56. полностью решенный пример
          выглядит так:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='10'
          numberLeft='7'
          numberRight='8'
          valueIntermediate='50'
          hintMinusLeft='3'
          hintMinusRight='2'
          valueToAdd=''
          valueToMinus='+6'
          valueResult='56'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescAccent>Число 100 в качестве опорного</DescAccent>
        <DescrBody>
          Каким было опорное число для примера 96 х 97 в главе 1? 100, поскольку
          мы также выясняли, сколько не хватает у 96 и 97, чтобы получилось 100.
          Пример, решенный полностью, теперь выглядел бы так:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='100'
          numberLeft='96'
          numberRight='97'
          valueIntermediate='9300'
          hintMinusLeft='4'
          hintMinusRight='3'
          valueToAdd=''
          valueToMinus='+12'
          valueResult='9312'
          displayRowPlusHits={false}
          displayRowMinusHints={true}
          displayRowResults={true}
        />

        <DescrBody>
          Прием для счета в уме, который я приводил выше, просто заставляет вас
          использовать данный метод. Давайте перемножим 98 на 98, и вы поймете,
          что я имею в виду.
        </DescrBody>
        <DescrBody>
          Вычитаем 98 и 98 из 100 и получаем 2 и 2. Отнимаем 2 от 98 и получаем
          96. Но мы говорим не «девяносто шесть», а «девять тысяч шестьсот...».
          9600 получится, когда мы умножим 96 на вспомогательное число 100.
          Теперь перемножим числа в кружках. Произведение 2 на 2 равняется 4,
          поэтому окончательным ответом будет 9604
        </DescrBody>
        <DescrBody>
          Теперь вы, возможно, уже умеете быстро находить ответы для подобных
          примеров. Наверняка вполне освоили данный метод и применительно к
          числам меньше 10, решая соответствующие примеры с завидной скоростью.
          Например, если вы захотите вычислить, сколько будет 9 х 9, то
          немедленно «увидите» по единичке под каждой девяткой. 9 минус 1 дает 8
          — и вы сразу получаете 80 (произведение 8 на 10). 1 на 1 дает 1. Таким
          образом, в ответе вы получаете 81
        </DescrBody>
        <DescAccent>Умножение чисел от 10 до 20</DescAccent>
        <DescrBody>
          Посмотрим, как работает метод для перемножения чисел от 10 до 20. В
          качестве примера возьмем 13 х 14, а 10 — в качестве опорного числа.
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft=''
          hintPlusRight=''
          refNumber='10'
          numberLeft='13'
          numberRight='14'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={false}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescrBody>
          И 13, и 14 больше (выше) опорного числа 10, поэтому рисуем кружки над
          множителями. На сколько они больше опорного числа? На З и 4
          соответственно. Поэтому вписываем З и 4 в кружки над 13 и 14. 13 равно
          10 плюс З, поэтому ставим знак «плюс» перед цифрой З; 14 равно 10 плюс
          4, поэтому ставим знак «плюс» перед цифрой 4.
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='4'
          refNumber='10'
          numberLeft='13'
          numberRight='14'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescrBody>
          Как и прежде, складываем накрест. И 13 плюс 4, и 14 плюс З равно 17.
          Пишем 17 после знака равенства. Умножаем 17 на опорное число 10 и
          получаем 170 — это наш промежуточный результат, записываем его после
          знака равенства.Прибавляем 12 к 170 и получаем ответ: 182. Вот так
          выглядит полностью решенный пример:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='3'
          hintPlusRight='4'
          refNumber='10'
          numberLeft='13'
          numberRight='14'
          valueIntermediate='170'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+12'
          valueToMinus=''
          valueResult='182'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />

        <DescrBody>
          Если число, которое перемножаем, больше (выше) опорного, мы помещаем
          кружок над числом. Если число меньше (ниже) опорного, мы рисуем кружок
          под числом.
        </DescrBody>
        <DescrBody>
          Если числа в кружках выше множителей, мы склаДываем накрест, если же
          они ниже, тогда вычитаем накрест.
        </DescrBody>
        <DescrBody>
          Если вы где-то допустили ошибку, прочтите раздел заново и выясните,
          что сделали не так, после чего попробуйте решить примеры снова
        </DescrBody>
        <DescrBody>
          А как бы вы перемножали 12 и 21? Давайте разберем данный пример.
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='2'
          hintPlusRight='11'
          refNumber='10'
          numberLeft='12'
          numberRight='21'
          valueIntermediate=''
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd=''
          valueToMinus=''
          valueResult=''
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={false}
        />

        <DescrBody>
          В качестве опорного числа берем 10. Оба множителя больше 10, поэтому
          рисуем кружки над ними. 12 больше 10 на 2, а 21 — на 11, поэтому
          вписываем 2 и 11 в соответствующие кружки. 21 плюс 2 равно 23, которое
          после умножения на 10 дает 230. 2, умноженное на 11 , равно 22,
          которое в сумме с 230 равняется 252.
        </DescrBody>
        <DescrBody>
          Полностью решенный пример выглядит следующим образом:
        </DescrBody>

        <ExampleTableMult
          hintPlusLeft='2'
          hintPlusRight='11'
          refNumber='10'
          numberLeft='12'
          numberRight='21'
          valueIntermediate='230'
          hintMinusLeft=''
          hintMinusRight=''
          valueToAdd='+22'
          valueToMinus=''
          valueResult='252'
          displayRowPlusHits={true}
          displayRowMinusHints={false}
          displayRowResults={true}
        />
      </DescAccordion>
    </Grid>
  );
}

export default Description;
