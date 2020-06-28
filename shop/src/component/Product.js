import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import Products from '../data/data.js'
import GridList from '@material-ui/core/GridList'
import queryString from 'query-string'
import CircularProgress from '@material-ui/core/CircularProgress'
import Item from './Item/Item'
import Paging from './paging/Paging'
import ProductsHeader from './ProductHeader/ProductHeader'
import Menu from './CategoryMenu/CategoryFilter'
import { callBackendAPI } from '../api/ProductApi'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(50),
    display: 'inline'
  },
  main: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(10),
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 350
  },
  img: {
    marginLeft: '20',
    marginRight: '20',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  }

  // grid: {
  //   diraction: "row",

  // },
}))

class Product extends Component {
  //const classes = useStyles();
  constructor (props) {
    super(props)

    this.state = {
      loading: false,
      totalItemsCount: null,
      items: [],
      page: 1,
      itemsPerPage: 25,
      isCompMounted: false
    }
    this.updateQueryString = this.updateQueryString.bind(this)
  }

  async fetchData () {
    this.setState({ loading: true })

    // Parse the query string
    let qsAsObject = queryString.parse(this.props.location.search)
    let gender = qsAsObject.gender
    let subCategory = qsAsObject.subcategory
    let store = qsAsObject.store
    let results = await callBackendAPI(gender, subCategory, store)
    let totalLength = results.length

    results = results.slice(
      (this.state.page - 1) * this.state.itemsPerPage,
      this.state.page * this.state.itemsPerPage
    )

    this.setState({
      items: results[0],
      loading: false,
      totalItemsCount: totalLength
    })
  }

  componentDidMount () {
    this.isCompMounted = true

    this.fetchData()
  }

  // componentWillUnmount () {
  //   this.isCompMounted = false
  // }

  updateQueryString (newValues) {
    let currentQS = queryString.parse(this.props.location.search)
    let newQS = { ...currentQS, ...newValues }
    this.props.history.push('product-list/?' + queryString.stringify(newQS))
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    let currentQS = queryString.parse(this.props.location.search)
    let oldQS = queryString.parse(prevProps.location.search)

    let areSameObjects = (a, b) => {
      if (Object.keys(a).length !== Object.keys(b).length) return false
      for (let key in a) {
        if (a[key] !== b[key]) return false
      }
      return true
    }

    // We will refetch products only when query string changes.
    if (!areSameObjects(currentQS, oldQS)) {
      this.fetchData()
    }
  }

  render () {
    let parsedQS = queryString.parse(this.props.location.search)

    if (this.state.loading) {
      return <CircularProgress className='circular' />
    }

    return (
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: 100 }}>
          <Menu />
        </div>
        <div
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <ProductsHeader
            parsedQS={parsedQS}
            updateQueryString={this.updateQueryString}
            totalItemsCount={this.state.totalItemsCount}
          />

          <div style={{ flex: 1 }}>
            {this.state.items.map(item => {
              return <Item key={item.id} item={item} />
            })}
          </div>

          <Paging
            parsedQS={parsedQS}
            updateQueryString={this.updateQueryString}
            totalItemsCount={this.state.totalItemsCount}
          />
        </div>
      </div>
    )
  }
}

export default Product
