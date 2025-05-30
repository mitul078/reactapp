import React from 'react'
import './styles/cart.css'

import { useCart } from './CartContext'
const Cart = () => {
  const {data} = useCart();
  return (
    <div className='cartPage w-screen  h-screen'>
      <div className="container w-screen">
        {data.map((item, index) => (
          <div className="box bg-zinc-200" key={index}>
            <div className="image-box">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="product-detail">
              <h1>{item.name}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga incidunt molestiae aspernatur in quae mollitia nostrum obcaecati quo vitae, ipsa ipsam, commodi, sequi sint itaque cupiditate tempore. Nesciunt, ullam.</p>
              <p>Size : {item.size}</p>
              <button>Buy</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart