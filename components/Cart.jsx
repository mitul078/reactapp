import './styles/cart.css'


import { useCart } from './CartContext'
const Cart = () => {
  const {data , removeFromCart} = useCart();
  return (
    <div className='cartPage w-screen  h-screen'>
      <div className="container w-screen">
        {data.map((item, index) => (
          <div className="box bg-zinc-200" key={index}>
            <div className="image-box">
              <img src={item.productImages[0]} alt={item.name} />
            </div>
            <div className="product-detail">
              <h1>{item.productName}</h1>
              <p className='des'>Product Details : {item.productDescription}</p>
              <p>Size : {item.productSize}</p>
              <div className="btn flex gap-2">
              <button>Buy ₹{item.productPrice}</button>
              <button onClick={()=> removeFromCart(index)} >Remove From Cart</button>
              

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart