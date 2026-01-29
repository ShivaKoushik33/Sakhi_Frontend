import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../pages/Cart';
import Wishlist from '../pages/Wishlist';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import MyOrders from '../pages/MyOrders';
import Addresses from '../pages/Addresses';
import BankDetails from '../pages/BankDetails';
import AddAddress from '../pages/AddAddress';

export default function AppRoutes() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/orders" element={<MyOrders />} />
            <Route path="/profile/addresses" element={<Addresses />} />
            <Route path="/profile/bank-details" element={<BankDetails />} />
            <Route path="/profile/addresses/new" element={<AddAddress />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
