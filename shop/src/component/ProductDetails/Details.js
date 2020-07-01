import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import CircularProgress from '@material-ui/core/CircularProgress'
import { addItemInCart } from '../../Redux/Actions'
import { getProductById } from '../../api/DetailsApi'
import Item from '../Item/Item'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { withStyles } from '@material-ui/styles'
import HoverRating from '../Rating.js'
import './Details.css'

const useStyles = theme => ({
  formControl: {
    marginTop: 100,
    width: 200
  },
  selectEmpty: {
    marginTop: 20
  }
})

class ConnectedDetails extends Component {
  constructor (props) {
    super(props)

    this.isCompMounted = false

    this.state = {
      relatedItems: [],
      quantity: 1,
      item: null,
      color: null,
      itemLoading: false,
      size: null,
      errorMessage: '',
      count: 0
    }
  }

  async fetchProductAndRelatedItems () {
    this.setState({ itemLoading: true })
    let items = await getProductById(this.props.match.params.id)
    let colors = items[0]
    let product = items[3]
    // let relatedItems = await Api.searchItems({
    //   category: item.category,
    //   gender: item.gender,
    // });

    // Make sure this component is still mounted before we set state..
    if (this.isCompMounted) {
      this.setState({
        item: items,
        product: product,
        quantity: 1,
        color: null,
        //relatedItems: relatedItems.data.filter((x) => x.id !== item.id),
        itemLoading: false
      })
    }
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    // If ID of product changed in URL, refetch details for that product
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.fetchProductAndRelatedItems(this.props.match.params.id)
    }
  }

  componentDidMount () {
    this.isCompMounted = true
    this.fetchProductAndRelatedItems()
  }

  // componentWillUnmount () {
  //   this.isCompMounted = false
  // }

  //fixme
  checkIsSizeAvailable (sizeQuantity, quantity) {
    return sizeQuantity >= quantity
  }

  render () {
    const { classes } = this.props

    if (this.state.itemLoading) {
      return <CircularProgress className='circular' />
    }

    if (!this.state.product) {
      return null
    }

    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              marginBottom: 20,
              marginTop: 20,
              fontSize: 22
            }}
          >
            {this.state.product[0].ProductName}
          </div>
          <HoverRating itemValue='5' />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div>
            <img
              src={this.state.product[0].MainImage}
              alt={this.state.product[0].ProductName}
              width={500}
              height={500}
              style={{
                border: '1px solid lightgray',
                borderRadius: '5px',
                objectFit: 'cover',
                padingTop: 10,
                display: 'inline-block'
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 20,
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                fontSize: 16
              }}
            >
              Price: {this.state.product[0].Price} $
            </div>

            <div style={{ fontSize: 14, marginTop: 5, color: '#228B22' }}>
              {this.state.product[0].BrandName}
            </div>

            <div>
              <FormControl
                required
                variant='outlined'
                className={classes.formControl}
                style={{ marginTop: 10 }}
              >
                <InputLabel htmlFor='outlined-age-native-simple'>
                  {' '}
                  Please Select
                </InputLabel>
                <Select
                  labelId='demo-simple-select-required-label'
                  id='demo-simple-select-required'
                  native
                  onChange={e => {
                    this.setState({ size: e.target.value })
                  }}
                  value={this.state.size}
                  label='Size'
                  inputProps={{
                    name: 'size',
                    id: 'outlined-age-native-simple'
                  }}
                >
                  <option aria-label='None' value='' />
                  {this.state.item[2].map((size, index) => {
                    if (size.AvailableCount > 0)
                      return (
                        <option key={size.SizeType} value={size.SizeType}>
                          {size.SizeType}
                        </option>
                        //                   return (
                        //   <MenuItem disabled value="">
                        //     {size.size}
                        //     {" - Not Available "}
                        //   </MenuItem>
                        // );
                      )
                    return (
                      <option
                        disabled
                        key={size.SizeType}
                        value={size.SizeType}
                      >
                        {size.SizeType}
                        {' - Not Available '}
                      </option>
                    )
                  })}
                </Select>
                <FormHelperText>Required</FormHelperText>
              </FormControl>
            </div>
            <div>
              <FormControl
                required
                variant='outlined'
                className={classes.formControl}
                style={{ marginTop: 10 }}
              >
                <InputLabel htmlFor='outlined-age-native-simple'>
                  {' '}
                  Please Select Color
                </InputLabel>

                <Select
                  labelId='demo-simple-select-required-label'
                  id='demo-simple-select-required'
                  native
                  onChange={e => {
                    this.setState({ color: e.target.value })
                  }}
                  value={this.state.color}
                  label='Color'
                  inputProps={{
                    name: 'color',
                    id: 'outlined-age-native-simple'
                  }}
                >
                  <option aria-label='None' value='' />
                  {this.state.item[0].map((color, index) => {
                    // if (color.AvailableCount > 0)
                    return (
                      <option key={color.Color} value={color.Color}>
                        {color.Color}
                      </option>
                    )
                  })}
                </Select>
              </FormControl>
            </div>
            <TextField
              type='number'
              value={this.state.quantity}
              style={{ marginTop: 20, marginBottom: 10, width: 70 }}
              label='Quantity'
              inputProps={{ min: 1, max: 4, step: 1 }}
              onChange={e => {
                this.setState({ quantity: parseInt(e.target.value) })
              }}
            />
            <Button
              style={{ width: 170, marginTop: 100 }}
              color='primary'
              variant='outlined'
              onClick={() => {
                if (this.state.size !== null) {
                  console.log(this.state.size)
                  this.props.dispatch(
                    addItemInCart({
                      ...this.state.product,
                      quantity: this.state.quantity,
                      size: this.state.size,
                      color: this.state.color,
                      productName: this.state.product[0].ProductName,
                      id: this.state.product[0].id,
                      price: this.state.product[0].Price,
                      storeName: this.state.product[0].BrandName
                    })
                  )
                }
              }}
            >
              Add to Cart <AddShoppingCartIcon style={{ marginLeft: 5 }} />
            </Button>
          </div>
        </div>
        {/* <div>
          {this.state.item.imageUrls.map((image) => {
            return (
              <img
                src={image}
                alt="image_here"
                width={70}
                height={70}
                style={{
                  border: "1px solid lightgray",
                  objectFit: "cover",
                  spacing: 10,
                  margin: "25px 10px",
                }}
              />
            );
          })}
        </div> */}
        {/* Product description */}
        <div className='details-main-container'>
          <div className='product-details-content'>
            <Typography variant='h6'>Product Details</Typography>
          </div>
          <div className='product-details-list'>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <List>
                  {this.state.item[1].map(desc => {
                    return (
                      <ListItem>
                        <ListItemText primary={desc.MaterialType} />
                      </ListItem>
                    )
                  })}
                </List>
              </Grid>
            </Grid>
          </div>
        </div>
        {/* Relateditems */}
        <div className='related-items-content'>Related Items</div>
        {this.state.relatedItems.slice(0, 3).map(x => {
          return <Item key={x.id} item={x} />
        })}
      </div>
    )
  }
}

let Details = connect()(ConnectedDetails)
export default withStyles(useStyles)(Details)
