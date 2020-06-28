import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import queryString from 'query-string'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import Typography from '@material-ui/core/Typography'

const categories = [
  {
    clothing: [
      {
        id: 1,
        SubCategoryName: 'Dresses'
      },
      {
        id: 2,
        SubCategoryName: 'Blouses & Shirts'
      },
      {
        id: 3,
        SubCategoryName: 'Coats & Jackets'
      },
      {
        id: 4,

        SubCategoryName: 'Hoodies & Sweatshirts'
      },
      {
        id: 5,

        SubCategoryName: 'Jeans'
      },
      {
        id: 6,
        SubCategoryName: 'Jumpers & Cardigans'
      },
      { id: 7, SubCategoryName: 'Jumpsuits & Playsuits' },
      {
        id: 8,
        SubCategoryName: 'Skirts'
      },
      {
        id: 9,
        SubCategoryName: 'Shorts'
      },
      {
        id: 10,
        SubCategoryName: 'Sportswear & Joggers'
      },
      { id: 11, SubCategoryName: 'Suits & Workwear' },
      {
        id: 12,
        SubCategoryName: 'Swim & Beachwear'
      },
      {
        id: 13,
        SubCategoryName: 'Tops & T-Shirts'
      },
      { id: 14, SubCategoryName: 'Trousers & Leggings' },
      { id: 15, SubCategoryName: 'Socks' },
      {
        id: 16,
        SubCategoryName: 'Polos'
      }
    ]
  },
  {
    shoes: [
      {
        name: 'Jumpers & Cardigans'
      },
      {
        name: 'Jeans'
      },
      {
        name: 'Shirts'
      },
      {
        name: 'Dresses'
      },
      {
        name: 'Tops'
      }
    ]
  },
  {
    accessorise: [
      {
        name: 'Hats'
      },
      {
        name: 'Rings'
      },
      {
        name: 'Braslets'
      },
      {
        name: 'Bags',

        id: 1
      },
      {
        name: 'Glasses',

        id: 1
      }
    ]
  }
]

// Data for rendering menu.
const categoryList = [
  {
    name: 'Clothing',
    id: 1,
    children: categories[0].clothing.map(x => {
      return {
        name: x.SubCategoryName,
        id: x.id,
        url: '?subcategory=' + x.SubCategoryName + '&'
      }
    })
  },

  {
    name: 'Shoes',
    id: 2,
    children: categories[1].shoes.map((x, i) => {
      return {
        name: x.name,
        id: x.id,
        url: '?subcategory=' + x.name + '&'
      }
    })
  },
  {
    name: 'Accessories',
    id: 3,
    children: categories[2].accessorise.map((x, i) => {
      return {
        name: x.name,
        id: x.id,
        url: '?subcategory=' + x.name + '&'
      }
    })
  }
]

const mapStateToProps = state => {
  return {
    showMenu: state.showMenu
  }
}

class ConnectedMenu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // initially item with id 1 is expanded
      expandedMenuItems: {
        1: true
      },
      categoryList,
      categories,
      url: ''
    }
    this.renderMenu = this.renderMenu.bind(this)
  }

  // This method determines from URL whether to highlight a menu item or not
  isMenuItemActive (item, location) {
    if (location.pathname === '/' && location.search) {
      let queryStringParsed = queryString.parse(location.search)

      return item.name === queryStringParsed.category
    }

    return item.url === location.pathname
  }

  async getUrl () {
    let qsAsObject = queryString.parse(this.props.location.search)
    let gender = qsAsObject.gender
    this.setState({
      url: 'gender=' + gender
    })
  }

  componentDidMount () {
    this.getUrl()
  }

  renderMenu (data) {
    return (
      <List>
        {data.map((x, i) => {
          if (!x.children) {
            return (
              <NavLink
                to={x.url + this.state.url}
                exact
                isActive={(param, location) => {
                  return this.isMenuItemActive(x, location)
                }}
                style={{
                  textDecoration: 'none',
                  color: 'rgb(32, 32, 34)'
                }}
                key={x.id}
                activeStyle={{
                  color: '#4282ad',
                  fontWeight: 'bold'
                }}
              >
                <ListItem dense button>
                  <ListItemText
                    disableTypography
                    primary={<div style={{ color: 'inherit' }}>{x.name}</div>}
                  />
                </ListItem>
              </NavLink>
            )
          } else {
            return (
              <Fragment key={x.id}>
                <ListItem
                  button
                  dense
                  onClick={() => {
                    // Update in state which menu items are expanded.
                    this.setState(ps => {
                      return {
                        expandedMenuItems: {
                          ...ps.expandedMenuItems,
                          [x.id]: !ps.expandedMenuItems[x.id]
                        }
                      }
                    })
                  }}
                >
                  <ListItemText primary={x.name} />
                  {this.state.expandedMenuItems[x.id] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={this.state.expandedMenuItems[x.id]}
                  timeout='auto'
                  unmountOnExit
                >
                  {this.renderMenu(x.children)}
                </Collapse>
              </Fragment>
            )
          }
        })}
      </List>
    )
  }

  render () {
    if (!this.props.showMenu) return null
    return (
      <div
        style={{
          backgroundColor: '#FAFAFB',
          minWidth: 250
        }}
      >
        <Typography
          style={{
            textAlign: 'center',
            fontSize: '1.4em',
            textDecoration: 'underline orange'
          }}
        >
          Category Filters{' '}
        </Typography>
        {this.renderMenu(this.state.categoryList)}
      </div>
    )
  }
}

const Menu = withRouter(connect(mapStateToProps)(ConnectedMenu))
export default Menu
