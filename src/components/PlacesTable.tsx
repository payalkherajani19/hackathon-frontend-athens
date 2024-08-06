import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useNavigate } from 'react-router-dom'

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
      '&:hover': {
        backgroundColor: '#E5E4E2', // Customize the hover color
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
    handleRowClick: (dataId: string) => void
}
const PlacesTable = (props: Props) => {
    const { data } = props
    const classes = useStyles();
    const navigate = useNavigate()

  const handleEnrich = (e: React.MouseEvent<HTMLTableRowElement, MouseEvent>, dataId: string) => {
      e.preventDefault()
      props?.handleRowClick(dataId)
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Fitness Center</StyledTableCell>
            <StyledTableCell>Booking</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell>Rating</StyledTableCell>
            <StyledTableCell>Website</StyledTableCell>
            <StyledTableCell>Type of Industry</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((singlePlaceData) => (
            <StyledTableRow key={singlePlaceData.data_id} onClick={(e) => handleEnrich(e,singlePlaceData.data_id )} style={{ cursor: 'pointer'}}>
              <StyledTableCell component="th" scope="row">
                {singlePlaceData.title}
              </StyledTableCell>
              <StyledTableCell>
                 {
                  singlePlaceData.book_online ? (
                    <a href={singlePlaceData.book_online} target="_blank" rel="noopener noreferrer"  style={{ color: 'black'}}>Booking Link</a>
                  ) : (
                    <>Not Found</>
                  )
                 }
              </StyledTableCell>
              <StyledTableCell>{singlePlaceData.address}</StyledTableCell>
              <StyledTableCell>{singlePlaceData.phone}</StyledTableCell>
              <StyledTableCell>{singlePlaceData.rating}</StyledTableCell>
              <StyledTableCell>
                <a href={`${singlePlaceData.website}`} target="_blank" rel="noopener noreferrer" style={{ color: 'black'}}>Link</a>
              </StyledTableCell>
              <StyledTableCell>
                 {singlePlaceData.type}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlacesTable