
import { CartProvider } from '../components/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Nav from '../components/Nav'
import MainRoutes from '../routes/MainRoutes'

const App = () => {
  return (
    <div>
      <CartProvider>

        <Nav />
        <MainRoutes />
        <ToastContainer />
      </CartProvider>

    </div>



  )
}

export default App
