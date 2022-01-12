import React from 'react';
import { Route } from "react-router-dom";
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Footer from './components/Footer';
import Orders from './pages/Orders';
import Favorites from './pages/Favorites';
import AppContext from './context';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('')
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {

      try {
        const itemsResponse = await axios.get('https://6170981923781c0017289aa8.mockapi.io/items');
        const cartResponse = await axios.get('https://6170981923781c0017289aa8.mockapi.io/cart');
        const favoritesResponse = await axios.get('https://6170981923781c0017289aa8.mockapi.io/favorites');

        setIsLoading(false);

        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('error data')
      }

    }
    fetchData();
  }, []);



  const onAddToCart = async(obj) => {
    try {
      const findProduct = cartItems.find((item) => Number(item.id) === Number(obj.id));
      if (findProduct) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)))
        await axios.delete(`https://6170981923781c0017289aa8.mockapi.io/cart/${findProduct.id}`);
      }
      else {
        setCartItems(prev => [...prev, obj]);
        const { data } = await axios.post('https://6170981923781c0017289aa8.mockapi.io/cart', obj);
        setCartItems((prev) => prev.map(item => {
          if (item.parentId === data.parentId){
            return {
              ...item,
              id: data.id
            };
          }
          return item;
        }));
      }
    } catch (error) {
      alert('cart error!')
      console.error('error')
    }
  }

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://6170981923781c0017289aa8.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(id)));
    } catch (error) {
      alert('error delete')
    }
  }

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://6170981923781c0017289aa8.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      }
      else {
        const { data } = await axios.post('https://6170981923781c0017289aa8.mockapi.io/favorites', obj);
        setFavorites(prev => [...prev, data]);
      }
    } catch (error) {
      alert('error')
    }

  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite, setCartOpened, setCartItems }}>
      <div className="wrapper">

        {cartOpened && (<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />)}

        <Header onClickCart={() => setCartOpened(true)} />

        <Route path='/' exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToCart={onAddToCart}
            onAddToFavorite={onAddToFavorite}
            Footer={Footer}
            isLoading={isLoading}
          />
        </Route>

        <Route path='/orders' exact>
          <Orders />
        </Route>

        <Route path='/favorites' exact>
          <Favorites />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
