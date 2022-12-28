import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
          Большинство из нас считает сложение более легкой операцией, чем
          вычитание. В настоящей главе мы узнаем, как сделать сложение еще
          проще.
        </DescrBody>
        <DescrBody>Как бы вы складывали 43 и 9 в уме?</DescrBody>
        <DescrBody>
          Легче всего было бы прибавить сначала 10, получив 53, и затем отнять
          1. Ответом является 52.
        </DescrBody>
        <DescrBody>
          Легко прибавлять 10 к любому числу: 36 плюс 10 равно 46; 34 плюс 10
          равно 44 и т. д. Просто увеличивайте число десятков на 1 всякий раз,
          когда к числу прибавляется 10
        </DescrBody>
        <DescrBody>
          Основное правило для выполнения сложения в уме звучит так:
        </DescrBody>
        <DescrBody>
          Чтобы прибавить к числу 9, прибавьте к нему 10 и отнимите 1; чтобы
          прибавить 8, прибавьте 10 и отнимите 2; чтобы прибавить 7, прибавьте
          10 и отнимите З и т. д.
        </DescrBody>
        <DescrBody>
          Если к числу надо прибавить 47, прибавьте к нему 50 и отнимите З.
          Чтобы прибавить 196, прибавьте 200 и отнимите 4. Это позволяет
          удерживать числа в уме. Чтобы прибавить 38 к числу, прибавьте 40 и
          отнимите 2. Чтобы прибавить 288 к числу, прибавьте 300, а затем
          отнимите от результата 12.
        </DescrBody>
        <DescrBody>
          Попробуйте выполнить сложение в уме. Произнесите вслух ответ. Для 34 +
          9 не говорите: «Сорок четыре, сорок три». Сделайте поправку на
          единицу, уже произнося ответ, чтобы у вас просто получилось: «Сорок
          три»
        </DescrBody>
        <DescAccent>Сложение в уме двузначных чисел</DescAccent>
        <DescrBody>
          А как бы вы прибавляли 38 к числу? Чтобы прибавить 38, надо сначала к
          числу прибавить 40, а затем вычесть 2 из полученной суммы.
        </DescrBody>
        <DescrBody>А как насчет 57? Прибавляем 60 и вычитаем З.</DescrBody>
        <DescrBody>Как прибавить 86? Прибавляем 100 и вычитаем 14.</DescrBody>
        <DescrBody>
          Если цифра единиц в прибавляемом числе больше 5, то число необходимо
          округлить в сторону увеличения, а затем вычесть ошибку округления из
          полученной суммы. Если же цифра единиц меньше, то прибавляем сначала
          десятки, а потом единицы.
        </DescrBody>
        <DescrBody>
          Находя сумму двузначных чисел в уме, сначала складывайте цифры,
          обозначающие десятки в обоих числах, и только потом единицы. Если же
          цифра единиц у прибавляемого числа больше или равна 5, округляем его в
          сторону увеличения вычисляем сумму, а затем вычитаем из результата
          разницу между округленным значением и исходным числом. Например,
          прибавляя 47, прибавляйте 50, а затем вычитайте З из результата.
        </DescrBody>
        <DescrBody>
          Чтобы сложить 35, 67 и 43, начинаем с 35, к которому прибавляем 70,
          что дает нам 105 , вычитаем З (получается 102), прибавляем 40 (в сумме
          142), а затем еще 3 (число единиц), получая окончательный ответ 145.
        </DescrBody>
        <DescrBody>
          Немного попрактиковавшись, вы сможете убедиться, что в состоянии
          удерживать складываемые числа в уме.
        </DescrBody>
        <DescrBody>
          В примере 44 + 37 вы могли заметить, что 37 на З меньше, чем 40,
          поэтому можно прибавить 40, а затем вычесть З. Или же можно было
          сначала вычесть З из 44, получив 41, перед тем как прибавлять 40, что
          даст в ответе те же 81. Решая подобные задач и в уме, со временем вы
          обнаружите, что они совсем нетрудные, и начнете находить способы для
          еще большего упрощения счета.
        </DescrBody>
        <DescAccent>Сложение трехзначных чисел</DescAccent>
        <DescrBody>
          Складывая 355, 752 и 694, можно было бы по ходу решения проговаривать
          про себя следующим образом: «Триста пятьдесят пять плюс семьсот
          (тысяча пятьдесят пять), плюс пятьдесят (тысяча сто пять), плюс два
          (тысяча сто семь), плюс семьсот без шести, тысяча восемьсот один». Вы
          могли бы также предпочесть складывать слева направо, то есть сначала
          сотни, потом десятки, а затем единицы.
        </DescrBody>
        <DescAccent>Рассмотрим пример 359 + 523</DescAccent>
        <DescrBody>
          можно округлить 359 до 360. 523 плюс З0О дает 823, плюс 60 — 883,
          минус 1 — 882. Или же в таком порядке: 360 плюс 500 равно 860, плюс 23
          — 883, минус 1 — 882. Решение обоих вариантов не составляет труда.
        </DescrBody>
        <DescAccent>Рассмотрим пример 456 + 298</DescAccent>
        <DescrBody>
          Можно округлить 298 до 300, 456+300 = 756, 756 - 2 = 754
        </DescrBody>
        <DescrBody>
          Сложение чисел в уме занимает меньше времени, чем поиск бумаги и ручки
          или использование калькулятора, который сначала нужно достать из
          сумки, кармана или ящика стола.
        </DescrBody>
        <DescAccent>Сложение денежных величин</DescAccent>
        <DescrBody>
          Чтобы сложить 4,95, 6,95 и 13,95 доллара, вам достаточно сложить 5 + 7
          + 14 долларов и вычесть 15 центов из полученной суммы. Сначала
          складывайте десятки, затем единицы, получая последовательно 12, 22 и
          26
        </DescrBody>
        <DescAccent>5 + 7 = 12</DescAccent>
        <DescAccent>12 + 14 = 26</DescAccent>
        <DescrBody>
          Промежуточный ответ равен 26,00 доллара. Те перь вычтем 15 центов и
          получим окончательный ответ: 25,85 доллара. Если бы нам нужно было
          сложить
        </DescrBody>

        <Grid container justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  495
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  {' '}
                  695
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  +1395
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <DescrBody>
          ответ, возможно, не показался бы нам очевидным. Вместе с тем это одна
          и та же задача. Мы могли бы всегда использовать такой подход для
          сложения денежных величин (хотя не многие так делают), но просто нам
          бывает трудно воспринять это как абсолютно ту же задачу, только без
          десятичной запятой.
        </DescrBody>
        <DescrBody>
          Если одно и то же число повторяется несколько раз каком-нибудь
          вычислении, умножьте его на число раз, которое оно повторяется.
          Предположим, нам требуется сложить следующие числа:
        </DescrBody>

        <Grid container justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  119,95
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  59,95
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  119,95
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  119,95
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  14,95
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  +119,95
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <DescrBody>
          Это могут быть, например, цены на товары, предлагаемые в местном
          магазине. Как бы вы стали находить их сумму?
        </DescrBody>
        <DescrBody>
          Во-первых, следует округлить каждую цену (число) из списка. 119,95
          доллара следует округлять до 120 долларов, 59,95 — до 60, а 14,95 — до
          15. Получив ответ, надо внести поправку на 5 столько раз, сколько мы
          производили округлений.
        </DescrBody>
        <DescrBody>
          Во-вторых, поскольку цена 119,95 доллара встречается четыре раза, ее
          можно умножить на 4, а затем уже прибавлять к ответу другие величины.
          120 долларов, умноженные на 4, дают 480 долларов. Теперь сложим 60 и
          15 долларов. 480 плюс 60 дает 540, а 540 плюс 15 равно 555.
        </DescrBody>
        <DescrBody>
          Теперь внесем поправку на 5 центов, которые мы добавляли, чтобы
          округлить каждую цену. Мы прибавляли 5 центов в шести случаях.
          Умножаем 5 центов на 6 и получаем 30 центов в качестве общей суммы
          центов, которые мы добавили в процессе вычисления. Вычтем эту
          величину, чтобы получить окончательный ответ.
        </DescrBody>
        <DescrBody>
          555 долларов минус 30 центов равно 554, 70 доллара (у вас забрали 1
          доллар и вернули 70 центов).
        </DescrBody>
        <DescAccent>Сложение больших чисел</DescAccent>
        <DescrBody>Вот пример сложения в уме больших чисел:</DescrBody>

        <Grid container justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  8461
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%', borderBottom: '1px solid #000' }}>
                <Typography variant='h5' align='right'>
                  +5678
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <DescrBody>
          Начинаем с колонки, соответствующей разряду тысяч.
        </DescrBody>
        <DescrBody>
          8 плюс 5 равно 13. Поскольку мы работаем в разряде тысяч, ответом
          служат 13 тысяч. Мы замечаем, что цифры в разряде сотен дают в сумме
          10, то есть еще одну тысячу. Итак, пока итогом наших вычислений
          являются 14 тысяч
        </DescrBody>
        <DescrBody>Прибавим 61 от верхнего слагаемого. 14061.</DescrBody>
        <DescrBody>Теперь прибавим 78.</DescrBody>
        <DescrBody>
          На вашем месте я прибавил бы 80 и вычел 2. Для этого я прибавляю 100 и
          вычитаю 20. Итак, необходимо прибавить 100, вычесть 20 и затем еще 2.
        </DescrBody>
        <DescrBody>
          14061 плюс 100 равно 14161, минус 20 — 14141, минус еще 2 — получаем
          14139.
        </DescrBody>
        <DescrBody>
          Другой метод заключается в том, чтобы к первому слагаемому прибавлять
          второе слагаемое по частям: сначала тысячи, потом сотни, затем десятки
          и наконец единицы.
        </DescrBody>
        <DescrBody>
          Можно было бы решать в уме так: «Восемь тысяч четыреста шестьдесят
          один плюс пять тысяч, тринадцать тысяч четыреста шестьдесят один, плюс
          шестьсот равно четырнадцать тысяч шестьдесят один, плюс семьдесят
          восемь». Затем прибавляйте 78 так, как было описано выше.
        </DescrBody>
        <DescrBody>
          Пробуйте решать примеры самостоятельно выполняя сложение в направлении
          слева направо.
        </DescrBody>
        <DescrBody>Предположим, нам нужно сложить следующие числа:</DescrBody>

        <Grid container justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  6
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography variant='h5' align='right'>
                  8
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%', borderBottom: '1px solid #000' }}>
                <Typography variant='h5' align='right'>
                  +4
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <DescrBody>Простой метод сложения этих чисел таков:</DescrBody>
        <DescAccent>6 + 4 = 10, 10 + 8 = 18</DescAccent>
        <DescrBody>
          Большинство из вас сочтет это более легким решением, чем 6 + 8 + 4 =
          18 (6 плюс 8 равно 14, плюс еще 4 — будет 18).
        </DescrBody>
        <DescrBody>Поэтому простое правило звучит так:</DescrBody>
        <DescAccent>
          Складывая колонку чисел, сначала складывайте пары чисел, которые дают
          в сумме десять или число, кратное десяти, а уже потом прйбавляйте
          другие числа.
        </DescAccent>
        <DescrBody>
          Итак, всегда стремитесь сначала прибавить такое слагаемое, чтобы
          получить число, кратное десяти. То есть если вы достигли, скажем, в
          сумме 27 в процессе вычисления и следующими слагаемыми являются 8 и З,
          прибавляйте сначала З, а не 8, что даст вам 30 а потом уже прибавляйте
          8, что даст вам 38. Как следует освоив изложенные здесь методы
          умножения,вы научитесь мгновенно распознавать числа, даюплие в сумме
          10 или число, кратное ему, так что вычисления станут почти
          автоматическими.
        </DescrBody>
        <DescAccent>
          Проверка результата сложения путем выбрасывания девяток
        </DescAccent>

        <DescrBody>
          Точно так же как мы выбрасываем девятки, чтобы проверить полученный
          ответ при умножении, можно применять тот же подход для проверки
          результата сложения или вычитания. Рассмотрим пример:
        </DescrBody>

        <Grid container justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  12345
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  67890
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  42735
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%', borderBottom: '1px solid #000' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  +21865
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <DescrBody>
          После выполненных вычислений мы получили в ответе 144835.
        </DescrBody>
        <DescrBody>Верный ли это ответ?</DescrBody>
        <DescrBody>
          Давайте это проверим путем выбрасывания девяток, или методом
          чисел-подстановок:
        </DescrBody>

        <Grid container justifyContent='center' alignItems='center'>
          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  12345
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  67890
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  42735
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%', borderBottom: '1px solid #000' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  +21865
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  144835
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'transparent' }}
                >
                  1
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  21
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'transparent' }}
                >
                  1
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%', borderBottom: '1px solid #000' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3 }}
                >
                  13
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'transparent' }}
                >
                  1
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={{ width: '100px' }}>
            <Grid
              container
              justifyContent='center'
              alignItems='center'
              direction='column'
            >
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'red' }}
                >
                  6
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'red' }}
                >
                  3
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'red' }}
                >
                  3
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%', borderBottom: '1px solid #000' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'red' }}
                >
                  4
                </Typography>
              </Grid>
              <Grid item sx={{ width: '100%' }}>
                <Typography
                  variant='h5'
                  align='right'
                  sx={{ letterSpacing: 3, color: 'red' }}
                >
                  7
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <DescrBody>
          Подстановками в данном случае являются числа 6 3, З и 4. 6 и З дают в
          сумме 9, их можно выбросить. Остаются З и 4. З + 4 = 7. 7 — это наше
          контрольное число или проверочный ответ.
        </DescrBody>
        <DescrBody>
          Правильный ответ должен давать 7 по сумме цифр после выбрасывания
          девяток. Давайте проверим:
        </DescrBody>
        <DescAccent>1 + 4 + 4 + 8 + 3 + 5 = 7</DescAccent>
        <DescrBody>Ответ верен.</DescrBody>
        <DescrBody>
          Если бы приведенные выше числа являлись суммами денег с десятичной
          запятой, решение осталось бы неизменным. Можно использовать данный
          метод для проверки практически любых вычислений, что касается
          сложения, вычитания, умножения и деления.
        </DescrBody>
        <DescrBody>
          Попробуйте самостоятельно. Проверьте, все ли полученные ответы в
          примерах, приведенных ниже, верны? Сделайте это путем выбрасывания
          девяток. Если обнаружили ошибку, исправьте ее и снова проверьте
          полученный ответ выбрасыванием девяток.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
