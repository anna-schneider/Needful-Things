import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// import store from "./store"

import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

//Building Shopify client
const client = Client.buildClient({
	storefrontAccessToken: "REACT_APP_SHOPIFY_KEY",
	domain: "2020s-needful-things.myshopify.com",
})
store.dispatch({ type: "CLIENT_CREATED", payload: client })

//Called after synchronous buildClient
client.product.fetchAll().then((res) => {
	store.dispatch({ type: "PRODUCTS_FOUND", payload: res })
})
client.checkout.create().then((res) => {
	store.dispatch({ type: "CHECKOUT_FOUND", payload: res })
})
client.shop.fetchInfo().then((res) => {
	store.dispatch({ type: "SHOP_FOUND", payload: res })
})

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
		,
	</Provider>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
