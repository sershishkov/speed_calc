import { useEffect } from 'react';

import ButtonSave from '../../ui/buttons/ButtonSave';
import ButtonRepeat from '../../ui/buttons/ButtonRepeat';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';

import { I_example_SimplDivWithRest_Obj } from '../../../interfaces/interfaces';

function ReportDivisionWithRest({
  displayStatistics,
  resultsList,
  onContinue,
}: {
  displayStatistics: boolean;
  resultsList: I_example_SimplDivWithRest_Obj[];
  onContinue: () => void;
}) {
  useEffect(() => {
    if (displayStatistics) {
      const buttonRepeat = document.getElementById('buttonRepeat');
      buttonRepeat!.focus();
    }
  }, [displayStatistics]);
  return (
    <Grid item sx={{ display: displayStatistics ? 'block' : 'none' }}>
      <Typography variant='h4' align='center'>
        Ваши результаты
      </Typography>

      <TableContainer component={Paper}>
        <Table
          sx={{
            width: 'max-content',
            margin: 'auto',
            // minWidth: '550px',
          }}
          align='center'
          aria-label='simple table'
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Пример
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Чей ответ?
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Пример
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Остаток
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Сдано?
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultsList &&
              resultsList.length > 0 &&
              resultsList.map((item, index) => (
                <TableRow key={index} sx={{}}>
                  <TableCell>
                    <Typography variant='h6' align='center'>
                      {item.example}
                    </Typography>
                  </TableCell>

                  <TableCell>
                    <Grid container flexDirection='column' alignItems='center'>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          Ваш
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          Комп
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid container flexDirection='column' alignItems='center'>
                      <Grid item>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userResult) - item.resultRight === 0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userResult}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          {item.resultRight}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid container flexDirection='column' alignItems='center'>
                      <Grid item>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            Number(item.userAnswerRem) -
                              item.reminderOfDivision ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswerRem}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          {item.reminderOfDivision}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant='h6'
                      align='center'
                      color={item.doneExcercise ? 'success.main' : 'error.main'}
                    >
                      {item.doneExcercise ? 'ок!' : 'ошибка!'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>
                <Grid
                  container
                  alignItems='center'
                  flexDirection='column-reverse'
                >
                  <Grid item sx={{ width: '100%' }}>
                    <ButtonRepeat onClick={onContinue} id='buttonRepeat' />
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default ReportDivisionWithRest;
