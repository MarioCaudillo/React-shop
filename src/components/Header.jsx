import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder'
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';


const Header = () => {
	const [toggle, setToggle] = useState(false);
  	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggle = () => {
		setToggle(!toggle); //el signo de admiración sirve para negar, como si fuera NOT
	}
  const handleToggleOrders = ()=>{
    setToggleOrders(!toggleOrders); //por lo tanto el toggle estará oculto al inicio ya que está negado
  }

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick= {handleToggleOrders}>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
      {toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;//se usa ? : como if para ver si el estado de Menu es false no se muestra, pero si sí
// se muestra menu
//adicionalmente se utiliza el operador ternario para la funcion del carrito que muestra el número de elementos en él
//de forma dinámica, con el atributo length se sabe cuántos elementos hay en cart, asi se muestra de forma dinámica
