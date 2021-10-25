import React from "react";


function Product({id, onFavorite, imageUrl, title, price, onPlus, favorited}){
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({imageUrl, title, price});
    setIsAdded(!isAdded);
  }

  const onClickFavorite = () => {
    onFavorite({id, imageUrl, title, price});
    setIsFavorite(!isFavorite);
  }

  
    return(
        <div className='product__item'>
            <div className='product__item-favorite' onClick= {onClickFavorite}>
            <img src={isFavorite ? 'images/liked.svg' : 'images/unliked.svg'} width={25} height={25} alt='liked'/>
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