import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Navigation from "./components/Navigation";
// pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import EditProductPage from "./pages/EditProductPage";
import AdminDashbord from "./pages/AdminDashbord";
import Error from "./pages/Error";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import NewProduct from "./pages/NewProduct";
import CategoryPage from "./pages/CategoyPage";
import ProductPreview from "./pages/ProductPage";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="container">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {!user && (
            <>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
            </>
          )}
          {user && (
            <>
              <Route path="/cart" element={<CartPage />} />
              <Route path="/orders" element={<OrdersPage />} />

              {user && user.isAdmin && (
                <>
                  <Route path="/admin" element={<AdminDashbord></AdminDashbord>} />
                  <Route path="/product/:id/edit" element={<EditProductPage />}/>
                </>
              )}
            </>
          )}

          <Route path="/product/:id" element={<ProductPreview />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/new-product" element={<NewProduct />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;