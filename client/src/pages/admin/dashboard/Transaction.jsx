import {
	Box,
	Container,
	Paper,
	Table,
	TableCell,
	TableHead,
	TableRow,
} from "@mui/material";

const columns = [
	{ id: 1, label: "No", minWidth: 30 },
	{ id: 2, label: "Order", minWidth: 100 },
	{ id: 3, label: "Pelanggan", minWidth: 150 },
	{ id: 4, label: "Tagihan", minWidth: 150 },
	{ id: 5, label: "Tanggal", minWidth: 150 },
	{ id: 6, label: "Status", minWidth: 150 },
	{ id: 7, label: "Pengiriman", minWidth: 150 },
	{ id: 8, label: "Alamat", minWidth: 250 },
];

const Transaction = () => {
	return (
		<Box
			sx={{
				width: "95%",
				height: "80%",
				borderRadius: "5px",
				boxShadow: 4,
				p: 1,
			}}>
			<Paper>
				<Table>
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell
									align="center"
									key={column.id}
									sx={{ minWidth: column.minWidth }}>
									{column.label}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
				</Table>
			</Paper>
		</Box>
	);
};

export default Transaction;
