import React from 'react';
import useGetProducts from '@hooks/useGetProducts';
import Header from '@components/Header';
import '@styles/Header.scss';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const API ='https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProducts(API);
	return (	
		<section className="main-container">
			<div>
				<Header />
			</div>
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key={product.id}/>
				))}
			</div>
		</section>
	);
}

export default ProductList;