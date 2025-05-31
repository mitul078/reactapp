import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import Blog from '../components/Blog'
import Login from '../components/Login'
import ProductDetail from '../components/ProductDetail'
import Cart from '../components/Cart'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='reactapp/' element={<Home/>}></Route>
        <Route path='reactapp/product' element={<Product/>}></Route>
        <Route path='reactapp/product/detail/:productName' element={<ProductDetail/>}></Route>
        <Route path='reactapp/blog' element={<Blog/>}></Route>
        <Route path='reactapp/login' element={<Login/>}></Route>
        <Route path='reactapp/cart' element={<Cart/>}></Route>
      </Routes>
    </>
  )
}

export default MainRoutes
