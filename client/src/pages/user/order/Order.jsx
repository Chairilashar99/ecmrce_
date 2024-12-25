import { Box } from "@mui/material";
import Appbar from "../../../components/appbar/Appbar";
import Footer from "../../../components/footer/Footer";
import ListOrders from "./ListOrders";

const Order = () => {
	return (
		<Box>
			<Appbar />

			<Box sx={{ height: 680, padding: "30px" }}>
				<ListOrders />
			</Box>

			<Footer />
		</Box>
	);
};

export default Order;
