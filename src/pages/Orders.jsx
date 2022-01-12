import React from "react";
import Product from "../components/Product";
import Footer from "../components/Footer";

function Orders() {
  return (
    <div>
      <div className='product'>
        <div className='product__list'>
          <h3 className='product__list-title'>My Orders</h3>
        </div>
        <div className='product__tools'>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;