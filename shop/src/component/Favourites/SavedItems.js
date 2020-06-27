import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addItemInFavourite } from '../../Redux/Actions'
import Item from '../Item/Item'
import Titles from '../ProductHeader/Titles'
import './SavedItems.css'
import Paper from "@material-ui/core/Paper";

const mapStateToProps = state => {
  return { items: state.favouriteItems }
}

class SavedItems extends Component {
  render () {
    return (
      <Paper className='saved-items-content' elevation={10}  >
        <div>
          <Titles title='Saved Items' />
        </div>
        <div>
          {this.props.items.map((item, index) => {
            return <Item key={item.id} item={item} />
          })}
        </div>
      </Paper>
    )
  }
}

const FaveItems = withRouter(connect(mapStateToProps)(SavedItems))
export default FaveItems
