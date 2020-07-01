import React, { Component } from 'react'
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
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Row from './OrderHistory'
import { createOrderDetails } from '../../api/OrderDetailsApi'

const mapStateToProps = state => {
  return { loggedInUser: state.loggedInUser }
}

class CollapsibleTable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: []
    }
  }

  async fetchData () {
    let results = await createOrderDetails(1)

    this.setState({
      items: results
    })
  }

  componentDidMount () {
    this.fetchData()
  }

  render () {
    console.log('item is ', this.state.items)
    return (
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align='left'>Order Number</TableCell>
              <TableCell></TableCell>

              <TableCell></TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.items.map(row => (
              <Row key={row.key} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

const Orders = withRouter(connect(mapStateToProps)(CollapsibleTable))
export default Orders
