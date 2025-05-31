
import './styles/homePage.css'
const Home = () => {
  
  return (
    <>
      <div className="homePage">
        <div className="banner">
          <img src="./public/banner.png" alt="" />
        </div>
        <section className="page-1" >
          <div className="box1 bg-yellow-500 ">
            <h4 >Jodhani <br />Furniture</h4>
            <div className="info text-center">
              <div className="l ">
                <p>50000+ <span className="text-orange-600 font-bold" >Supply</span>  <br />Sold at our shop</p>
              </div>
              <div className="r">
                <p>20+ <span className="text-orange-600 font-bold" >Year</span>  <br />Experience</p>
              </div>
            </div>
          </div>
          <div className="box2 bg-yellow-500">
            <div className="ourInfo">
              <h3>Who We Are..</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, quaerat nesciunt minus, accusamus ratione dolore voluptas facilis voluptates officia ullam officiis magni nulla ipsum animi cupiditate veritatis. Eligendi, veritatis?</p>
            </div>
            <div className="img">
              <img src="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="page-2 " >
          <div className="icon ">
            <i className="left ri-arrow-left-s-fill"></i>
            <i className="right ri-arrow-right-s-fill"></i>
          </div>
          <div className="flex-product-show">
            <div className="product-show-box">1</div>
            <div className="product-show-box">2</div>
            <div className="product-show-box">3</div>
            <div className="product-show-box">4</div>
            <div className="product-show-box">5</div>
            <div className="product-show-box">6</div>
            <div className="product-show-box">7</div>
            <div className="product-show-box">8</div>
            <div className="product-show-box">9</div>
            <div className="product-show-box">10</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
