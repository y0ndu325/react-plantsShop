import React from "react";
import Product from "../components/Product";
import Footer from "../components/Footer";
import AppContext from "../context";

function Favorites() {
  const { favorites,  onAddToFavorite } = React.useContext(AppContext);
  

  return (
    <div>
      <div className='product'>
        <div className='product__list'>
          <h3 className='product__list-title'>Favorites</h3>
        </div>
        <div className='product__tools'>
          {favorites.map((item, index) => (
            <Product
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              favorited={true}
              onFavorite={onAddToFavorite}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default Favorites;