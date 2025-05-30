

const Home = () => {
  return (
    <>
      <div className="homePage">
        <div className="banner">
          <img src="../public/banner.png" alt="" />
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
        <section className="page-2">
          <div className="container">
            <div className="box bg-zinc-200 a">1</div>
            <div className="box bg-zinc-200 b">2</div>
            <div className="box bg-zinc-200 c">3</div>
            <div className="box bg-zinc-200 d">4</div>
            <div className="box bg-zinc-200 e">5</div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
