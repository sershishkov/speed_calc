import { useEffect } from 'react';
// import ButtonSave from '../../ui/buttons/ButtonSave';
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

import { I_example_simple_Obj } from '../../../interfaces/interfaces';

function ReportOnlyResult({
  display,
  resultsList,
  onContinue,
}: {
  display: boolean;
  resultsList: I_example_simple_Obj[];
  onContinue: () => void;
}) {
  useEffect(() => {
    if (display) {
      const buttonRepeat = document.getElementById('buttonRepeat');
      buttonRepeat!.focus();
    }
  }, [display]);

  return (
    <Grid item sx={{ display: display ? 'block' : 'none' }}>
      <Typography variant='h4' align='center'>
        Ваши результаты
      </Typography>
      <TableContainer component={Paper}>
        <Table align='center' aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Пример</TableCell>
              <TableCell align='center'>Ответ</TableCell>
              <TableCell align='center'>Комп</TableCell>
              <TableCell align='center'>Сдано?</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resultsList &&
              resultsList.length > 0 &&
              resultsList.map((item, index) => (
                <TableRow key={index} sx={{}}>
                  <TableCell align='center'>{item.example}</TableCell>
                  <TableCell align='center'>{item.userAnswer}</TableCell>
                  <TableCell align='center'>{item.rightAnswer}</TableCell>
                  <TableCell
                    sx={{ color: item.done ? 'success.main' : 'error.main' }}
                    align='center'
                  >
                    {item.done ? 'ok' : 'ошибка'}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>
                <Grid container alignItems='center'>
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

export default ReportOnlyResult;
