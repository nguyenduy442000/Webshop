import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Product from '../components/Product/Product';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import UserDetail from '../components/UserDetail/UserDetail';
import User from  '../page/User/User'
const Router = () => {
  return (
  
    <Routes>
    <Route path='api/product/' element={<Product/>}/>
    <Route path='/api/product/:id' element={<ProductDetail/>}/>
    <Route path='/api/user/' element={<User/>}/>
    <Route path='/api/user/:id' element={<UserDetail/>}/>
    </Routes>
  )
}

export default Router