import React from 'react'
import AppContext from '../context';

export const Info = ( {title, image, description} ) => {
    const {setCartOpened} = React.useContext(AppContext)

    return (
        <div className='drawer'>
            <h3 className='drawer__title'>
                Basket
                <img onClick={() => setCartOpened(false)} className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
            </h3>
            <div className="drawer__items--empty">
                <center>
                   <h1>{title}</h1>
                   <img width='212' src={image} alt="shop-cart" />
                   <p>{description}</p>
                </center>
                <button onClick={() => setCartOpened(false)} className='drawer__list-item--buy'>Back</button>
            </div>
        </div>
    )
}

export default Info;