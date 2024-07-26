import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface Props {
    data: Array<any>
}
const PlacesTable = (props: Props) => {
    const { data } = props
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Fitness Center</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell>Rating</StyledTableCell>
            <StyledTableCell>Website URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((singlePlaceData) => (
            <StyledTableRow key={singlePlaceData.data_id}>
              <StyledTableCell component="th" scope="row">
                {singlePlaceData.title}
              </StyledTableCell>
              <StyledTableCell>{singlePlaceData.address}</StyledTableCell>
              <StyledTableCell>{singlePlaceData.phone}</StyledTableCell>
              <StyledTableCell>{singlePlaceData.rating}</StyledTableCell>
              <StyledTableCell>
                <a href={`${singlePlaceData.website}`} target="_blank" rel="noopener noreferrer">Link</a>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlacesTable