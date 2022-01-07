import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import './styles/bootstrap.min.css'


// JavaScrip and JQuery File is required.
// import './scripts/bootstrap.bundle.min.js'
// import './scripts/jquery-3.3.1.min.js'


import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.render(
    <ProductsProvider>
        <App />
    </ProductsProvider>,
    document.getElementById('root'))
