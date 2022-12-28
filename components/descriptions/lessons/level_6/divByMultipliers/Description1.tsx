import classes from './styles.module.scss';
import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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
          Если вам надо разделить 368 долларов на 16 человек, то вы разделите
          368 на 16, чтобы узнать, сколько должен получить каждый.
        </DescrBody>
        <DescrBody>
          Если вы не знаете всех вариантов умножения на 16, есть простой способ
          решить эту задачу. 16 — это 2 на 8, а также 4 на 4. Простой способ
          деления на 16 состоит в том, чтобы использовать его множители. Можно
          разделить сначала на 4, а потом полученный результат разделить опять
          на 4. Это то же самое, что делить на 16, потому что 4 х 4 = 16.
        </DescrBody>
        <DescrBody>
          Можно было бы записать решение задачи следующим образом:
        </DescrBody>

        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>4</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>368</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>4</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>&nbsp;&nbsp;&nbsp;92</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>&nbsp;&nbsp;&nbsp;23 </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'> r 0 </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescrBody>
          Деление на такие числа, как 14 и 16, достаточно легко выполнять в уме.
          Не представляет труда разделить число пополам, .прежде чем делить на
          больший множитель. Если вам надо разделить 368 на 16 в уме, вы могли
          бы сказать про себя: «Половина от тридцати шести — восемнадцать,
          половина от восьми — четыре». Вы получили 184. Теперь вы делите уже
          меньшее число на 8 (которое осталось от 16 после того, как мы
          разделили на 2).
        </DescrBody>
        <DescrBody>
          18 при делении на 8 дает 2 с остатком 2. Этот остаток (из разряда
          десятков) переносим в разряд единиц (цифра 4), получая 24. 24 при
          делении на 8 дает З без остатка. Таким образом, ответ равен 23 без
          остатка. Все это легко вычисляется в уме.
        </DescrBody>

        <DescAccent>
          Общее правило деления по множителям состоит в том, чтобы сначала
          делить на меньшее число, а потом на большее.
        </DescAccent>
        <DescrBody>
          Идея в том, что в итоге вы делите меньшее число на больший множитель.
        </DescrBody>
        <DescrBody>
          Например, если вам надо разделить 3444 на 21, то вы сначала делите на
          З, а потом на 7. К моменту, когда надо будет делить на 7, исходное
          число успеет уменьшиться в несколько раз.
        </DescrBody>
        <DescAccent>3444 : 3 = 1148</DescAccent>
        <DescAccent>1148 : 7 = 164</DescAccent>
        <DescrBody>Делить 1148 на 7 легче, чем 3444 на 7.</DescrBody>
        <DescAccent>Деление на числа, оканчивающиеся на 5</DescAccent>
        <DescrBody>
          Чтобы разделить на двузначное число, которое оканчивается на 5,
          удвойте оба числа и используйте деление по множителям.Например:
        </DescrBody>
        <DescAccent>1085 : 35 =</DescAccent>
        <DescrBody>
          Удвоим оба числа. 2 на 1000 равно 2000, 2 на 85 равно 170.
        </DescrBody>
        <DescAccent>1085 х 2 = 2170</DescAccent>
        <DescAccent>35 х 2 = 70</DescAccent>
        <DescrBody>Теперь задача выглядит так:</DescrBody>
        <DescAccent>2170 : 70 =</DescAccent>
        <DescrBody>
          Чтобы разделить на 70, делим сначала на 10, а потом на 7 (по
          множителям).
        </DescrBody>
        <DescAccent>2170 : 10 = 217</DescAccent>
        <DescAccent>217 : 7 = 31</DescAccent>
        <DescrBody>
          Вычисление очень простое. 21 при делении на 7 дает З (З х 7 = 21), а 7
          делится на 7 один раз без остатка. Теперь мы можем записать ответ для
          нашего исходного примера:
        </DescrBody>
        <DescAccent>1085 : 35 = 31 ОТВЕТ</DescAccent>
        <DescrBody>Попробуем решить другой пример:</DescrBody>
        <DescAccent>512 : 35 =</DescAccent>
        <DescrBody>
          500 при умножении на 2 дает 1000. 12, умноженное на 2, равно 24. Таким
          образом, 512, умноженное на 2, дает 1024. 35, увеличенное вдвое, дает
          70.Теперь задача выглядит так:
        </DescrBody>
        <DescAccent>1024 : 70 =</DescAccent>
        <DescrBody>Разделим сначала на 10, а потом на 7:</DescrBody>
        <DescAccent>1024 : 10 = 102,4</DescAccent>
        <DescAccent>102,4 : 7 =</DescAccent>
        <DescrBody>
          10 при делении на 7 дает 1. 1 — это первая цифра ответа. Прибавляем
          остаток 3 (из разряда десятков) к цифре 2, что дает нам 32.
        </DescrBody>
        <DescAccent>32 : 7 = 4 r4</DescAccent>
        <DescrBody>
          Мы получили в ответе 14 с остатком 4. Приписываем 4 к следующей цифре
          (после запятой), что дает нам 44
        </DescrBody>
        <DescAccent>44 : 7 = 6 r2</DescAccent>
        <DescrBody>
          Окончательный ответ: 14,62. Это ответ к нашей исходной задаче:
        </DescrBody>
        <DescAccent>512 : 35 = 14,62</DescAccent>
        <DescrBody>
          Можно делить числа с помощью множителей до любого количества знаков
          после запятой.
        </DescrBody>
        <DescrBody>
          Припишите столько нулей после запятой, сколько требуется для ответа, и
          добавьте еще один. Это позволит гарантировать, что последняя цифра
          после запятой будет получена с требуемой точностью.
        </DescrBody>
        <DescrBody>
          К примеру, если надо разделить 736 на 21 и при этом ответ должен быть
          получен с точностью до двух знаков после запятой, к делимому надо
          приписать три нуля после запятой.
        </DescrBody>
        <DescrBody>Таким образом, вы делили бы 736,000 на 21. Итак:</DescrBody>

        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>3</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>736,000</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>7</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>245,333</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;&nbsp;35,047{' '}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{/* r 0  */}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescrBody>
          Далее объясняется, как округлять три знака после запятой до двух.
        </DescrBody>
        <DescAccent>Округление десятичных дробей</DescAccent>
        <DescrBody>
          Чтобы округлить дробь до двух знаков после запятой, рассмотрим третью
          цифру после запятой. Если она меньше 5, тогда вторую цифру оставляем
          как есть и просто удаляем третью. А если же она равна или больше 5,
          следует вторую цифру увеличить на 1, а третью удалить.
        </DescrBody>
        <DescrBody>
          Таким образом, ответом с точностью до двух знаков после запятой
          является 35,05.
        </DescrBody>
        <DescrBody>
          Ответом с точностью до семи знаков будет 35,0476190. Потом знаки
          повторяются, так что до 13 знаков после запятой ответ выглядит так:
          35,0476190476190
        </DescrBody>
        <DescrBody>
          Чтобы округлить до 12 десятичных знаков, рассмотрим тринадцатую цифру,
          которая равна нулю (меньше 5), поэтому 9 оставляем без изменения:
          35,047619047619
        </DescrBody>
        <DescrBody>
          Двенадцатая цифра равна 9 (больше 5), поэтому при округлении до
          одиннадцатого знака цифра 1 переходит в 2:
        </DescrBody>
        <DescAccent>35,04761904762</DescAccent>
        <DescrBody>
          При округлении до десятого знака замечаем, что одиннадцатая цифра
          равна 2 (меньше 5), поэтому оставляем 6 без изменения:
        </DescrBody>
        <DescAccent>35,0476190476</DescAccent>
        <DescAccent>Определение остатка</DescAccent>
        <DescrBody>
          Иногда при делении нам хотелось бы знать остаток, а не цифры после
          запятой. Как нам узнать остаток, когда мы делим по множителям? Правило
          звучит так:
        </DescrBody>
        <DescAccent>
          Умножьте первый делитель на второй остаток и прибавьте первый остаток.
        </DescAccent>
        <DescrBody>
          Для вышеприведенного примера мы поступили бы следующим образом:
        </DescrBody>
        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>3</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>736</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>7</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>245&nbsp;&nbsp;r1</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;&nbsp;35&nbsp;&nbsp;r0
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{/* r 0  */}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Начнем с того, что перемножим числа вверхнем левом и нижнем правом
          «углах» :
        </DescrBody>
        <DescAccent>3 x 0 = 0</DescAccent>
        <DescrBody>
          Теперь прибавим первый остаток (1). Искомый 1 остаток равен 1 или 1/21
        </DescrBody>
        <DescrBody>Еще один пример:</DescrBody>
        <DescAccent>2327 : 35 =</DescAccent>
        <DescrBody>Берем 7 и 5 в качестве множителей числа 35.</DescrBody>
        <TableContainer className={classes.desc_tablecontainer}>
          <Table className={classes.desc_table}>
            <TableBody className={classes.desc_table_body}>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>5</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>2327</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell className={classes.desc_cell_divider}>
                  <Typography variant='h6'>7</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_divident}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;465&nbsp;&nbsp;r2
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.desc_table_row}>
                <TableCell>
                  <Typography variant='h6'>{'   '}</Typography>
                </TableCell>
                <TableCell className={classes.desc_cell_result}>
                  <Typography variant='h6'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;66&nbsp;&nbsp;r3
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant='h6'>{/* r 0  */}</Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Чтобы найти окончательный остаток, перемножаем «угловые» числа (З х 5
          = 15). Теперь прибавим другой остаток (2):
        </DescrBody>
        <DescAccent>15 + 2 = 17</DescAccent>
        <DescrBody>Получаем в ответе 66 с остатком 17.</DescrBody>
        <DescrBody>
          Деление столбиком по множителям позволяет выполнять немало вычислений
          в уме, за которые иной человек не рискнул бы и взяться.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
