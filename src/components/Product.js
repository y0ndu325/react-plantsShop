import React from "react";

function Product({onFavorite, imageUrl, title, price, onPlus}){
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  
    return(
        <div className='product__item'>
            <div className='product__item-favorite' onClick= {onFavorite}>
              <img src='images/unliked.svg' width={25} height={25} alt='unliked' />
            </div>
            <img className='product__item-img' src={imageUrl} width={196} />
            <div className='product__item-description'>
              <div className='product__item-description--block'>
                <h6 className='product__item-name'>{title}</h6>
                <p className='product__item-price'>IDR {price}.000</p>
              </div>
              <button className='product__item-add' onClick= {onClickPlus}>
                <img src={isAdded ? 'images/check.svg' : 'images/add.svg'} width={30} height={30} />
              </button>
            </div>
          </div>
    );
}

export default Product;