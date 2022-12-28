import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

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
          Метод напоминает тот, что мы использовали для чисел, близких по
          значению к 50.
        </DescrBody>
        <DescrBody>
          500, умноженное на 500, дает 250000. Берем 500 и 250000 в качестве
          опорных чисел. Например:
        </DescrBody>
        <DescAccent>
          506<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          506 больше, чем 500, поэтому рисуем кружок вверху. В него вписываем 6.
        </DescrBody>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    +
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    6
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <DescAccent>
                    506<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescAccent>
          506<sup>2</sup> = 250000
        </DescAccent>
        <DescrBody>Число в кружке следует прибавлять к числу тысяч.</DescrBody>
        <DescAccent>250 + 6 = 256 тысяч</DescAccent>
        <DescrBody>Возведем в квадрат число в кружке:</DescrBody>
        <DescAccent>
          6<sup>2</sup> = 36
        </DescAccent>
        <DescAccent>256000 + 36 = 256036 ОТВЕТ</DescAccent>
        <DescrBody>Разберем другой пример:</DescrBody>
        <DescAccent>
          512<sup>2</sup> =
        </DescAccent>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    +
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <DescAccent>
                    512<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescAccent>250 + 12 = 262</DescAccent>
        <DescrBody>Промежуточный ответ — 262000</DescrBody>
        <DescAccent>
          12<sup>2</sup> = 144
        </DescAccent>
        <DescAccent>262000 + 144 = 262144 ОТВЕТ</DescAccent>
        <DescrBody>
          Для возведения в квадрат чисел, которые немного меньше 500,
          используйте следующий способ. Рассмотрим пример:
        </DescrBody>
        <DescAccent>
          488<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          488 меньше, чем 500, поэтому рисуем кружок вниЗУ. Поскольку 488 на 12
          меньше, Чем 500, вписываем в кружок 12.
        </DescrBody>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <DescAccent>
                    488<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    12
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescrBody>
          250 тысяч минус 12 тысяч дает 238 тысяч. Прибавляем 12 в квадрате (12
          <sup>2</sup> =144).
        </DescrBody>
        <DescAccent>238000 + 144 = 238144 ОТВЕТ</DescAccent>
        <DescrBody>
          Можно добиться результата еще более впечатляющим способом. Например:
        </DescrBody>
        <DescAccent>
          535<sup>2</sup> =
        </DescAccent>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    +
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    35
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <DescAccent>
                    535<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescAccent>250000 + 35000 = 285000</DescAccent>
        <DescAccent>
          35<sup>2</sup> = 1225
        </DescAccent>
        <DescAccent>285000 + 1225 = 286225 ОТВЕТ</DescAccent>

        <DescrBody>
          Все это легко рассчитывается в уме. Мы использовали два ускоряющих
          метода: метод для возведения в квадрат чисел, близких по значению к
          500, и метод для возведения в квадрат чисел, оканчивающихся на 5. А
          как насчет 635<sup>2</sup> ?
        </DescrBody>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    +
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    135
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <DescAccent>
                    635<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescAccent>250000 + 135000 = 385000</DescAccent>
        <DescAccent>
          135<sup>2</sup> = 18225
        </DescAccent>

        <DescrBody>
          Чтобы вычислить 135<sup>2</sup> , мы используем способ для вычисления
          квадрата чисел, оканчивающихся на 5, и способ для перемножения чисел
          больше 10, но меньше 20 (13 + 1 = 14, 13 х 14 = 182). Приписываем 25
          справа к 182, получаем: 135<sup>2</sup> = 18225.
        </DescrBody>
        <DescrBody>
          Можно произносить полученный ответ так: «Восемнадцать тысяч, два, два,
          пять».
        </DescrBody>
        <DescrBody>
          Чтобы прибавить 18000, прибавляем 20 и вычитаем 2.
        </DescrBody>
        <DescAccent>385 + 20 = 405</DescAccent>
        <DescAccent>405 - 2 = 403</DescAccent>
        <DescrBody>Припишем 225 справа.</DescrBody>
        <DescrBody>Искомый ответ: 403225.</DescrBody>
        <DescrBody>Решим еще один пример:</DescrBody>

        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded_base}
                  >
                    500
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={`${classes.description_cell} `}>
                  <DescAccent>
                    445<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography variant='h5' align='right'>
                    -
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    55
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <DescAccent>250 - 55 = 195 (195 х 1000 = 195000)</DescAccent>
        <DescrBody>
          55<sup>2</sup> = 3025 (используем способ для возведения в квадрат
          чисел, оканчивающихся на 5)
        </DescrBody>
        <DescAccent>195000 + 3025 = 198025</DescAccent>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
