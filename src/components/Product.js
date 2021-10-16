function Product(){
    return(
        <div className='product__item'>
            <div className='product__item-favorite'>
              <img src='images/unliked.svg' width={25} height={25} alt='unliked' />
            </div>
            <img className='product__item-img' src='images/1.png' width={196} />
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
    );
}

export default Product;