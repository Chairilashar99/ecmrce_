import { Fragment } from "react";
import AdminBar from "../components/appBar/AdminBar";
import { Box } from "@mui/material";
import Data from "./Data";
import Transaction from "./Transaction";

const Dashboard = () => {
	return (
		<Fragment>
			<AdminBar />
			<Box
				sx={{
					height: "calc(100vh - 100px)",
					p: 2,
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
					flexDirection: "column",
					gap: 2,
				}}>
				<Data />

				<Transaction />
			</Box>
		</Fragment>
	);
};

export default Dashboard;
