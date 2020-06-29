import * as CONSTANTS from './Constants'

// If multiple components need access to some data, in that case we store such data in redux.
const initialState = {
  cartItems: [],
  showCartDialog: false,
  showMenu: true,
  checkedOutItems: [],
  loggedInUser: {},
  favouriteItems: [],
  showSavedItems: false,
  addressInfo: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_ITEM_IN_CART: {
      var index = state.cartItems.findIndex(x => x.id === action.payload.id)
      // Is the item user wants to add already in the cart?
      if (
        index !== -1 &&
        state.cartItems[index].size === state.size &&
        state.cartItems[index].quantity !== state.quantity
      ) {
        // Yes, update the quantity.
        let cloneCartItems = [...state.cartItems]
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: state.cartItems[index].quantity + action.payload.quantity
        }

        return { ...state, cartItems: cloneCartItems }
      }

      // No, add a new item.
      return { ...state, cartItems: state.cartItems.concat(action.payload) }
    }
    case CONSTANTS.ADD_ITEM_TO_FAVOURITE: {
      var item = state.favouriteItems.findIndex(x => x.id === action.payload.id)
      if (item !== -1) {
        let cloneFaveItems = [...state.favouriteItems]
        cloneFaveItems[item] = {
          ...cloneFaveItems[index]
        }
        return { ...state, favouriteItems: cloneFaveItems }
      }
      return {
        ...state,
        favouriteItems: state.favouriteItems.concat(action.payload)
      }
    }
    case CONSTANTS.SHOW_SAVED_ITEMS: {
      return { ...state, showSavedItems: action.payload }
    }

    case CONSTANTS.DELETE_SAVED_ITEMS: {
      return {
        ...state,
        favouriteItems: state.favouriteItems.filter(
          x => x.id !== action.payload
        )
      }
    }
    case CONSTANTS.SHOW_CART_DLG:
      return { ...state, showCartDialog: action.payload }
    case CONSTANTS.DELETE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.id !== action.payload)
      }
    case CONSTANTS.REMOVE_CHECKOUT_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: []
      }
    
    case CONSTANTS.TOGGLE_MENU:
      return { ...state, showMenu: !state.showMenu }
    case CONSTANTS.SET_LOGGED_IN_USER:
      return { ...state, loggedInUser: action.payload.id }
    case CONSTANTS.LOGOUT:
      return { ...state, loggedInUser:null, checkedOutItems: [] }
    case CONSTANTS.SET_CHECKEDOUT_ITEMS:
      return { ...state, checkedOutItems: state.cartItems }
    case CONSTANTS.UPDATE_CART_ITEM_QUANTITY: {
      let index = state.cartItems.findIndex(x => x.id === action.payload.id)

      // User wants to update quantity of existing item.
      if (index !== -1) {
        let cloneCartItems = [...state.cartItems]
        cloneCartItems[index] = {
          ...cloneCartItems[index],
          quantity: action.payload.quantity
        }

        return { ...state, cartItems: cloneCartItems }
      }

      // If we couldn't find such item, do nothing.
      return state
    }
    case CONSTANTS.SET_ADDRESS_INFO: {
      return { ...state, addressInfo: action.payload }
    }
    default:
      return state
  }
}

export default rootReducer
