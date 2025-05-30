import { useNavigate } from 'react-router-dom';
import './styles/product.css'
const Product = () => {

  const productBox01 = [
    {
      id: '1',
      productImage: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyKHvGaieMm47-zoWOIDVD2tKdXq1i4erUg&s',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'],
      productName: 'Name1',
      productSize: '18*18'
    },
    {
      id: '2',
      productImage: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3dbqrrDghhZG81_sn24up_Al05TpR48SGw&s',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'],
      productName: 'Name2',
      productSize: '18*18'
    },
    {
      id: '3',
      productImage: ['https://i.pinimg.com/564x/6a/4e/6e/6a4e6e66c7551eaf366923f52b26b87d.jpg',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'],
      productName: 'Name3',
      productSize: '18*18'
    },
    {
      id: '4',
      productImage: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eKg9nm5uVR-JXPyam3YqtGI_E8f3Bhb4hA&s',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'
      ],
      productName: 'Name4',
      productSize: '18*18'
    },
  ];
  const productBox02 = [
    {
      id: '1',
      productImage: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnyKHvGaieMm47-zoWOIDVD2tKdXq1i4erUg&s',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'],
      productName: 'Name1',
      productSize: '18*18'
    },
    {
      id: '2',
      productImage: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX3dbqrrDghhZG81_sn24up_Al05TpR48SGw&s',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'],
      productName: 'Name2',
      productSize: '18*10'
    },
    {
      id: '3',
      productImage: ['https://i.pinimg.com/564x/6a/4e/6e/6a4e6e66c7551eaf366923f52b26b87d.jpg',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'],
      productName: 'Name3',
      productSize: '18*18'
    },
    {
      id: '4',
      productImage: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3eKg9nm5uVR-JXPyam3YqtGI_E8f3Bhb4hA&s',
        'https://images.unsplash.com/photo-1605752019115-200d120c9b98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://plus.unsplash.com/premium_photo-1674929042069-4999154c68b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D', 'https://images.unsplash.com/photo-1700737503382-0877e9b441f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D'
      ],
      productName: 'Name4',
      productSize: '18*18'
    },
  ];



  const navigate = useNavigate();
  const handler = (productName, productImage, productSize) => {
    navigate(`/Product/Detail/${productName}`, {
      state: { productName, productImage, productSize }
    })
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
              {productBox01.map((box, i) => (
                <div className="box" key={i}>
                  <img src={box.productImage} alt="" />
                  <div className="des">
                    <div className="l">
                      <p>{box.productName}</p>
                      <p>{box.productSize}</p>
                    </div>
                    <button onClick={() => handler(box.productName, box.productImage, box.productSize)}>See</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mobile-product-box">
              <div className="box">
                <img src={productBox01[0].productImage} alt="" />
                <div className="des">
                  <div className="l">
                    <p>{productBox01[0].productName}</p>
                    <p>{productBox01[0].productSize}</p>
                  </div>
                  <button onClick={() => handler(productBox01[0].productName, productBox01[0].productImage, productBox01[0].productSize)}>See</button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-box">
            <div className="grid-detail">
              {productBox02.map((box, i) => (
                <div className="box" key={i}>
                  <img src={box.productImage} alt="" />
                  <div className="des">
                    <div className="l">
                      <p>{box.productName}</p>
                      <p>{box.productSize}</p>
                    </div>
                    <button onClick={() => handler(box.productName, box.productImage, box.productSize)}>See</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mobile-product-box">
              <div className="box">
                <img src={productBox02[0].productImage} alt="" />
                <div className="des">
                  <div className="l">
                    <p>{productBox02[0].productName}</p>
                    <p>{productBox02[0].productSize}</p>
                  </div>
                  <button onClick={() => handler(productBox02[0].productName, productBox02[0].productImage, productBox02[0].productSize)}>See</button>
                </div>
              </div>
            </div>
          </div>
          <div className="product-box"></div>
          <div className="product-box"></div>
          <div className="product-box"></div>
        </div>
      </section>
    </div>
  )
}

export default Product
