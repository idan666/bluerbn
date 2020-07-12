import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import SearchBar from 'material-ui-search-bar';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { clearFlights, getFilteredFlightList, getFlightList } from '../../../actions/flightActions';

const Flights = props => {
  const [searchText, setSearchText] = useState('');
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    setFlights(getFlightList());
    setSearchText('');
  }, []);

  const getFilteredFlights = newValue => {
    setSearchText(newValue);
    getFilteredFlightList(newValue);
  };
  return (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        placeholder="Search flights here..."
        label="Destination"
        variant="outlined"
        value={searchText}
        onChange={newValue => getFilteredFlights(newValue)}
      />

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
          {flights?.map(row => (
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
};

const mapStateToProps = state => ({
  flights: state.flights,
  filteredFlights: state.filteredFlights,
});

export default connect(mapStateToProps)(Flights);
