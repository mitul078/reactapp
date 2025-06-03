import { useNavigate } from 'react-router-dom';
import { ProductContext } from './ProductContext'
import './styles/product.css'
import { useContext } from 'react';
const Product = () => {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  const firstBox = products.slice(0, 4)
  const secondBox = products.slice(4, 8)

  const handler = (name, product) => {
    navigate(`/Product/Detail/${name}`, { state: { product } })
  }
  
  return (
    <div className="productPage">
      <div className="container">
        <div className="box">
          <img id='image-1' src="https://plus.unsplash.com/premium_photo-1669867124806-f84dd1a9e87c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" alt="" />
          <img id='image-2' src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" alt="" />
          <img id='image-3' src="https://images.unsplash.com/photo-1611657291636-c141ee8cf7ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmF0dXJlJTIwbGFuZHNjYXBlfGVufDB8fDB8fHww" alt="" />
        </div>
      </div>
      <section className='page-1'>
        <div className="grid-container">
          <div className="product-box">
            <div className="grid-detail">
              {firstBox.map((box, i) => (
                <div className="box" key={i}>
                  <img src={box.productImages[0]} alt="" />
                  <div className="des">
                    <div className="l">
                      <p>{box.productName}</p>
                      <p>{box.productSize}</p>
                    </div>
                    <button onClick={() => handler(box.productName, box)}>See</button>
                  </div>
                </div>
              ))}
            </div>
            {firstBox[0] && (
              <div className="mobile-product-box">
                <div className="box">
                  <img src={firstBox[0].productImages[0]} alt="" />
                  <div className="des">
                    <div className="l">
                      <p>{firstBox[0].productName}</p>
                      <p>{firstBox[0].productSize}</p>
                    </div>
                    <button onClick={() => handler(firstBox[0].productName, firstBox[0])}>See</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="product-box">
            <div className="grid-detail">
              {secondBox.map((box, i) => (
                <div className="box" key={i}>
                  <img src={box.productImages[0]} alt="" />
                  <div className="des">
                    <div className="l">
                      <p>{box.productName}</p>
                      <p>{box.productSize}</p>
                    </div>
                    <button onClick={() => handler(box.productName, box)}>See</button>
                  </div>
                </div>
              ))}
            </div>
              {secondBox[0] && (
              <div className="mobile-product-box">
                <div className="box">
                  <img src={secondBox[0].productImages[0]} alt="" />
                  <div className="des">
                    <div className="l">
                      <p>{secondBox[0].productName}</p>
                      <p>{secondBox[0].productSize}</p>
                    </div>
                    <button onClick={() => handler(secondBox[0].productName, secondBox[0])}>See</button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="product-box"></div>
          <div className="product-box"></div>
          <div className="product-box"></div>
        </div>
      </section >
    </div >
  )
}

export default Product