


function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className='header__logo'>
          <img width={36} height={36} src='images/logo.svg' />
        </div>
        <ul className='header__content'>
          <li className='header__content-link'>
            <img src='images/cart.svg' />
            <span className='header__content-price'>85 <b>IDR</b></span>
          </li>
          <li className='header__content-link'>
            <img width={20} height={20} src='images/user.svg' />
          </li>
        </ul>
      </header>



      <div className='benefits'>
        <div className='card'>
          <div className='card__container'>
            <div className='card__content'>
              <img src='images/car.svg' />
              <h3 className='card__title'>
                Fast <br />
                Delivery
              </h3>
            </div>
            <h6 className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </h6>
          </div>
        </div>
        <div className='card'>
          <div className='card__container'>
            <div className='card__content'>
              <img src='images/headphones.svg' />
              <h3 className='card__title'>
                Great Customer <br /> Service
              </h3>
            </div>
            <h6 className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </h6>
          </div>
        </div>
        <div className='card'>
          <div className='card__container'>
            <div className='card__content'>
              <img src='images/plant.svg' />
              <h3 className='card__title'>
                Original <br /> Plants
              </h3>
            </div>
            <h6 className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </h6>
          </div>
        </div>
        <div className='card'>
          <div className='card__container'>
            <div className='card__content'>
              <img src='images/dollar.svg' />
              <h3 className='card__title'>
                Affordable <br /> Price
              </h3>
            </div>
            <h6 className='card__text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </h6>
          </div>
        </div>
      </div>

      <div className='product'>
        <div className='product__list'>
          <h3 className='product__list-title'>Featured Plants</h3>
          <div className='product__list-search'>
            <img src='images/search.svg' alt='search'/>
            <input className='product__list-search--placeholder' placeholder='Search...'></input>
          </div>
        </div>
        <div className='product__tools'>
          <div className='product__item'>
            <div className='product__item-favorite'>
            <img src='images/unliked.svg' width={25} height={25} alt='unliked'/>
            </div>
            <img className='product__item-img' src='images/1.png' width={196}/>
            <div className='product__item-description'>
              <div >
                <h6 className='product__item-name'>Kaktus Plants</h6>
                <p className='product__item-price'>IDR 85.000</p>
              </div>

              <button className='product__item-add'>
                <img src='images/add.svg' width={30} height={30} />
              </button>

            </div>
          </div>
          <div className='product__item'>
            <div className='product__item-favorite'>
            <img src='images/unliked.svg' width={25} height={25} alt='unliked'/>
            </div>
            <img className='product__item-img' src='images/1.png' width={196}/>
            <div className='product__item-description'>
              <div >
                <h6 className='product__item-name'>Kaktus Plants</h6>
                <p className='product__item-price'>IDR 85.000</p>
              </div>

              <button className='product__item-add'>
                <img src='images/add.svg' width={30} height={30} />
              </button>

            </div>
          </div>
          <div className='product__item'>
            <div className='product__item-favorite'>
            <img src='images/liked.svg' width={25} height={25} alt='unliked'/>
            </div>
            <img className='product__item-img' src='images/1.png' width={196}/>
            <div className='product__item-description'>
              <div >
                <h6 className='product__item-name'>Kaktus Plants</h6>
                <p className='product__item-price'>IDR 85.000</p>
              </div>

              <button className='product__item-add'>
                <img src='images/check.svg' width={30} height={30} />
              </button>

            </div>
          </div>
          <div className='product__item'>
            <div className='product__item-favorite'>
            <img src='images/unliked.svg' width={25} height={25} alt='unliked'/>
            </div>
            <img className='product__item-img' src='images/1.png' width={196}/>
            <div className='product__item-description'>
              <div >
                <h6 className='product__item-name'>Kaktus Plants</h6>
                <p className='product__item-price'>IDR 85.000</p>
              </div>

              <button className='product__item-add'>
                <img src='images/add.svg' width={30} height={30} />
              </button>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
