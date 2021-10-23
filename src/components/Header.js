function Header(props){
    return(
        <header className='header'>
        <div className='header__logo'>
          <img width={36} height={36} src='images/logo.svg' />
        </div>
        <ul className='header__content'>
          <li className='header__content-link' onClick={props.onClickCart}>
            <img src='images/cart.svg' />
            <span className='header__content-price'>85 <b>IDR</b></span>
          </li>
          <li className='header__content-link'>
            <img width={20} height={20} src='images/user.svg' />
          </li>
        </ul>
      </header>
    );
}

export default Header;