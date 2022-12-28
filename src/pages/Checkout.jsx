import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Checkout.scss';
import AppContext from '@context/AppContext';

const Checkout = () => {
	const { state } = useContext(AppContext);
	const sumTotal = ()=>{ //suma el total de los precios de los productos
		const reducer = (accumalator, currentvalue) => accumalator + currentvalue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	  }
	return (
		<div className="Checkout">
			<div className="Checkout-container">
				<h1 className="title">My order</h1>
				<div className="Checkout-content">
					<div className="order">
						<p>
							<span>03.25.21</span>
							<span>6 articles</span>
						</p>
						<p>$560.00</p>
					</div>
				</div>
				{state.cart.map((product, index) => (
					<OrderItem indexValue={index} 
					key={index}
					product={product} />
				))}
				
			</div>
		</div>
	);
}

export default Checkout;