import React from 'react'
import { Switch, Route } from 'react-router-dom'
import '@material-ui/core/styles'
import MainCategories from './component/Menu'
import Product from './component/Product'
import CartDialog from './component/ShoppingCart/Cart'
import Default from './component/Default'
import SignIn from './component/SignIn/SignIn'
import Footer from './component/Footer/Footer'
import SignUp from './component/SignIn/SignUp'
import Checkout from './component/Checkout/Checkout'
import Home from './component//HomeContent/Home'
import Header from './component/Header/Header'
import Details from './component/ProductDetails/Details'
import FaveItems from './component/Favourites/SavedItems'
import './App.css'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='app'>
          <Header />
          <MainCategories />
          <div className='app-body'>
            {/* <CategoryFilter/> */}
            <div className='content'>
              <CartDialog />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/product-list' component={Product} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/checkout' component={Checkout} />
                <Route path='/details/:id' component={Details} />
                <Route path='/saved-items' component={FaveItems} />
                <Route component={Default} />
              </Switch>
            </div>
          </div>

          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default App
