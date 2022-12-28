import React, {useContext} from 'react';
import OrderItem from '@components/OrderItem';
import '@styles/Orders.scss';
import AppContext from '@context/AppContext';

const Orders = () => {
	const {state} = useContext(AppContext);
	
	return (
		<div className="Orders">
			<div className="Orders-container">
				<h1 className="title">My orders</h1>
				<div className="Orders-content">
				<OrderItem />
				</div>
			</div>
		</div>
	);
}

export default Orders;