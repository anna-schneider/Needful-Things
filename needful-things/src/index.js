import React from "react"
import ReactDOM from "react-dom"
import Client from "shopify-buy"

import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"

const client = Client.buildClient({
	storefrontAccessToken: "REACT_APP_SHOPIFY_KEY",
	domain: "2020s-needful-things.myshopify.com",
})

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
