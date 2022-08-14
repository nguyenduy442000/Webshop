import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from"./client/views/Home/Home"
import Slogan from "./client/views/layout/Slogan/Slogan";
import Navigation from "./client/views/layout/Navigation/Navigation";
import Footer from "./client/views/layout/Footer/Footer"
import './app.scss';
import Catalogue from "./client/views/Catalogue/Catalogue";
import About from"./client/views/About/About";
import Blog from "./client/views/Blog/Blog";
import Info from "./client/views/ShopInfo/ShopInfo";
import Account from "./client/views/Account/Account";
import ProductDetails from"./client/views/ProductDetail/ProductDetail"
import {useState,useEffect} from "react";
import Cart from "./client/views/Cart/Cart"
import {ProductContext} from "./Context/ProductContext"
function App() {
  const [myProduct,addMyProduct]= useState([{}])
  const [total,setTotal]=useState(0);
  const [windowSize,setWindowSize] = useState({
    width:undefined,
    height:undefined
  })
  const [ismobile,setisMobile] =useState(false);
   useEffect(()=>{
    const handleSize = ()=>{
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight
       })
    };
     window.addEventListener("resize",handleSize)
     handleSize();
     return ()=>  window.addEventListener("resize",handleSize);
   },[])
   useEffect(()=>{
   if(windowSize.width <740){
     setisMobile(true);

   }else{
    setisMobile(false);
   }
   },[windowSize])
  return (
    <ProductContext.Provider value={{myProduct,addMyProduct,total,setTotal}}>
    <div>
    
    <BrowserRouter>
    <div className="container background-slogan">
    <Slogan ismobile={ismobile} />
  </div>
  <div >
    <Navigation ismobile={ismobile} />
  </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Catalogue' element={<Catalogue ismobile={ismobile}/>} />
    <Route path='/About' element={<About/>}/>
    <Route path='/Blog' element={<Blog/>}/>
    <Route path='/Info' element={<Info/>}/>
    <Route path='/Account' element={<Account/>}/>
    <Route path='/productDetail/:id' element={<ProductDetails/>} />
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    <div style={{backgroundColor:'#f4f4f5'}}>
<div className="section_footer">
<Footer/>
</div>
</div>
    </div>
    </ProductContext.Provider>
  );
}

export default App;
