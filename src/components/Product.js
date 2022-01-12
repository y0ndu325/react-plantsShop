import React from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../context";

function Product({ id, onFavorite, imageUrl, title, price, onPlus, favorited = false, added = false, loading = false }) {
  const {isItemAdded} = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, imageUrl, title, price };

  const onClickPlus = () => {
    onPlus(obj);
  }

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  }


  return (
    <div className='product__item'>

      {
        loading ?
          <ContentLoader
            speed={4}
            width={217}
            height={282}
            viewBox="0 0 217 282"
            backgroundColor="#c2f4d8"
            foregroundColor="#156a43"
            
          >
            <rect x="0" y="0" rx="22" ry="22" width="190" height="217" />
            <rect x="0" y="230" rx="22" ry="22" width="110" height="48" />
            <rect x="143" y="231" rx="100" ry="100" width="48" height="48" />
          </ContentLoader> : <>
          <div className='product__item-favorite' onClick={onClickFavorite}>
                  <img src={isFavorite ? 'images/liked.svg' : 'images/unliked.svg'} width={25} height={25} alt='liked' />
                </div>
                <img className='product__item-img' src={imageUrl} width={196} />
                <div className='product__item-description'>
                  <div className='product__item-description--block'>
                    <h6 className='product__item-name'>{title}</h6>
                    <p className='product__item-price'>IDR {price}.000</p>
                  </div>
                  <button className='product__item-add' onClick={onClickPlus}>
                    <img src={isItemAdded(id) ? 'images/check.svg' : 'images/add.svg'} width={30} height={30} />
                  </button>
                </div>
          </>
                  }   

     
    </div>
  );
}

export default Product;