import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';

import ExampleTableMultTwoRefNumbers from '../../tables/ExampleTableMultTwoRefNumbers';

function Description() {
  return (
    <Grid
      item
      sx={{
        width: '100%',
      }}
    >
      <DescAccordion title='Введение'>
        <DescrBody>
          Наш метод умножения прекрасно работал для чисел, которые не очень
          сильно разнятся между собой по величине. В противном случае метод
          также работает, но вычисления будут более громоздкими. Например, что,
          если бы мы захотели вычислить, сколько будет 13 х 64? Какое опорное
          число нам выбрать? В настоящей главе мы рассмотрим простой метод,
          позволяющий следовать прежней стратегии, но с использованием двух
          опорных чисел.
        </DescrBody>
        <DescrBody>
          Можно перемножить два числа, которые сильно разнятся между собой по
          величине, с помощью двух опорных чисел. Давайте сначала рассмотрим
          суть вопроса, а затем я покажу, как работает метод. Возьмем
          произведение 8 х 27 в качестве примера. 8 ближе к 10, поэтому
          используем 10 в качестве первого опорного числа. 27 ближе к 30,
          поэтому 30 будет нашим Вторым опорным числом. Из данных чисел выберем
          то, на которое легче всего умножать. Поскольку очень легко умножать на
          10, выберем его. Оно будет Нашим основным опорным числом. Второе
          опорное число должно быть кратным основному. Число, которое мы
          выбрали, является кратным основному, превышая его в три раза (30 : 10
          = З). Вместо того чтобы рисовать кружок, я записываю два опорных числа
          в скобках слева от условия примера.
        </DescrBody>
        <DescrBody>
          Основным опорным числом является 10. Второе опорное число — это 30,
          или З х 10. Мы записываем опорные числа в скобках в виде второго
          числа, выраженного через первое, то есть:
        </DescrBody>
        <DescAccent>(10х3) 8 х 27 =</DescAccent>
        <DescrBody>
          Оба множителя в примере меньше своих опорных чисел, поэтому рисуем
          кружки под множителями. Под цифрой 8, опорным числом которой является
          10, нарисуем еще один кружок.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x3'
          row_main_numberLeft='8'
          row_main_numberRight='27'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft=''
          row_4_hintMinusRight=''
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>
          На сколько 8 и 27 меньше своих опорных чисел (не забывайте, что З
          представляет 30)? На 2 и З. Вписываем 2 и З в кружки.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x3'
          row_main_numberLeft='8'
          row_main_numberRight='27'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='2'
          row_4_hintMinusRight='3'
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>
          Теперь умножим 2, расположенное под множителем 8, на множитель З в
          скобках.
        </DescrBody>
        <DescAccent>2 х 3 = 6</DescAccent>
        <DescrBody>
          Впишем 6 в самый нижний кружок, под 2. Теперь вычтем число в самом
          нижнем кружке накрест из 27:
        </DescrBody>
        <DescAccent>27 - 6 = 21</DescAccent>
        <DescrBody>Умножим 21 на основное опорное число 10:</DescrBody>
        <DescAccent>21 х 10 = 210</DescAccent>
        <DescrBody>
          210 является нашим промежуточным ответом. чтобы получить остальную его
          часть, перемножим числа в верхних кружках (2 и З), что даст нам 6.
          Прибавим 6 к 210 и получим окончательный ответ: 216.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x3'
          row_main_numberLeft='8'
          row_main_numberRight='27'
          row_main_valueIntermediate='210'
          row_4_hintMinusLeft='2'
          row_4_hintMinusRight='3'
          row_4_valueToMinus='+6'
          row_5_hintMinusLeft='6'
          row_result_valueResult='216'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />

        <DescrBody>Решим другой пример:</DescrBody>
        <DescAccent>9 х 48 =</DescAccent>
        <DescrBody>
          Какие опорные числа нам следует выбрать? 10 и 50. Запишем пример
          по-новому:
        </DescrBody>
        <DescAccent>(10х5) 9 х 48 =</DescAccent>
        <DescrBody>
          Оба множителя меньше своих опорных чисел, поэтому располагаем кружки
          внизу. На сколько они меньше своих опорных чисел? На 1 и 2. Вписываем
          1 и 2 в кружки:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x5'
          row_main_numberLeft='9'
          row_main_numberRight='48'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='1'
          row_4_hintMinusRight='2'
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>
          Теперь умножим 1 под 9 на множитель 5, который в скобках
        </DescrBody>
        <DescAccent>1 х 5 = 5</DescAccent>
        <DescrBody>
          Записываем 5 в самый нижний кружок, под 1. Решение нашего примера
          теперь выглядит следующим образом:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x5'
          row_main_numberLeft='9'
          row_main_numberRight='48'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='1'
          row_4_hintMinusRight='2'
          row_4_valueToMinus=''
          row_5_hintMinusLeft='5'
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>Вычтем 5 из 48</DescrBody>
        <DescAccent>48 — 5 = 43</DescAccent>
        <DescrBody>
          Запишем 43 после знака равенства. Умножим 43 на опорное число 10 (для
          этого просто припишем О справа к 43), что и даст ответ.
        </DescrBody>
        <DescAccent>43 х 10 = 430</DescAccent>
        <DescrBody>
          В качестве последнего шага перемножим числа в двух верхних кружках:
        </DescrBody>
        <DescAccent>1 х 2 = 2</DescAccent>
        <DescrBody>Прибавим 2 к промежуточному ответу 430:</DescrBody>
        <DescAccent>430 + 2 = 432</DescAccent>
        <DescrBody>Полностью решенный пример теперь выглядит так:</DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x5'
          row_main_numberLeft='9'
          row_main_numberRight='48'
          row_main_valueIntermediate='430'
          row_4_hintMinusLeft='1'
          row_4_hintMinusRight='2'
          row_4_valueToMinus='+2'
          row_5_hintMinusLeft='5'
          row_result_valueResult='432'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />

        <DescrBody>
          Просто, не так ли? Единственная трудность, с которой вы можете
          столкнуться, состоит в том, чтобы вспомнить, каким должен быть
          следующий шаг.
        </DescrBody>
        <DescrBody>
          Если множители больше опорных чисел, тогда мы поступаем следующим
          образом. Возьмем в качестве примера произведение 13 х 42:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft='12'
          row_2_hintPlusLeft='3'
          row_2_hintPlusRight='2'
          row_2_valueToAdd=''
          row_main_refNumber='10x4'
          row_main_numberLeft='13'
          row_main_numberRight='42'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft=''
          row_4_hintMinusRight=''
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={true}
          displayRow_2={true}
          displayRow_4={false}
          displayRow_5={false}
          displayRow_results={false}
        />

        <DescrBody>
          Основным опорным числом является 10. Вторым мы взяли 40, или 10 х 4.
          Стараемся подобрать опорные числа так, чтобы они были либо меньше,
          либо больше перемножаемых чисел. Оба множителя в рассматриваемом
          примере больше соответствующих опорных чисел, поэтому мы нарисовали
          кружки сверху. Множителю 13 соответствует основное опорное число 10,
          поэтому мы рисуем над этим множителем два кружка. На сколько больше
          своих опорных чисел 13 и 42? На З и 2. Вписываем З и 2 в нижние
          кружки. Умножаем З в кружке над множителем 13 на 4 в скобках
        </DescrBody>
        <DescAccent>3 х 4 = 12</DescAccent>
        <DescrBody>
          Записываем 12 в верхний кружок над 13. Теперь складываем накрест.
        </DescrBody>
        <DescAccent>42 + 12 = 54</DescAccent>
        <DescrBody>
          Произведение 54 на опорное число 10 дает 540. Это наш промежуточный
          ответ. Теперь перемножим числа в нижних кружках
        </DescrBody>
        <DescAccent>3 х 2 = 6</DescAccent>
        <DescrBody>
          Прибавим 6 к 540, чтобы получить окончательный ответ: 546. Так
          выглядит полностью решенный пример:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft='12'
          row_2_hintPlusLeft='3'
          row_2_hintPlusRight='2'
          row_2_valueToAdd='+6'
          row_main_refNumber='10x4'
          row_main_numberLeft='13'
          row_main_numberRight='42'
          row_main_valueIntermediate='540'
          row_4_hintMinusLeft=''
          row_4_hintMinusRight=''
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult='546'
          displayRow_1={true}
          displayRow_2={true}
          displayRow_4={false}
          displayRow_5={false}
          displayRow_results={true}
        />

        <DescrBody>
          Основным опорным числом необязательно должно быть 10. Чтобы найти
          произведение 23 х 87, разумнее использовать 20 в качестве основного
          опорного числа, а 80 (20 х 4) — в качестве второго опорного. Давайте
          закрепим усвоенное на примере:
        </DescrBody>
        <DescAccent>(20х4) 23 х 87 =</DescAccent>
        <DescrBody>
          Оба множителя в примере больше, чем их опорные числа (20 и 80),
          поэтому рисуем кружки вверху. На сколько больше? На З и 7. Вписываем З
          и 7 в соответствующие кружки.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft='3'
          row_2_hintPlusRight='7'
          row_2_valueToAdd=''
          row_main_refNumber='20x4'
          row_main_numberLeft='23'
          row_main_numberRight='87'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft=''
          row_4_hintMinusRight=''
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={true}
          displayRow_2={true}
          displayRow_4={false}
          displayRow_5={false}
          displayRow_results={false}
        />

        <DescrBody>
          Умножаем З, которое над множителем 23, на 4 в скобках.
        </DescrBody>
        <DescAccent>3 х 4 = 12</DescAccent>
        <DescrBody>
          Вписываем 12 в верхний кружок, над З. Проделанная вами работа теперь
          выглядит так:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft='12'
          row_2_hintPlusLeft='3'
          row_2_hintPlusRight='7'
          row_2_valueToAdd=''
          row_main_refNumber='20x4'
          row_main_numberLeft='23'
          row_main_numberRight='87'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft=''
          row_4_hintMinusRight=''
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={true}
          displayRow_2={true}
          displayRow_4={false}
          displayRow_5={false}
          displayRow_results={false}
        />

        <DescrBody>Теперь сложим 12 и 87.</DescrBody>
        <DescAccent>87 + 12 = 99</DescAccent>
        <DescrBody>Умножаем 99 на основное опорное число</DescrBody>
        <DescAccent>99 х 20 = 1980</DescAccent>
        <DescrBody>
          (Умножаем 99 сначала на 2, а полученный результат — на 10. 99 — это
          100 минус 1. 2 умножить на 100 минус 1 дает 200 минус 2, а это равно
          198. Теперь умножим 198 на 10 и получим ответ для произведения 99 х
          20.) Теперь перемножим числа в нижних кружках.
        </DescrBody>
        <DescAccent>3 х 7 = 21</DescAccent>
        <DescAccent>1980 + 21 = 2001</DescAccent>
        <DescrBody>Окончательное решение примера выглядит так:</DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft='12'
          row_2_hintPlusLeft='3'
          row_2_hintPlusRight='7'
          row_2_valueToAdd='+21'
          row_main_refNumber='20x4'
          row_main_numberLeft='23'
          row_main_numberRight='87'
          row_main_valueIntermediate='1980'
          row_4_hintMinusLeft=''
          row_4_hintMinusRight=''
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult='2001'
          displayRow_1={true}
          displayRow_2={true}
          displayRow_4={false}
          displayRow_5={false}
          displayRow_results={true}
        />

        <DescrBody>Давайте решим пример:</DescrBody>
        <DescAccent>96 х 389 =</DescAccent>
        <DescrBody>
          Будем использовать 100 и 400 в качестве опорных чисел:
        </DescrBody>
        <DescAccent>(100 х 4) 96 х 389 =</DescAccent>
        <DescrBody>
          Умножаем 4 в кружке под множителем 96 на 4 в скобках:
        </DescrBody>
        <DescAccent>4 х 4 = 16</DescAccent>
        <DescrBody>
          Вписываем 16 в нижний кружок, под 4. Решение Пока выглядит следующим
          образом:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100x4'
          row_main_numberLeft='96'
          row_main_numberRight='389'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='11'
          row_4_valueToMinus=''
          row_5_hintMinusLeft='16'
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>
          Вычтем 16 из 389 и получим 373. Далее умножим 373 на основное опорное
          число 100, это даст нам 37300.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100x4'
          row_main_numberLeft='96'
          row_main_numberRight='389'
          row_main_valueIntermediate='37300'
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='11'
          row_4_valueToMinus=''
          row_5_hintMinusLeft='16'
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>
          Теперь перемножим 4 и 11 в кружках, в результате чего получим 44.
          Сумма 44 и 37300 дает 37344. Полностью решенный пример выглядит так:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100x4'
          row_main_numberLeft='96'
          row_main_numberRight='389'
          row_main_valueIntermediate='37300'
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='11'
          row_4_valueToMinus='+44'
          row_5_hintMinusLeft='16'
          row_result_valueResult='37344'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />

        <DescrBody>Теперь попробуем решить пример </DescrBody>
        <DescAccent>8 х 136 =</DescAccent>
        <DescrBody>
          Возьмем 10 и 140 (10 х 14) в качестве опорных чисел:
        </DescrBody>
        <DescAccent>(10 х 14) 8 х 136 =</DescAccent>
        <DescrBody>
          Умножим 2 под множителем 8 на число 14, которое в скобках:
        </DescrBody>
        <DescAccent>2 х 14 = 28</DescAccent>
        <DescrBody>
          Записываем 28 в нижний кружок, под 2. Теперь вычтем 28 из 136 (сначала
          отнимаем 30, а затем добавим 2) и получаем 108. Умножаем теперь 108 на
          основное опорное число 10, получая в ответе 1080. Проделанная до сих
          пор работа выглядит следующим образом:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x14'
          row_main_numberLeft='8'
          row_main_numberRight='136'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='2'
          row_4_hintMinusRight='4'
          row_4_valueToMinus=''
          row_5_hintMinusLeft='28'
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>Теперь перемножим числа 2 и 4 в кружках</DescrBody>
        <DescAccent>2 х 4 = 8</DescAccent>
        <DescrBody>
          Прибавим 8 к 1080 и получим окончательный ответ: 1088.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x14'
          row_main_numberLeft='8'
          row_main_numberRight='136'
          row_main_valueIntermediate='1080'
          row_4_hintMinusLeft='2'
          row_4_hintMinusRight='4'
          row_4_valueToMinus='+8'
          row_5_hintMinusLeft='28'
          row_result_valueResult='1088'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />
      </DescAccordion>
    </Grid>
  );
}

export default Description;
