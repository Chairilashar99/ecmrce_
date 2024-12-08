import { Box } from "@mui/material";
import Appbar from "../../../components/appbar/Appbar";
import Footer from "../../../components/footer/Footer";
import ListOrders from "./ListOrders";
import { useGetMyOrderQuery } from "../../../state/api/orderApi";

const Order = () => {
	const { data } = useGetMyOrderQuery();
	return (
		<Box>
			<Appbar />

			<Box sx={{ height: 680, padding: "30px" }}>
				<ListOrders orders={data} />
			</Box>

			<Footer />
		</Box>
	);
};

export default Order;
