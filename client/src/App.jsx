import "./App.css";
import "izitoast/dist/css/iziToast.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import DetailProduct from "./pages/product/DetailProduct";
import Cart from "./pages/cart/Cart";
import Profile from "./pages/user/Profile";
import Order from "./pages/user/order/Order";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import UsersPage from "./pages/admin/users/UsersPage";
import ProductsPage from "./pages/admin/products/ProductsPage";
import OrdersPage from "./pages/admin/orders/OrdersPage";
import ReportPage from "./pages/admin/report/ReportPage";
import LoginPage from "./components/login/LoginPage";
import SignupPage from "./components/signup/SignupPage";
import { useDispatch } from "react-redux";
import { loadUser } from "./state/api/authApi";
import { useEffect } from "react";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const load = localStorage.getItem("login");

		if (load) {
			dispatch(loadUser());
		}
	}, [dispatch]);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/daftar" element={<SignupPage />} />
				<Route path="/" element={<Home />} />
				<Route path="/:name" element={<DetailProduct />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/order" element={<Order />} />

				<Route path="/admin-dashboard" element={<Dashboard />} />
				<Route path="/admin-pelanggan" element={<UsersPage />} />
				<Route path="/admin-produk" element={<ProductsPage />} />
				<Route path="/admin-pesanan" element={<OrdersPage />} />
				<Route path="/admin-laporan" element={<ReportPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
