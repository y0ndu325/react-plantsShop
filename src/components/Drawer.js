function Drawer({onClose, items = []}) {
    return (
        <div className='overlay'>
            <div className='drawer'>
                <h3 className='drawer__title'>
                    Basket
                    <img onClick={onClose} className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
                </h3>
                <div className="drawer__items">
                    {items.map((obj) => (
                        <div className='drawer__item'>
                            <img width={70} height={70} src={obj.imageUrl} alt='plants' />
                            <div className='item__content'>
                                <p className='item__content-text'>{obj.title}</p>
                                <b className='item__content-price'>{obj.price}.00 IDR</b>
                            </div>
                            <img className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
                        </div>
                    ))}
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