
import { CartProvider } from '../components/CartContext'
import ProductProvider from '../components/ProductContext';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../components/Nav'
import MainRoutes from '../routes/MainRoutes'


const App = () => {
  return (
    <div>
      <ProductProvider>
        <CartProvider>
          <Nav />
          <MainRoutes />
          <ToastContainer />
        </CartProvider>
      </ProductProvider>
    </div>



  )
}

export default App
