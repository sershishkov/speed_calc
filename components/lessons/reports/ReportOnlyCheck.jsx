import { useEffect } from 'react';

import ButtonSave from '../../ui/buttons/ButtonSave';
import ButtonRepeat from '../../ui/buttons/ButtonRepeat';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';

function ReportOnlyCheck({
  displayStatistics,
  resultsList,
  user,
  onSaveResults,
  onContinue,
}) {
  useEffect(() => {
    if (user && displayStatistics) {
      const buttonSave = document.getElementById('buttonSave');
      buttonSave.focus();
    } else if (!user && displayStatistics) {
      const buttonRepeat = document.getElementById('buttonRepeat');
      buttonRepeat.focus();
    }
  }, [user, displayStatistics]);
  return (
    <Grid item sx={{ display: displayStatistics ? 'block' : 'none' }}>
      <Typography variant='h4' align='center'>
        Ваши результаты
      </Typography>
      <TableContainer component={Paper}>
        <Table
          sx={{ width: '90%', margin: 'auto', minWidth: '550px' }}
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
                  чей ответ?
                </Typography>
              </TableCell>

              <TableCell>
                <Typography variant='h6' align='center'>
                  Проверка левого
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Проверка правого
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  контрольное число слева
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  контрольное число справа
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant='h6' align='center'>
                  Сдан пример
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
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
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
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid item>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            item.userAnswer_CheckNumberLeft -
                              item.checkNumberLeft ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswer_CheckNumberLeft}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          {item.checkNumberLeft}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid item>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            item.userAnswer_CheckNumberRight -
                              item.checkNumberRight ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswer_CheckNumberRight}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          {item.checkNumberRight}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid item>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            item.userAnswer_CheckResultLeft -
                              item.checkResultLeft ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswer_CheckResultLeft}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          {item.checkResultLeft}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Grid
                      container
                      justifyContent='flex-start'
                      alignItems='center'
                      direction='column'
                    >
                      <Grid item>
                        <Typography
                          variant='h6'
                          align='center'
                          color={
                            item.userAnswer_CheckResultRight -
                              item.checkResultRight ===
                            0
                              ? 'success.main'
                              : 'error.main'
                          }
                        >
                          {item.userAnswer_CheckResultRight}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6' align='center'>
                          {item.checkResultRight}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>

                  <TableCell>
                    <Typography
                      variant='h6'
                      align='center'
                      color={item.doneCheck ? 'success.main' : 'error.main'}
                    >
                      {item.doneCheck ? 'ок!' : 'ошибка!'}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={7}>
                <Grid
                  container
                  alignItems='center'
                  flexDirection='column-reverse'
                >
                  <Grid item sx={{ width: '100%' }}>
                    <ButtonSave
                      disabled={!user}
                      onClick={onSaveResults}
                      id='buttonSave'
                    >
                      {user
                        ? 'Сохранить результаты'
                        : 'Не возможно сохранить результаты - вы не авторизованы'}
                    </ButtonSave>
                  </Grid>
                  <Grid
                    item
                    sx={{ display: !user ? 'block' : 'none', width: '100%' }}
                  >
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

export default ReportOnlyCheck;
