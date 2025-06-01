
import './styles/homePage.css'
import { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {
  const scrollRef = useRef(null);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const productScrollRef = useRef(null);
  const images = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1665657351119-b7283189656c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
      info: 'First Image'
    },
    {
      img: 'https://images.unsplash.com/photo-1747171232839-a5fea879ca59?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8',
      info: 'Second Image'
    },
    {
      img: 'https://images.unsplash.com/photo-1748723594345-a32f480a3db7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
      info: 'Third Image'
    },
    {
      img: 'https://images.unsplash.com/photo-1747723025339-c4930256a8da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D',
      info: 'Forth Image'
    },

  ]
  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      if (!scrollRef.current) return;
      const container = scrollRef.current;
      const childWidth = container.offsetWidth;
      const totalImages = images.length;

      indexRef.current = (indexRef.current + 1) % totalImages;
      container.scrollTo({
        left: indexRef.current * childWidth,
        behavior: 'smooth',
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoScroll();
  };


  const scroll = (direction) => {
    const container = productScrollRef.current;
    const scrollAmount = 1000;
    if (container) {
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      }
      else {
        container.scrollLeft += scrollAmount;
      }
    }

  }
  return (
    <>
      <div className="homePage">
        <div className="banner">
          <img src="/banner.png" alt="" />
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
          <div className="icon">
            <i onClick={() => scroll('left')} className="left ri-arrow-left-s-fill"></i>
            <i onClick={() => scroll('right')} className="right ri-arrow-right-s-fill"></i>
          </div>
          <div className="flex-product-show" ref={productScrollRef}>
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
        <section className='page-3' >
          <div className="container">
            <div className="images" ref={scrollRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onTouchStart={handleMouseEnter}
              onTouchEnd={handleMouseLeave}>
              {images.map((image, i) => (
                <div key={i} className="image">
                  <img src={image.img} alt="" />
                  <div className="info">
                    <p>{image.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
