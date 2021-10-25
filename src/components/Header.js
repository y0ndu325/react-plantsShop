import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img width={36} height={36} src='images/logo.svg' alt='logo'/>
        </Link>
      </div>
      <ul className='header__content'>
        <li className='header__content-link' onClick={props.onClickCart}>
          <img src='images/cart.svg' alt='cart' />
          <span className='header__content-price'>85 <b>IDR</b></span>
        </li>
        <li className='header__content-link'>
          <Link to='/favorites'>
            <img width={25} height={20} src='images/favorite.svg' alt='favorites' />
          </Link>
        </li>
        <li className='header__content-link'>
          <img width={20} height={20} src='images/user.svg' alt='user' />
        </li>
      </ul>
    </header>
  );
}

export default Header;