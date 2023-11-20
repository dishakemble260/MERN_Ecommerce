import{ Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Layout/Routes/Private";
import AdminRoute from "./components/Layout/Routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import CategoryProduct from "./pages/CategoryProduct";
import CartPage from "./pages/CartPage";
import AdminOrders from "./pages/Admin/AdminOrders";

function App() {
  return (
  <>
   <Routes>
    <Route path="/" element={< HomePage />}/>
    <Route path="/product/:slug" element={< ProductDetails />}/>
    <Route path="/categories" element={< Categories />}/>
    <Route path="/cart" element={< CartPage />}/>
    <Route path="/category/:slug" element={< CategoryProduct />}/>

    <Route path="/search" element={< Search />}/>
    <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="user" element={< Dashboard />}/>
      <Route path="user/orders" element={< Orders />}/>
      <Route path="user/profile" element={< Profile/>}/>
    </Route>
    <Route path="/dashboard" element={<AdminRoute/>}>
      <Route path="admin" element={<AdminDashboard/>}></Route>
      <Route path="admin/create-category" element={<CreateCategory/>}></Route>
      <Route path="admin/create-product" element={<CreateProduct/>}></Route>
      <Route path="admin/product/:slug" element={<UpdateProduct/>}></Route>
      <Route path="admin/products" element={<Products/>}></Route>
      <Route path="admin/users" element={<Users/>}></Route>
      <Route path="admin/orders" element={<AdminOrders/>}></Route>
    </Route>
    <Route path="/sign-up" element={< Register />}/>
    <Route path="/Login" element={< Login />}/>
    <Route path="/about" element={< About />}/>
    <Route path="/contact" element={< Contact />}/>
    <Route path="/policy" element={< Policy />}/>
    <Route path="/*" element={< Pagenotfound />}/>
   </Routes>
  </>
  );
}

export default App;
