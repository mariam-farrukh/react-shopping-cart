import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext.js'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ShoppingCartContext from './contexts/ShoppingCartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<ShoppingCartContext.Provider value={{cart}}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
						// render={() => <ShoppingCart cart={cart} />} 
						/>
					/>
				</div>
			</ShoppingCartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
