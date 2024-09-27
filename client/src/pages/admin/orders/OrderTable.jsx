import {
	Paper,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";

const columns = [
	{
		label: "No",
		with: 30,
	},
	{
		label: "Order Id",
		with: 100,
	},
	{
		label: "Pelanggan",
		with: 100,
	},
	{
		label: "Tagihan",
		with: 100,
	},
	{
		label: "Tanggal",
		with: 100,
	},
	{
		label: "Status",
		with: 100,
	},
	{
		label: "Pengiriman",
		with: 100,
	},
	{
		label: "Resi",
		with: 100,
	},
	{
		label: "No HP",
		with: 100,
	},
	{
		label: "Aksi",
		with: 100,
	},
];

const OrderTable = () => {
	return (
		<Paper>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							{columns.map((column, index) => (
								<TableCell
									align="center"
									key={index}
									sx={{ minWidth: column.with }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export default OrderTable;
