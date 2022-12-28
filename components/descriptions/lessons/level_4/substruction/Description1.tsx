import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import classes from './styles.module.scss';

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
          Большинство людей считают, что вычитать сложнее, чем складывать. Вовсе
          не обязательно. В настоящей главе мы познакомимся с подходами, которые
          сделают для вас вычитание пустяковым делом.
        </DescrBody>
        <DescrBody>
          Прежде всего рассмотрим, как вычитать числа в уме.
        </DescrBody>
        <DescrBody>
          Чтобы вычесть два числа в уме, попробуйте округлить вычитаемое, а
          затем подкорректируйте полученный ответ.
        </DescrBody>
        <DescrBody>
          Чтобы вычесть 9, отнимите 10, а затем прибавьте к ответу 1; чтобы
          вычесть 8, отнимите 10 и прибавьте 2; чтобы вычесть 7, отнимите 10 и
          прибавьте З. Например:
        </DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    56
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    1
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Чтобы вычесть 9 из 56 в уме, самый простой способ сделать это —
          сначала вычесть 10 (получив в ответе 46), а затем прибавить 1 (47).
        </DescrBody>
        <DescrBody>
          Вычитая 8 из 47, отнимите 10 (37) и прибавьте 2 (39).
        </DescrBody>
        <DescrBody>
          Чтобы вычесть 38 из 54, отнимаем сначала 40 (что даст нам 14), а затем
          прибавляем 2, получив окончательный ответ 16.
        </DescrBody>
        <DescrBody>На бумаге решение выглядело бы так:</DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    54
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    38
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>54 минус 40 и плюс 2 (в кружке) дает 16</DescrBody>
        <DescrBody>
          Чтобы вычесть число, близкое по величине к 100, отнимайте 100 и
          прибавляйте разницу. Например, вычитая 87 из какого-нибудь числа,
          отнимаем 100 и прибавляем 13, поскольку 100 — 87 = 13.
        </DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    436
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    87
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    13
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Отнимем 100, что даст нам 336. Прибавим 13 (для чего сначала
          прибавляем 10, а затем еще З), получив в ответе 349. Все очень просто.
        </DescrBody>
        <DescAccent>Вычитание числа меньше 100 из числа больше 100</DescAccent>
        <DescrBody>
          Если вычитаемое (число, которое вычитают) меньше 100, а уменьшаемое
          (число, из которого вычитают) больше 100, но меньше 200, есть простой
          способ вычислить разность в уме.Например:
        </DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    134
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    76
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    24
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          76 на 24 меньше 100. 134 на 34 больше 100. Прибавим 24 к 34 и получим
          легкий ответ: 58. Решим другой пример:
        </DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    152
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    88
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescAccent>12 + 52 = 64 ОТВЕТ</DescAccent>
        <DescrBody>
          Тот же принцип применим и к числам, которые больше или меньше 10. К
          примеру:
        </DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    13
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescAccent>З + 4 = 7 ОТВЕТ</DescAccent>
        <DescrBody>
          Тот же подход справедлив и для вычитания трехзначных чисел:
        </DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    461
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    275
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    25
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescAccent>461 - 300 = 161</DescAccent>
        <DescAccent>161 + 25 = 186</DescAccent>
        <DescrBody>
          Мы выполняем лишь одно несложное вычитание, все остальное в решении —
          это сложение. Попробуем еще:
        </DescrBody>
        <TableContainer component={Paper}>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    834
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    286
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_common}
                  >
                    =
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}></TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    14
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescAccent>834 - 300 = 534</DescAccent>
        <DescAccent>534 + 14 = 548</DescAccent>
        <DescrBody>
          Про себя можно проговорить решение так: «Четырнадцать, которых не
          хватает до трехсот, плюс пятьсот, которых не хватает до восьмисот,
          дает пятьсот четырнадцать, плюс тридцать четыре — это пятьсот сорок
          восемь».
        </DescrBody>
        <DescrBody>
          Чтобы прибавить 34, сначала приплюсовываем 30, а потом еще 4.
        </DescrBody>
        <DescrBody>
          В этом состоит простой метод вычитания в уме. Не надо переносить или
          забирать разряды, и не представляет труда удерживание в уме сразу
          нескольких чисел.
        </DescrBody>
        <DescAccent>Вычитание на бумаге</DescAccent>
        <DescrBody>
          Сейчас я расскажу о методе вычитания на бумаге, которому меня научили
          в третьем классе. Если вы достаточно освоили приемы умножения,
          описанные выше, данный метод не представит для вас труда.
        </DescrBody>
        <DescrBody>
          Легкий способ вычитания используется в каждом из двух методов с
          переносом разрядов. О них вы непременно узнаете.
        </DescrBody>
        <DescrBody>
          Разница между стандартным и легким способами вычитания является
          незначительной, но важной. Я объясню, как легче вычитать с помощью
          обоих методов, где используется перенос цифр из одного разряда в
          другой. Применяйте тот метод, который вам привычнее или кажется более
          простым.
        </DescrBody>
        <DescAccent>Вычитание: первый метод</DescAccent>
        <DescrBody>Возьмем типичный пример вычитания: 7254 - 3897 =</DescrBody>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>1
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>4
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Вычтем 7 из 4. Это сделать невозможно, поэтому забираем 1 из разряда
          десятков. Вычеркиваем 5 и пишем выше 4. И вот в чем отличие. Вы не
          говорите «четырнадцать минус семь», а произносите: «Семь вычесть из
          десяти равно затем прибавляете число, записанное над 7 (4), и
          получаете 7 — это первая цифра ответа.
        </DescrBody>
        <DescrBody>
          Пользуясь таким подходом, вы никогда не вычитаете из числа, большего
          чем 10. Все остальное представляет собой операцию сложения. 9 вычесть
          из 4 невозможно, поэтому забираем 1 из разряда сотен. 10 МИнус 9 дает
          1, 1 плюс 4 равно 5 — следующая цифра ответа.
        </DescrBody>
        <DescrBody>
          8 вычесть из 1 нельзя, поэтому снова переносим 1 из следующего
          разряда. 10 минус 8 равно 2; 2 плюс 1 равно З — следующая цифра
          ответа.
        </DescrBody>
        <DescrBody>
          8 вычесть из 1 нельзя, поэтому снова переносим 1 из следующего
          разряда. 10 минус 8 равно 2; 2 плюс 1 равно З — следующая цифра
          ответа.
        </DescrBody>
        <DescrBody>6 минус З дает З — последняя цифра ответа.</DescrBody>
        <DescAccent>Вычитание: второй метод</DescAccent>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sub>1</sub>4
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sup>1</sup>3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sup>1</sup>8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    <sup>1</sup>9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Вычитаем 7 из 4. Этого сделать нельзя, поэтому переносим 1 из разряда
          десятков. Ставим 1 перед 4, чтобы получилось 14, а также записываем
          маленькую 1 перед 9 в колонке десятков. Вы не говорите «семь вычесть
          из четырнадцати», а произносите: «Семь вычесть из десяти дает три» ,
          плюс 4 сверху — получается 7 — это первая цифра ответа.
        </DescrBody>
        <DescrBody>
          10 (9 плюс перенесенная 1) вычесть из 5 не удается, поэтому забираем 1
          из следующего разряда, как и раньше. 10 при вычитании из 15 дает 5,
          или 10 минус 10 получается О, прибавляем 5, равно 5
        </DescrBody>
        <DescrBody>9 из 2 не вычитается, поэтому опять переносим 1.</DescrBody>
        <DescrBody>9 из 10 дает 1, прибавляем 2 и получаем З.</DescrBody>
        <DescrBody>7 минус 4 равно З. Ответ готов.</DescrBody>
        <DescrBody>
          Вам не надо запоминать комбинации однозначных чисел, которые дают в
          сумме числа, превышающие 10. Используя способ простого вычитания, вы
          никогда не отнимаете от чисел, больших 10. Это упрощает вычисления и
          снижает вероятность ошибки.
        </DescrBody>
        <DescrBody>
          Данный подход очень важен. Если вы вполне овладели умножением с
          помощью простых подходов, с которыми я познакомил вас ранее, то должны
          были усвоить комбинации чисел, дающих в сумме 10. Существует всего
          пять таких комбинаций.
        </DescrBody>
        <DescrBody>
          С другой стороны, если бы вам пришлось выучить все комбинации
          однозначных чисел, которые дают в сумме число больше 10, то их уже 20.
          Используяже рассматриваемый подход, эти комбинации вообще не придется
          запоминать. Чтобы вычесть 8 из 15, отнимаем 8 от 10 (получаем 2), а
          затем прибавляем 5 и получаем ответ: 7.
        </DescrBody>
        <DescrBody>
          Мой преподаватель в третьем классе учил меня никогда не вычитать из
          числа больше 10. Вероятность того, что вы допустите ошибку, вычитая из
          числа больше 10 и меньше 20, гораздо выше, нежели при вычитании из 10.
          Пользуясь таблицей умножения и правилами умножения из первых глав этой
          книги, вы почти никогда не допустите ошибок, вычитая из 10: ответы у
          вас будут получаться почти автоматически.
        </DescrBody>
        <DescAccent>Вычитание из чисел, кратных 10</DescAccent>
        <DescrBody>Правило такое:</DescrBody>
        <DescrBody>
          Вычитайте цифру разряда единиц из 10, каждую последующую — из 9, а
          затем уменьшите на 1 крайнюю левую цифру.Например:
        </DescrBody>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    1
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescrBody>
          Можно начинать либо с левой стороны, либо с правой.
        </DescrBody>
        <DescrBody>
          Попробуем сначала справа. Вычитаем цифру, соответствующую разряду
          единиц, из 10.
        </DescrBody>
        <DescAccent>10 - 4 = 6</DescAccent>
        <DescrBody>
          Это последняя цифра ответа. Теперь вычтем остальные цифры из 9. А из
          первой цифры уменьшаемого (1000) вычтем 1.
        </DescrBody>
        <DescrBody>
          10 минус 4 дает 6, 9 минус 7 дает 2, 9 минус 5 дает 4, 1 минус 1 дает
          0. Таким образом, ответ равен 426.
        </DescrBody>
        <DescrBody>
          Если нужно вычислить 40000 минус 2748, последовательность ваших
          действий должна быть такой:
        </DescrBody>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Вычитаем 1 из крайней левой цифры (4) и получаем З — это первая цифра
          ответа. 9 минус 2 дает 7, 9 минус 7 дает 2, 9 минус 4 дает 5 и 10
          минус 8 дает 2
        </DescrBody>
        <DescrBody>Таким образом, ответ равен 37252.</DescrBody>
        <DescrBody>
          Используя этот способ, нам нужно лишь вычитать из чисел, не
          превышающих 10, а также выполнять сложение, когда это нужно.
        </DescrBody>
        <DescrBody>
          Сам подход точно такой же, как и прежде. Единственная разница состоит
          в том, что вы произносите про себя свои действия.
        </DescrBody>
        <DescAccent>Вычитание малых чисел из больших</DescAccent>
        <DescrBody>
          Если вычитаемое число имеет меньше разрядов, чем уменьшаемое, тогда
          прибавьте нули перед числом (по крайней мере, мысленно), перед тем как
          вычислять.Например:
        </DescrBody>
        <DescAccent>23000 - 46 =</DescAccent>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    3
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    0
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescrBody>
          Вычитаемое (число, которое вычитают) следует дополнить слева нулями до
          первой цифры уменьшаемого (число, из которого вычитают),отличающегося
          от нуля. Из этой цифры вы отнимаете 1. 3 минус 1 дает 2.
        </DescrBody>
        <DescrBody>
          Отнимите каждую последующую цифру от 9, пока Не дойдете до последней
          цифры, которую следует вычитать из 10.
        </DescrBody>
        <DescrBody>
          Согласно методу, которому обучают в школе, вы выполняете точно такое
          же вычисление, однако вам необходимо все время помнить о цифрах,
          переносимых из разряда в разряд. Преимущество метода, который
          предлагаю я, состоит в том, что вычисления с его помощью становятся
          механическими и выполняются с меньшей вероятностью ошибки.
        </DescrBody>
        <DescAccent>
          Проверка результата вычитания при помощи выбрасывания девяток
        </DescAccent>
        <DescrBody>
          Для операции вычитания метод, используемый нами для проверки ответов,
          похож на тот, который мы применяли в отношении примеров на сложение.
          Но есть небольшое отличие. Рассмотрим пример:
        </DescrBody>
        <TableContainer>
          <Table className={classes.substr_table}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    7
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>Верен ли полученный ответ?</DescrBody>
        <DescrBody>Давайте выбросим девятки и посмотрим.</DescrBody>
        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    4
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    14
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow
                className={classes.substr_row}
                sx={{ borderBottom: '1px solid #000' }}
              >
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    2
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    9
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                    sx={{
                      textDecoration: 'line-through',
                      textDecorationColor: 'red',
                    }}
                  >
                    7
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow className={classes.substr_row}>
                <TableCell className={classes.substr_cell}>
                  <Typography
                    variant='h5'
                    className={classes.substr_field}
                  ></Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    5
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    8
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    24
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    {'     '}
                  </Typography>
                </TableCell>
                <TableCell className={classes.substr_cell}>
                  <Typography variant='h5' className={classes.substr_field}>
                    6
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          5 минус 8 равно 6? Может ли такое быть? Хотя в исходном примере мы
          вычитаем меньшее число из большего, в случае с подстановками
          вычитаемое больше, чем уменьшаемое.
        </DescrBody>
        <DescrBody>
          Есть два пути. Один из них состоит в том, чтобы прибавить 9 к числу,
          из которого мы вычитаем. 5 плюс 9 дает 14. Задача выглядит так:
        </DescrBody>
        <DescAccent>14 — 8 = 6</DescAccent>
        <DescrBody>
          Имеет место равенство с контрольным числом значит, наши вычисления
          верны.
        </DescrBody>
        <DescrBody>
          А вот путь, который предпочитаю я. Решим туже задачу в обратном
          направлении. Скорее всего, именно так вас учили проверять ответ в
          примерах на вычитание. Прибавьте ответ к числу, которое вычитали, и
          если получили уменьшаемое (контрольное число), значит, ответ
          правильный.
        </DescrBody>
        <DescrBody>
          Проделаем то же самое с числами-подстановками. Сложим их в направлении
          снизу вверх:
        </DescrBody>
        <DescAccent>6 + 8 = 5</DescAccent>
        <DescAccent>6 + 8 = 14 и 1 + 4 = 5</DescAccent>
        <DescrBody>Ответ верный.</DescrBody>
        <DescrBody>
          Данный метод позволяет выявить большинство ошибок в примерах на
          сложение и вычитание. Используйте его и сделайте неотъемлемой частью
          своих вычислений. Займет он совсем немного времени, но поможет вам
          заслужить репутацию человека, исключительно точного в операциях с
          числами.
        </DescrBody>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
