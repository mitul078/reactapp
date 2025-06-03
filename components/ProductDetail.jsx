import { useContext, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import './styles/productDetail.css'
import { ProductContext } from './ProductContext'
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
const ProductDetail = () => {

    const [isAdd, setisAdd] = useState(false);
    const { addToCart} = useCart();

    const location = useLocation()
    const { product } = location.state || {};
    if (!product) return <p>No product data found</p>;
    const { productName, productSize, productPrice, productDescription } = product;
    const [selectedImage, setSelectedImage] = useState(product.productImages[0]);

    const handleSubmit = () =>{
        addToCart(product)
        setisAdd(true)
    }
    return (
        <div className='productDetailPage'>
            <div className="container">
                <div className="left-side">
                    <div className="product-image-section">
                        <div className="image-box">
                            {product.productImages.map((image, i) => (
                                <div key={i} className="box" onClick={() => setSelectedImage(image)}>
                                    <img  src={image} alt={`Product ${i}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="left">
                        <div className="image">
                            <img src={selectedImage} alt="" />
                            <div className="mobile-view">
                                <h1>{product.productname}</h1>
                                <p>{productSize}</p>
                                <div className="btn">
                                    <button className='cart'
                                    onClick={handleSubmit}
                                    disabled={isAdd}
                                    >{isAdd ? "Added" : "Add to cart"}</button>
                                    <ToastContainer position="top-right" autoClose={2000} />
                                    <button className='buy'>Buy ₹{productPrice}</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <h1>{productName}</h1>
                    <p>Product Details..{productDescription}
                    </p>
                    <h4>Size: {productSize}</h4>
                    <div className="btn">
                        <button
                            className='cart'
                            onClick={handleSubmit}
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
