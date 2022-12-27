import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import DescrCellMain from '../../../ui/description/DescrCellMain';
import { I_descr_CheckTable } from '../../../../interfaces/interfaces';

function CheckTable({
  numberLeft,
  operator,
  numberRight,
  valueResult,
  checkLeft,
  checkRight,
  checkSumLeft,
  checkResult,
  displayRowTotal,
}: I_descr_CheckTable) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '50%', minWidth: '300px', margin: 'auto' }}>
        <TableBody>
          <TableRow>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${numberLeft}`}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{operator}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${numberRight}`}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>=</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${valueResult}`}</DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${checkLeft}`}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'> </DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${checkRight}`}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'> </DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${checkResult}`}</DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow sx={{ display: displayRowTotal ? 'table-row' : 'none' }}>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'> </DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${checkSumLeft}`}</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'> </DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>=</DescrCellMain>
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{`${checkResult}`}</DescrCellMain>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CheckTable;
