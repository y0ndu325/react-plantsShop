function Drawer() {
    return (
        <div style={{ display: "none" }} className='overlay'>
            <div className='drawer'>
                <h3 className='drawer__title'>
                    Basket
                    <img className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
                </h3>
                <div className="drawer__items">
                    <div className='drawer__item'>
                        <img width={70} height={70} src='images/1.png' alt='plants' />
                        <div className='item__content'>
                            <p className='item__content-text'>Kaktus Plants</p>
                            <b className='item__content-price'>IDR 85.000</b>
                        </div>
                        <img className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
                    </div>
                    <div className='drawer__item'>
                        <img width={70} height={70} src='images/1.png' alt='plants' />
                        <div className='item__content'>
                            <p className='item__content-text'>Kaktus Plants</p>
                            <b className='item__content-price'>IDR 85.000</b>
                        </div>
                        <img className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
                    </div>
                </div>

                <div className="drawer__list">
                    <ul>
                        <li className='drawer__list-item'>
                            <span className='drawer__list-item--total'>Total:</span>
                            <div className='drawer__list-item--dashed'></div>
                            <b>IDR 85.000</b>
                        </li>
                    </ul>
                    <button className='drawer__list-item--buy'>Buy</button>
                </div>

            </div>
        </div>
    )
}

export default Drawer;