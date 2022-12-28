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
        <DescAccent>Числа, оканчивающиеся на 9</DescAccent>
        <DescrBody>Пример:</DescrBody>
        <DescAccent>
          29<sup>2</sup>=
        </DescAccent>
        <DescrBody>
          Во-первых, прибавим 1 к числу, возводимому в квадрат. Теперь оно
          оканчивается на О, и его квадрат легко найти.
        </DescrBody>
        <DescAccent>
          30<sup>2</sup> = 900 (3 х 3 х 10 х 10)
        </DescAccent>
        <DescrBody>
          Это наш промежуточный результат. Теперь сложим 30 и 29 (число, которое
          мы возвели в квадрат, и число, которое собираемся возвести в квадрат):
        </DescrBody>
        <DescAccent>30 + 29 = 59</DescAccent>
        <DescrBody>
          Вычтем 59 из 900 и получим в ответе 841. (Я удваиваю 30, получая 60, а
          затем вычитаю 60 из 900 и потом прибавляю 1.)
        </DescrBody>
        <DescAccent>900 - 59 = 841 ОТВЕТ</DescAccent>
        <DescrBody>Возьмем другой пример:</DescrBody>
        <DescAccent>
          119<sup>2</sup> =
        </DescAccent>
        <DescAccent>119 + 1 = 120</DescAccent>
        <DescAccent>
          120<sup>2</sup> = 14400 (12 х 12 х 10 х 10)
        </DescAccent>
        <DescAccent>120 + 119 = 239</DescAccent>
        <DescAccent>14400 - 239 = 14161</DescAccent>
        <DescAccent>14400 — 240 + 1 = 14161 ОТВЕТ</DescAccent>
        <DescrBody>Возьмем другой пример:</DescrBody>
        <DescAccent>
          349<sup>2</sup> =
        </DescAccent>
        <DescAccent>
          350<sup>2</sup> = 122500 (используем способ для возведения в квадрат
          чисел, оканчивающихся на 5)
        </DescAccent>
        <DescAccent>350 + 349 = 699</DescAccent>
        <DescrBody>
          (Вычтем 1000, а потом прибавим 301, чтобы вычислить ответ.)
        </DescrBody>
        <DescAccent>122500 - 699 = 121801 ОТВЕТ</DescAccent>
        <DescrBody>А как нам вычислить 84 в квадрате?</DescrBody>
        <DescrBody>
          Можно использовать способ для возведения в квадрат чисел,
          оканчивающихся на 9 или 4. Будем Рассматривать 84 как число, которое
          на 1 меньше 85.
        </DescrBody>
        <DescAccent>
          84<sup>2</sup> =
        </DescAccent>
        <DescAccent>
          85<sup>2</sup> = 7225
        </DescAccent>
        <DescAccent>85 + 84 = 169</DescAccent>
        <DescrBody>Теперь вычтем 169 из 7225:</DescrBody>
        <DescAccent>7225 - 169 = 7056 ОТВЕТ</DescAccent>
        <DescrBody>
          (Вычитаем 200, а затем прибавляем 31, чтобы получить ответ.)
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
