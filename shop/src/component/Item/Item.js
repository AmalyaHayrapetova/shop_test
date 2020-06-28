import React, { Component } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { connect } from 'react-redux'
import { addItemInFavourite, deleteSavedItems } from '../../Redux/Actions'
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Tooltip from '@material-ui/core/Tooltip'
import FavoriteIcon from '@material-ui/icons/Favorite'

class ConnectedItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      addedToFav: false
    }
  }
  render () {
    return (
      <Card
        style={{ width: 250, height: 400, margin: 30, display: 'inline-block' }}
      >
        <CardActionArea>
          <CardMedia
            style={{ height: 250 }}
            image={this.props.item.MainImage}
            onClick={() => {
              this.props.history.push('/details/' + this.props.item.id)
            }}
          />
          <CardContent style={{ height: 50 }}>
            <div
              style={{
                display: 'center',
                marginLeft: 10,
                fontWeight: 'bold',
                whiteSpace: 'wrap'
              }}
            >
              {this.props.item.ProductName}
            </div>
            <div style={{ margin: 10 }}>Price: {this.props.item.Price} $</div>
            <div style={{ color: '#1a9349', fontWeight: 'bold', margin: 10 }}>
              {this.props.item.BrandName}
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 30,
            marginTop: 50
          }}
        >
          <Tooltip title='Add to Favourite'>
            <IconButton
              size='small'
              onClick={e => {
                e.stopPropagation()
                if (this.state.addedToFav) {
                  this.props.dispatch(deleteSavedItems(this.props.item.id))
                  this.setState({ addedToFav: false })
                } else {
                  this.props.dispatch(
                    addItemInFavourite({ ...this.props.item, quantity: 1 })
                  )
                  this.setState({ addedToFav: true })
                }
              }}
              color='primary'
              aria-label='Add to favourite'
            >
              <FavoriteIcon size='small' style={{ fill: '#FF7043' }} />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Card>
    )
  }
}

export default withRouter(connect()(ConnectedItem))
