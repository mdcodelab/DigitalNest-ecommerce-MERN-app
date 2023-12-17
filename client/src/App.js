import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import EditProductPage from "./pages/EditProductPage";
import AdminDashboard from "./pages/AdminDashboard";
import Error from "./pages/Error";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import NewProduct from "./pages/NewProduct";
import CategoryPage from "./pages/CategoryPage";
import ProductPreview from "./pages/ProductPage";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      <Router>
        <ScrollToTop /> {/* Move ScrollToTop inside Router */}
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {!user && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
          )}
          {user && (
            <>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              {user.isAdmin && (
                <>
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route
                    path="/product/:id/edit"
                    element={<EditProductPage />}
                  />
                </>
              )}
            </>
          )}
          <Route path="/products/:id" element={<ProductPreview />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/new-product" element={<NewProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
