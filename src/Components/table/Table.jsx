import "./table.scss"
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name,  Firstmonth, Secondmonth,Thirdmonth , Fourthmonth ) {
  return { name, Firstmonth, Secondmonth, Thirdmonth, Fourthmonth };
}

const rows = [
  createData('saikiran', '159k',  '120k',  '156k',  '189k'),
  createData('sai charan', '199k','169k','159k','169k'),
  createData('laddu',  '139k','119k','189k','1259k'),
  createData('kumar', '1595k','1552k','1555k','1529k'),
  createData('vishnu',  '1559k','1529k','189k','1859k'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> 
                Name</TableCell>
                
            <TableCell align="right"> profile</TableCell>
            <TableCell align="right">First month</TableCell>
            <TableCell align="right">Second month</TableCell>
            <TableCell align="right">Third month </TableCell>
            <TableCell align="right"> Fourth month</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
               <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.Firstmonth}</TableCell>
              <TableCell align="right">{row.Secondmonth}</TableCell>
              <TableCell align="right">{row.Thirdmonth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

 