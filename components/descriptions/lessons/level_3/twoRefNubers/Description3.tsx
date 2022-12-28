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
      <DescAccordion title='Почему работает данный метод?'>
        <DescrBody>
          Подробное объяснение я давать не буду, а попробую показать на примере.
          Рассмотрим произведение 8 х 17. Мы могли бы удвоить 8, чтобы получить
          16, затем умножить 16 на 17 и взять половину ответа, который и будет
          правильным для исходной задачи. Это довольно длинный путь, однако он
          показывает,почему метод с использованием двух опорных чисел работает.
          Будем использовать 20 в качестве опорного числа. 16 x 17 = 272. Но мы
          ведь умножали на 16 вместо 8, поэтому на самом деле удвоили ответ.
          272, деленное на 2, дает нам ответ для примера 8 х 17, а именно 136.
        </DescrBody>
        <DescAccent>8 x 17 = 136</DescAccent>
        <DescrBody>
          Итак, мы удвоили множитель в самом начале, а затем уменьшили ответ
          вдвое в самом конце. Эти две операции взаимно гасят друг друга. При
          этом можно избавиться от значительной части вычислений. Поcмотрим, как
          в данном случае работает метод двух опорных чисел:
        </DescrBody>

        <ExampleTableMultTwoRefNumbers
          row_1_hintPlusLeft=''
          row_2_hintPlusLeft=''
          row_2_hintPlusRight=''
          row_2_valueToAdd=''
          row_main_refNumber='10x2'
          row_main_numberLeft='8'
          row_main_numberRight='17'
          row_main_valueIntermediate='130'
          row_4_hintMinusLeft='2'
          row_4_hintMinusRight='3'
          row_4_valueToMinus='+6'
          row_5_hintMinusLeft='4'
          row_result_valueResult='136'
          displayRow_1={false}
          displayRow_2={false}
          displayRow_4={true}
          displayRow_5={true}
          displayRow_results={true}
        />

        <DescrBody>
          Обратите внимание, что мы вычитаем 4 из 17 во втором способе решения;
          то же самое мы сделали, когда решали по первому способу. В результате
          мы получили 13, которое затем умножили на 10. Решая первым способом,
          мы удвоили 13 перед тем, как умножать его на 10, а затем уменьшили в
          два раза ответ в конце. Решая вторым способом, мы перемножили числа в
          кружках (2 и З), что дало в ответе 6, то есть половину от 12,
          полученного при решении первым способом.
        </DescrBody>
        <DescrBody>
          Можно использовать любую комбинацию опорных чисел. Общие правила
          таковы:
        </DescrBody>
        <DescrBody>
          • Прежде всего на роль опорных чисел надо подбирать те, на которые
          легко умножать, то есть 10, 20, 50 и т. д.
        </DescrBody>
        <DescrBody>
          • Второе опорное число должно являться кратным основному, то есть
          превышать его вдвое, втрое, вчетверо и т. д.
        </DescrBody>
        <DescrBody>
          Поэкспериментируйте с предложенными способами решений самостоятельно.
          Всегда имеется возможность как-то упростить математические вычисления.
          И всякий раз, используя данеые методы, вы совершенствуете свои
          математические навыки.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
