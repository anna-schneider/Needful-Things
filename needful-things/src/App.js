import { Component } from "react"
import { connect } from "react-redux"

import "./App.css"
import Header from "./components/Header/Header"
import Cart from "./components/Shopify/Cart"
import store from "./store"

// let client = ShopifyBuy.buildClient({
// 	domain: "2020s-Needful-Things.myshopify.com",
// 	storefrontAccessToken: "REACT_APP_SHOPIFY_KEY",
// })

class App extends Component() {
	constructor() {
		super()
		this.updateQuantityInCart = this.updateQuantityInCart.bind(this)
		this.removeLineItemInCart = this.removeLineItemInCart.bind(this)
		this.handleCartClose = this.handleCartClose.bind(this)
		this.handleCartOpen = this.handleCartOpen.bind(this)
	}
	render() {
		return (
			<div className="App">
				<Header />
				<div>
					...
					<Cart
						checkout={this.state.checkout}
						isCartOpen={this.state.isCartOpen}
						handleCartClose={this.handleCartClose}
						updateQuantityInCart={this.updateQuantityInCart}
						removeLineItemInCart={this.removeLineItemInCart}
					/>
				</div>
			</div>
		)
	}
}

export default App
