import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Product from '../components/Product'
import Blog from '../components/Blog'
import Login from '../components/Login'
import ProductDetail from '../components/ProductDetail'
import Cart from '../components/Cart'
import AdminPanal from '../components/AdminPanal'

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/product/detail/:productName' element={<ProductDetail/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/admin' element={<AdminPanal/>}></Route>
      </Routes>
    </>
  )
}

export default MainRoutes
