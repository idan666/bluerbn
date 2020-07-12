import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const rows = [
  {
    id: 1,
    from: 'here',
    to: 'there',
    departureTime: 'now',
    landingTime: 'then',
    price: '12',
  },
  {
    id: 2,
    from: 'here',
    to: 'there',
    departureTime: 'now',
    landingTime: 'then',
    price: '12',
  },
  {
    id: 3,
    from: 'here',
    to: 'there',
    departureTime: 'now',
    landingTime: 'then',
    price: '12',
  },
];

export default function Flights() {
  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Landing Time</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.to}</TableCell>
              <TableCell>{row.departureTime}</TableCell>
              <TableCell>{row.landingTime}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
