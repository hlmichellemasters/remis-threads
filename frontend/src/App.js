import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// publicly available pages
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';
import RegisterPage from './pages/RegisterPage';
// protected user pages
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrdersPage from './pages/user/UserOrdersPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
import UserProfilePage from './pages/user/UserProfilePage';
// protected admin pages
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminChatsPage from './pages/admin/AdminChatsPage';
// components
import ProtectedRoutesComponent from './components/ProtectedRoutesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
// user components
import RoutesWithUserChatComponent from './components/user/RoutesWithUserChatComponent';
// utils
import ScrollTop from './utils/ScrollTop.js';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';

function App() {
  return (
    <Router>
      <ScrollTop />
      <HeaderComponent />
      <Routes>
        {/* publicly available pages */}
        <Route path="*" element={<h1>Page does not exist: 404</h1>} />
        {/* UserChatComponent for public pages */}
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* protected user pages */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route path="/user/orders" element={<UserOrdersPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* protected admin pages */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product/:id"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user/:id" element={<AdminEditUserPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
