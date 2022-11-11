import React from 'react';
import Header from '../components/Header';
import '../styles/Header.scss';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const ProductList = () => {
	return (	
		<section className="main-container">
			<div>
				<Header />
			</div>
			<div className="ProductList">
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;