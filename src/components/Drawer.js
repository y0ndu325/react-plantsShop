import React from "react"
import axios from "axios";
import Info from "./Info";
import AppContext from "../context";

const delay = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post('https://6170981923781c0017289aa8.mockapi.io/orders', {
                items: cartItems,
            });
            
            setOrderId(data.id)
            setIsOrderCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete('https://6170981923781c0017289aa8.mockapi.io/orders/' + item.id)
                await delay(1000);
            }
            
        } catch (error) {
            alert('failed to place an order');
        }
        setIsLoading(false);
    };

    return (
        <div className='overlay'>
            <div className='drawer'>
                <h3 className='drawer__title'>
                    Basket
                    <img onClick={onClose} className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
                </h3>
                {items.length > 0 ? (
                    <>
                        <div className="drawer__items">
                            {items.map((obj) => (
                                <div key={obj.id} className='drawer__item'>
                                    <img width={70} height={70} src={obj.imageUrl} alt='plants' />
                                    <div className='item__content'>
                                        <p className='item__content-text'>{obj.title}</p>
                                        <b className='item__content-price'>{obj.price}.00 IDR</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className='drawer__item-close' src='images/close.svg' width={30} height={30} alt='close' />
                                </div>
                            ))}
                        </div>

                        <div className="drawer__list">
                            <ul>
                                <li className='drawer__list-item'>
                                    <span className='drawer__list-item--total'>Total:</span>
                                    <div className='drawer__list-item--dashed'></div>
                                    <b>IDR {totalPrice}</b>
                                </li>
                            </ul>
                            <button disabled={isLoading} onClick={onClickOrder} className='drawer__list-item--buy'>Buy</button>
                        </div>
                    </>
                ) : (
                    <Info
                        title={isOrderCompleted ? "Order complete" : "Сart is empty"}
                        image={isOrderCompleted ? "images/car.svg" : "images/shopping-cart.png"}
                        description={isOrderCompleted ? `Your order #${orderId} is sent to courier delivery` : "Buy something"}
                    />
                )}

            </div>

        </div>
    )
}

export default Drawer;