import React, { useContext, useState } from 'react';
import OrderItem from '@components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';


const MyOrder = () => {
	const { state } = useContext(AppContext);
	const [toggleMyOrder, setToggleMyOrder] = useState(false)
	const handleHide = ()=>{
		setToggleMyOrder(!toggleMyOrder);
	}

 	const sumTotal = ()=>{ //suma el total de los precios de los productos
    const reducer = (accumalator, currentvalue) => accumalator + currentvalue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  }
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" onClick={handleHide} />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (
					<OrderItem indexValue={index} 
					key={index}
					product={product} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;