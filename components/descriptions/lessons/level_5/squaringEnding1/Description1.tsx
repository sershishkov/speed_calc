import Grid from '@mui/material/Grid';

import DescAccent from '../../../../ui/description/DescAccent';
import DescrBody from '../../../../ui/description/DescrBody';
import DescAccordion from '../../../../ui/description/DescAccordion';

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
          Данный способ применяется для возведения в квадрат любого числа,
          оканчивающегося на 1: Если вы попробуете перемножить два подобных
          числа традиционным способом, то поймете, почему данный метод
          работает.Например:
        </DescrBody>

        <DescAccent>
          31<sup>2</sup>=
        </DescAccent>
        <DescrBody>
          Во-первых, вычтем 1 из числа, возводимого в квадрат. Число теперь
          оканчивается на нуль, и его легко возвести в квадрат.
        </DescrBody>
        <DescAccent>
          30<sup>2</sup> = 900 (3 х 3 х 10 х 10)
        </DescAccent>
        <DescrBody>Это наш промежуточный результат.</DescrBody>
        <DescrBody>
          Во-вторых, сложим 30 и 31 (число, которое мы возвели в квадрат, и
          число, которое собираемся возвести в квадрат):
        </DescrBody>
        <DescAccent>30 + 31 = 61</DescAccent>
        <DescrBody>Прибавим полученный результат к 900 и получим 961</DescrBody>
        <DescAccent>900 + 61 = 961 ОТВЕТ</DescAccent>
        <DescrBody>
          На втором этапе решения вы могли бы просто удвоить число, которое
          ранее возвели в квадрат (30 х 2 = 60), а затем прибавить 1. Разберем
          другой пример:
        </DescrBody>
        <DescAccent>
          121<sup>2</sup> =
        </DescAccent>
        <DescAccent>121 - 1 = 120</DescAccent>
        <DescAccent>
          120<sup>2</sup> = 14400 (12 х 12 х 10 х 10)
        </DescAccent>
        <DescAccent>120 + 121 = 241</DescAccent>
        <DescAccent>14400 + 241 = 14641 ОТВЕТ</DescAccent>
        <DescrBody>Попробуем еще:</DescrBody>
        <DescAccent>
          351<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          350<sup>2</sup> = 122500 (используем способ для возведения в квадрат
          чисел, оканчивающихся на 5)
        </DescrBody>
        <DescAccent>350 + 351 = 701</DescAccent>
        <DescAccent>122500 + 701 = 123201 ОТВЕТ</DescAccent>
        <DescrBody>Еще один пример:</DescrBody>
        <DescAccent>
          86<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          Можно использовать способ для возведения в квадрат чисел,
          оканчивающихся на 1, а также для чисел, оканчивающихся на 6. Например,
          вычислим 86<sup>2</sup> . Будем рассматривать 86 как число, которое на
          1 больше 85
        </DescrBody>
        <DescAccent>
          85<sup>2</sup> = 7225
        </DescAccent>
        <DescAccent>85 + 86 = 171</DescAccent>
        <DescAccent>7225 + 171 = 7396 ОТВЕТ</DescAccent>
        <DescrBody>
          Чтобы решить эти примеры в уме, я называю первый промежуточный
          результат в виде сотен — тогда вторую часть ответа легче прибавлять.
          Например, для возведения в квадрат 71 в уме я проговариваю про себя:
          «Семьдесят в квадрате равно сорок девять сотен; семьдесят на два — сто
          сорок, пятьдесят сотен и сорок плюс один, пять тысяч сорок один
          (5041)».
        </DescrBody>
        <DescrBody>
          На самом деле я говорю еще короче: «Сорок пять сотен; пять тысяч
          сорок... один».
        </DescrBody>
        <DescrBody>
          Чтобы найти квадрат 66 в уме, я говорю про себя: «Шестьдесят пять в
          квадрате — сорок два и двадцать пять», использовав способ для
          возведения в квадрат чисел, оканчивающихся на 5. «Шестьдесят пять на
          два равно сто тридцать, сорок три пятьдесят пять плюс один, сорок три
          пятьдесят шесть (4356)».
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
