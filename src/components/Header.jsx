import React, {useState} from "react";
import '@styles/Header.scss';

import Menu from '@components/Menu';

import menu from  '@icons/icon_menu.svg';
import  logo from  '@logos/logo_yard_sale.svg';
import  shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle); //el signo de admiración cambia el estado de toggle al inverso, como si fuer NOT
  }
  return (
    <nav>
      <img src={menu} alt="menu" class="menu" />

      <div className="navbar-left">
        <img src={logo} alt="logo" class="nav-logo" />

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
          <li className="navbar-email" onClick = {handleToggle}>platzi@example.com</li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null} 
      <Menu />
    </nav>
  );
};

export default Header; //se usa ? : como if para ver si el estado de Menu es false no se muestra, pero si sí
// se muestra menu
