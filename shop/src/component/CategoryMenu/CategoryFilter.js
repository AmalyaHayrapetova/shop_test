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
        id: 13,
        SubCategoryName: 'Tops & T-Shirts'
      },
      { id: 14, SubCategoryName: 'Trousers & Leggings' },
      {
        id: 16,
        SubCategoryName: 'Polos'
      }
    ]
  },
  {
    shoes: [
      {
        SubCategoryName: 'Flats',
        id: 17
      },
      {
        SubCategoryName: 'Heels',
        id: 18
      },
      {
        SubCategoryName: 'Trainers',
        id: 19
      },
      {
        SubCategoryName: 'Sandals',
        id: 20
      },
      {
        SubCategoryName: 'Slippers',
        id: 21
      },
      { SubCategoryName: 'Boots', id: 22 },
      {
        SubCategoryName: 'Wedges & Flatforms',
        id: 23
      },
      {
        SubCategoryName: 'Sneakers',
        id: 37
      }
    ]
  },
  {
    accessorise: [
      {
        SubCategoryName: 'Masks',
        id: 37
      },
      {
        SubCategoryName: 'Bags',
        id: 24
      },
      {
        SubCategoryName: 'Necklaces',
        id: 25
      },
      {
        SubCategoryName: 'Earings',
        id: 26
      },
      {
        SubCategoryName: 'Sunglasses',
        id: 27
      },
      {
        SubCategoryName: 'Watches',
        id: 28
      },
      {
        SubCategoryName: 'Scarves',
        id: 29
      },
      {
        SubCategoryName: 'Purses',
        id: 30
      },
      {
        SubCategoryName: 'Braselets',
        id: 31
      },
      {
        SubCategoryName: 'Hats',
        id: 32
      },
      {
        SubCategoryName: 'Belts',
        id: 33
      },
      {
        SubCategoryName: 'Rings',
        id: 34
      },
      {
        SubCategoryName: 'Gloves',
        id: 35
      },
      {
        SubCategoryName: 'Ties',
        id: 36
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
        name: x.SubCategoryName,
        id: x.id,
        url: '?subcategory=' + x.SubCategoryName + '&'
      }
    })
  },
  {
    name: 'Accessories',
    id: 3,
    children: categories[2].accessorise.map((x, i) => {
      return {
        name: x.SubCategoryName,
        id: x.id,
        url: '?subcategory=' + x.SubCategoryName + '&'
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
