import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from './CartContext'
import { toast } from 'react-toastify'
import './styles/productDetail.css'

const ProductDetail = () => {
    const { addToCart } = useCart();
    const [isAdd, setisAdd] = useState(false);
    const location = useLocation();
    const { productName, productSize, productImage = [] , productPrice } = location.state || {};
    const [image, setimage] = useState(productImage[0])
    const AddCartItem = () => {
        const newItem = {
            name: productName,
            size: productSize,  
            image: productImage[0],
            price: productPrice
        }
        addToCart(newItem);
        setisAdd(true)
        toast.success("Item added to cart!", {
            position: "top-right",
            autoClose: 1000,
        });
    }

    return (
        <div className='productDetailPage'>
            <div className="container">
                <div className="left-side">
                    <div className="product-image-section">
                        <div className="image-box">
                            {productImage.map((image, i) => (
                                <div key={i} className="box" onClick={() => setimage(image)}>
                                    <img src={image} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="left">
                        <div className="image">
                            <img src={image} alt="" />
                            <div className="mobile-view">
                                <h1>{productName}</h1>
                                <p>{productSize}</p>
                                <div className="btn">
                                    <button
                                        onClick={AddCartItem}
                                        className='cart'
                                        disabled={isAdd}>
                                        {isAdd ? "Added" : "Add to Cart"}
                                    </button>

                                    <button className='buy'>Buy ₹{productPrice}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <h1>{productName}</h1>
                    <p>Product Details.. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus inventore laboriosam cum facilis quam earum nisi. Minima et doloribus ullam repellendus dolor quas, commodi illo, quibusdam ab ipsum voluptatum recusandae?
                        lor
                    </p>
                    <h4>Size: {productSize}</h4>
                    <div className="btn">
                        <button
                            onClick={AddCartItem}
                            className='cart'
                            disabled={isAdd}>
                            {isAdd ? "Added" : "Add to Cart"}
                        </button>

                        <button>Buy ₹{productPrice}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
