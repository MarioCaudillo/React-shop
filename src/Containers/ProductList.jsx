import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import '../styles/Header.scss';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';

const API ='https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts]	=	useState([]);

	useEffect(async()=>{
		const response = await axios(API);
		setProducts(response.data);
	}, [])
	return (	
		<section className="main-container">
			<div>
				<Header />
			</div>
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem />
				))}
				<ProductItem />
			</div>
		</section>
	);
}

export default ProductList;