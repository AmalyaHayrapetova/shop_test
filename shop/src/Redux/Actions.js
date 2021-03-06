import * as CONSTANTS from './Constants'

export const addItemInCart = item => ({
  type: CONSTANTS.ADD_ITEM_IN_CART,
  payload: item
})
export const showCartDlg = status => ({
  type: CONSTANTS.SHOW_CART_DLG,
  payload: status
})
export const deleteCartItem = id => ({
  type: CONSTANTS.DELETE_CART_ITEM,
  payload: id
})
export const toggleMenu = () => ({
  type: CONSTANTS.TOGGLE_MENU,
  payload: null
})
export const updateCartItemQnt = obj => ({
  type: CONSTANTS.UPDATE_CART_ITEM_QUANTITY,
  payload: obj
})
export const setCheckedOutItems = items => ({
  type: CONSTANTS.SET_CHECKEDOUT_ITEMS,
  payload: items
})
export const setLoggedInUser = user => ({
  type: CONSTANTS.SET_LOGGED_IN_USER,
  payload: user
})
export const logout = () => ({
  type: CONSTANTS.LOGOUT
})

export const setAddressInfo = address => ({
  type: CONSTANTS.SET_ADDRESS_INFO,
  payload: address
})

export const showCategory = () => ({
  type: CONSTANTS.SHOW_CATEGORY
})

export const addItemInFavourite = item => ({
  type: CONSTANTS.ADD_ITEM_TO_FAVOURITE,
  payload: item
})

export const showSavedItems = status => ({
  type: CONSTANTS.SHOW_SAVED_ITEMS,
  payload: status
})
export const deleteSavedItems = id => ({
  type: CONSTANTS.DELETE_SAVED_ITEMS,
  payload: id
})

export const removeCheckoutItems = items => ({
  type: CONSTANTS.REMOVE_CHECKOUT_ITEMS_FROM_CART,
  payload: items

});
export const setOrder = order => ({
  type: CONSTANTS.SET_ORDER,
  payload: order
})
