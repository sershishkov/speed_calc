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
        <DescAccent>
          Возведение в квадрат чисел, близких по значению к 50
        </DescAccent>
        <DescrBody>
          Метод для возведения в квадрат чисел, близких по значению к 50,
          использует ту же формулу, что и при перемножении любых чисел. Однако
          есть еще один способ, позволяющий значительно упростить
          вычисления.Например:
        </DescrBody>
        <DescAccent>
          46<sup>2</sup>=
        </DescAccent>
        <DescrBody>
          46 в квадрате означает 46 х 46. Округляя, получаем 50 х 50 = 2500.
          Берем 50 и 2500 в качестве опорных чисел.
        </DescrBody>
        <DescrBody>
          46 меньше, чем 50, поэтому рисуем кружок под примером.
        </DescrBody>
        <TableContainer>
          <Table sx={{ width: '200px', margin: 'auto' }}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.description_cell}>
                  <Typography
                    variant='h5'
                    className={classes.description_rounded}
                  >
                    50
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>
                    46<sup>2</sup>
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
                    4
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
          46 на 4 меньше 50, поэтому вписываем 4 в кружок. Впереди ставим минус.
        </DescrBody>
        <DescrBody>Отнимаем 4 из числа сотен в 2500.</DescrBody>
        <DescAccent>25 - 4 = 21</DescAccent>
        <DescrBody>
          Это число сотен в искомом ответе. Его можно записать как 2100 (21 х
          100). Чтобы получить остальную часть ответа, возведем в квадрат число
          в кружке
        </DescrBody>
        <DescAccent>
          4<sup>2</sup> = 16
        </DescAccent>
        <DescAccent>2100 + 16 = 2116 ОТВЕТ</DescAccent>
        <DescrBody>Рассмотрим другой пример:</DescrBody>
        <DescAccent>
          56<sup>2</sup> =
        </DescAccent>
        <DescrBody>
          56 больше, чем 50, поэтому рисуем кружок над примером.
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
                    className={classes.description_rounded}
                  >
                    50
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>
                    56<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>
          Прибавляем 6 к числу сотен в 2500 (25). 25 плюс 6 дает 31.
          Промежуточный ответ равен 3100.
        </DescrBody>
        <DescAccent>
          6<sup>2</sup> = 36
        </DescAccent>
        <DescAccent>3100 + 36 = 3136 ОТВЕТ</DescAccent>
        <DescrBody>Попробуем решить еще один пример:</DescrBody>
        <DescAccent>
          62<sup>2</sup> =
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
                    className={classes.description_rounded}
                  >
                    50
                  </Typography>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>{'    '}</DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>
                    62<sup>2</sup>
                  </DescAccent>
                </TableCell>
                <TableCell className={classes.description_cell}>
                  <DescAccent>=</DescAccent>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <DescrBody>25 + 12 = 37 (промежуточный ответ равен 3700)</DescrBody>
        <DescAccent>
          12<sup>2</sup> = 144
        </DescAccent>
        <DescAccent>3700 + 144 = 3844 ОТВЕТ</DescAccent>
      </DescAccordion>
    </Grid>
  );
}

export default Description;
