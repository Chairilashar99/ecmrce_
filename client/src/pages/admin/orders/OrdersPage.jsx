import AdminBar from "../components/appBar/AdminBar";
import { Box, Input } from "@mui/material";
import OrderTable from "./OrderTable";

const OrdersPage = () => {
	return (
		<Box sx={{ height: "100vh" }}>
			<AdminBar />

			{/*SEARCH FUNCTION*/}

			<Box sx={{ p: 2 }}>
				<Input placeholder="Cari Pesanan" />
			</Box>

			<Box sx={{ p: 2 }}>
				<OrderTable />
			</Box>
		</Box>
	);
};

export default OrdersPage;
