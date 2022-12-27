import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import DescrCellMain from '../../../ui/description/DescrCellMain';
import DescrCellRoundHintNumber from '../../../ui/description/DescrCellRoundHintNumber';
import DescrCellRoundRefNumber from '../../../ui/description/DescrCellRoundRefNumber';

import { I_descr_ExampleTableMult } from '../../../../interfaces/interfaces';
function ExampleTableMult({
  hintPlusLeft,
  hintPlusRight,
  refNumber,
  numberLeft,
  numberRight,
  valueIntermediate,
  hintMinusLeft,
  hintMinusRight,
  valueToAdd,
  valueToMinus,
  valueResult,
  displayRowPlusHits,
  displayRowMinusHints,
  displayRowResults,
}: I_descr_ExampleTableMult) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '70%', minWidth: '300px', margin: 'auto' }}>
        <TableBody>
          <TableRow sx={{ display: displayRowPlusHits ? 'table-row' : 'none' }}>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>+</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber
                text={hintPlusLeft ? hintPlusLeft : ''}
              />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>+</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber
                text={hintPlusRight ? hintPlusRight : ''}
              />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {' '}
                {valueToAdd ? `${valueToAdd}` : ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ display: refNumber ? 'table-cell' : 'none' }}>
              <DescrCellRoundRefNumber text={refNumber ? refNumber : ''} />
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>
                {numberLeft ? numberLeft : ''}
              </DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>x</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>
                {numberRight ? numberRight : ''}
              </DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='center'>=</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {valueIntermediate ? valueIntermediate : ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ display: displayRowMinusHints ? 'table-row' : 'none' }}
          >
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>-</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber
                text={hintMinusLeft ? hintMinusLeft : ''}
              />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='right'>-</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellRoundHintNumber
                text={hintMinusRight ? hintMinusRight : ''}
              />
            </TableCell>
            <TableCell sx={{ pr: 0 }}>
              <DescrCellMain align='center'>{''}</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {valueToMinus ? `${valueToMinus}` : ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>

          <TableRow sx={{ display: displayRowResults ? 'table-row' : 'none' }}>
            <TableCell colSpan={5}>
              <DescrCellMain align='right'>Ответ</DescrCellMain>
            </TableCell>
            <TableCell>
              <DescrCellMain align='right'>
                {valueResult ? valueResult : ''}
              </DescrCellMain>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ExampleTableMult;
