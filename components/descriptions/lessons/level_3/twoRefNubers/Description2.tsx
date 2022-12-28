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
      <DescAccordion title='Опорные числа, выраженные как одно число, деленное на другое'>
        <DescrBody>
          Чтобы умножить 96 на 47, мы могли бы использовать в качестве опорных
          числа 50 или 100: 50 х 2 или 100 : 2. В данном случае 100 : 2 было бы
          лучше, поскольку 100 тогда станет основным опорным числом. На 100
          умножать легче, чем на 50. Обратите внимание, что, записывая пример
          для решения, лучше указывать первым тот множитель, который относится к
          основному опорному числу.Итак, приступим к решению:
        </DescrBody>
        <DescAccent>96 х 47 =</DescAccent>
        <DescrBody>Возьмем 100 и 50 в качестве опорных чисел:</DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100:2'
          row_main_numberLeft='96'
          row_main_numberRight='47'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='3'
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={false}
          displayRow_results={false}
        />

        <DescrBody>
          Разделим число 4, находящееся в кружке под множителем 96, на делитель
          2 в скобках:
        </DescrBody>

        <DescAccent>4 : 2 = 2</DescAccent>
        <DescrBody>
          Полученный ответ 2 запишем в еще один кружок под 96.
        </DescrBody>
        <DescrBody>
          Полученный ответ 2 запишем в еще один кружок под 96.
        </DescrBody>
        <DescrBody>
          Теперь вычтем 2 из 47 и умножим ответ (45) на основное опорное число
          (100). В результате получаем 4500:
        </DescrBody>
        <DescrBody>
          Далее умножим первые две цифры в кружках (—4 х х —3 = 12) и прибавим
          полученный результат к 4500. В итоге получаем 4512:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100:2'
          row_main_numberLeft='96'
          row_main_numberRight='47'
          row_main_valueIntermediate='4500'
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='3'
          row_4_valueToMinus='+12'
          row_5_hintMinusLeft='2'
          row_result_valueResult='4512'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />

        <DescrBody>
          Если бы вы перемножали 96 и 23, можно было бы использовать 100 в
          качестве основного опорного числа, а 25 (100 : 4) — в качестве второго
          опорного. Это выглядело бы так:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100:4'
          row_main_numberLeft='96'
          row_main_numberRight='23'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='2'
          row_4_valueToMinus=''
          row_5_hintMinusLeft=''
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={false}
          displayRow_results={false}
        />

        <DescrBody>
          96 на 4 меньше 100, а 23 на 2 меньше 25. Теперь разделим 4 под 96 на 4
          в скобках. 4, деленное на 4, дает 1. Впишем это число в еще один
          кружок под 96:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100:4'
          row_main_numberLeft='96'
          row_main_numberRight='23'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='2'
          row_4_valueToMinus=''
          row_5_hintMinusLeft='1'
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>
          Вычтем 1 из 23, получив в ответе 22. Умножим 22 на основное опорное
          число 100 и получим 2200.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100:4'
          row_main_numberLeft='96'
          row_main_numberRight='23'
          row_main_valueIntermediate='2200'
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='2'
          row_4_valueToMinus=''
          row_5_hintMinusLeft='1'
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescAccent>4 х 2 = 8</DescAccent>

        <DescrBody>
          Прибавим 8 к 2200 и получим окончательный ответ: 2208.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100:4'
          row_main_numberLeft='96'
          row_main_numberRight='23'
          row_main_valueIntermediate='2200'
          row_4_hintMinusLeft='4'
          row_4_hintMinusRight='2'
          row_4_valueToMinus='+8'
          row_5_hintMinusLeft='1'
          row_result_valueResult='2208'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />

        <DescrBody>
          А если бы нам надо было перемножить 97 и 23? Применима ли наша
          стратегия в данном случае? Давайте попробуем:
        </DescrBody>
        <DescAccent>(100 : 4) 97 х 23 =</DescAccent>
        <DescrBody>
          З, деленное на 4, — это —
          <span style={{ fontSize: '1.5rem' }}>&frac34;</span> ;. Вычтем{' '}
          <span style={{ fontSize: '1.5rem' }}>&frac34;</span> из 23 (надо
          отнять 1 и прибавить{' '}
          <span style={{ fontSize: '1.5rem' }}>&frac14;</span>)
        </DescrBody>
        <DescAccent>
          23 - <span style={{ fontSize: '1.5rem' }}>&frac34;</span> = 22
          <span style={{ fontSize: '1.5rem' }}>&frac14;</span>
        </DescAccent>
        <DescrBody>
          Одна четверть в виде десятичной дроби записывается как 0,25 от 100
          равна 25). Таким образом:
        </DescrBody>
        <DescAccent>22,25 x 100 = 2225</DescAccent>
        <DescrBody>Перемножим числа в кружках.</DescrBody>
        <DescAccent>3 х 2 = 6</DescAccent>
        <DescAccent>2225 + 6 = 2231</DescAccent>
        <DescrBody>Таким образом окончательный ответ:</DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='100:4'
          row_main_numberLeft='97'
          row_main_numberRight='23'
          row_main_valueIntermediate='2225'
          row_4_hintMinusLeft='3'
          row_4_hintMinusRight='2'
          row_4_valueToMinus='+6'
          row_5_hintMinusLeft={
            <span style={{ fontSize: '2rem' }}>&frac34;</span>
          }
          row_result_valueResult='2231'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />

        <DescrBody>
          Таким образом, наш метод работает одинаково хорошо и в таких случаях.
        </DescrBody>
        <DescrBody>
          А как насчет 88 х 343? Можно использовать в качестве опорных чисел 100
          и 350.
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber={
            <span style={{ fontSize: '1.2rem' }}>100x3.5</span>
          }
          row_main_numberLeft='88'
          row_main_numberRight='343'
          row_main_valueIntermediate=''
          row_4_hintMinusLeft='12'
          row_4_hintMinusRight='7'
          row_4_valueToMinus=''
          row_5_hintMinusLeft='42'
          row_result_valueResult=''
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={false}
        />

        <DescrBody>
          Чтобы найти произведение З,5 х 12, умножьте 12 на 3, а затем прибавьте
          к ответу половину от 12, то есть 6. У вас получится 42.
        </DescrBody>
        <DescAccent>343 - 42 = 301</DescAccent>
        <DescrBody>301 х 100 (основное опорное число) = 30100</DescrBody>
        <DescAccent>12 х 7 = 84</DescAccent>
        <DescAccent>30100 + 84 = 30184</DescAccent>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber={
            <span style={{ fontSize: '1.2rem' }}>100x3.5</span>
          }
          row_main_numberLeft='88'
          row_main_numberRight='343'
          row_main_valueIntermediate='30100'
          row_4_hintMinusLeft='12'
          row_4_hintMinusRight='7'
          row_4_valueToMinus='+84'
          row_5_hintMinusLeft='42'
          row_result_valueResult='30184'
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
