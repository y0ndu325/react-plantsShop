import Product from "../components/Product";
import Footer from "../components/Footer";

function Home(
    {
        items,
        searchValue,
        setSearchValue,
        onChangeSearchInput,
        onAddToCart,
        onAddToFavorite,
        Footer
    })
    {
    return (
        <div>
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
            <img src='images/search.svg' alt='search' />
            {searchValue && 
            (<img 
              onClick={() => setSearchValue('')} 
              className='product__list-search--clear' 
              src='images/close.svg' width={15} height={15} 
              alt='clear' />)}
            <input onChange={onChangeSearchInput} value={searchValue} className='product__list-search--placeholder' placeholder='Search...'></input>
          </div>
        </div>
        <div className='product__tools'>

          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index)=>(
            <Product 
            key={index}
            id={item.id}
            title={item.title} 
            price={item.price} 
            imageUrl={item.imageUrl}
            onFavorite={(obj) =>  onAddToFavorite(obj)}
            onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
          
          
        </div>
      </div>

      <div className="services">
        <div className="services__content">
          <h3 className="services__content-title">Buy more plants, it helps you to be relaxed
          </h3>
          <p className="services__content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et mauris justo. Nulla eu enim non mauris maximus dignissim. Maecenas vitae eros sapien. Quisque pellentesque tempus dignissim.
          </p>
          <div className="services__content-img">
            <img src="images/services-content.png" alt="services" />
          </div>
        </div>
        <div className="services__image">
          <img src="images/services-image.png" alt="services" />
        </div>
      </div>

      <div className="favourites">
        <div className="favourites__content">
          <h1 className="favourites__content-title">
            Get your favourites plant on our shop now
          </h1>
          <a className="favourites__content-btn" href="#">
            Visit Shop
          </a>
        </div>
        <div className="favourites__image">
          <img src="images/favourites.png" alt="favourites" />
        </div>
      </div>

      <Footer />

    </div>
        
    );
}

export default Home;