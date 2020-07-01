import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import { withStyles } from '@material-ui/styles'

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  }
})

// function createData (name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 }
//     ]
//   }
// }

const Row = props => {
  const { row } = props
  const [open, setOpen] = React.useState(false)
  const classes = useRowStyles()
  console.log('row is ', row)
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          1234
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box margin={1}>
              <Typography variant='h6' gutterBottom component='div'>
                History
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell align='right'>Item Name</TableCell>
                    <TableCell align='right'>Store</TableCell>
                    <TableCell align='right'>Size</TableCell>
                    <TableCell align='right'>Color</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell align='right'>Total price (AMD)</TableCell>
                    <TableCell align='right'>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row[2].map(historyRow => (
                    <TableRow key='14.56.78'>
                      <TableCell component='th' scope='row'>
                        {historyRow.OrderDate}
                      </TableCell>

                      <TableCell component='th' scope='row'>
                        {historyRow.ProductName}
                      </TableCell>
                      <TableCell align='right'>
                        {historyRow.StoreName}
                      </TableCell>
                      <TableCell align='right'>
                        {historyRow.ProductSize}
                      </TableCell>
                      <TableCell align='right'>
                        {historyRow.ProductColor}
                      </TableCell>
                      <TableCell align='right'>{historyRow.Quantity}</TableCell>
                      <TableCell align='right'>{historyRow.Price}</TableCell>

                      {/* <TableCell align='right'>
                        {Math.round(
                          historyRow.Quantity * historyRow.Price * 100
                        ) / 100}
                      </TableCell> */}
                      <TableCell align='right'>
                        {historyRow.OrderStatusName}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];
export default withStyles(useRowStyles)(Row)
