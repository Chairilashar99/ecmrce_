import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import products from "../../data/Products";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import {
	Box,
	FormControl,
	Input,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";

const Products = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [categoryTerm, setCategoryTerm] = useState("");

	const searchFunction = (e) => {
		const { name, value } = e.target;

		if (name === "search") {
			setSearchTerm(value);
		} else if (name === "category") {
			if (value === "all") {
				setCategoryTerm("");
			} else {
				setCategoryTerm(value);
			}
		}
	};

	const filtered = (product) => {
		const name = product.name.toLowerCase().includes(searchTerm.toLowerCase());
		const category = product.category
			.toLowerCase()
			.includes(categoryTerm.toLowerCase());
		return name && category;
	};

	const filteredProduct = products.filter(filtered);

	const categories = [
		...new Set(filteredProduct.map((product) => product.category)),
	];

	return (
		<Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Input
					placeholder="Cari sesuatu ..."
					name="search"
					type="text"
					onChange={searchFunction}
					value={searchTerm}
					sx={{ p: 1 }}
				/>
				<FormControl sx={{ width: 300 }}>
					<InputLabel>Kategori</InputLabel>
					<Select
						name="category"
						label="Kategori"
						value={searchTerm}
						onChange={searchFunction}>
						<MenuItem value="all">Semua Produk</MenuItem>
						{categories.map((item, index) => (
							<MenuItem key={index} value={item}>
								{item}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>

			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					gap: 2,
					justifyContent: "center",
					mt: 2,
				}}>
				{filteredProduct.map((product) => (
					<Card key={product.name} sx={{ width: 210, minHeight: 280 }}>
						<CardActionArea>
							<CardMedia
								component="img"
								alt={product.name}
								image={product.image[0] ? product.image[0].link : null}
								sx={{ minHeight: 200, objectFit: "cover" }}
							/>
						</CardActionArea>
						<CardContent>
							<Typography> {product.name}</Typography>
							<Typography fontWeight="bold">
								{`Rp ${parseFloat(product.price).toLocaleString("id-ID")}`}
							</Typography>
							<Box sx={{ display: "flex", justifyContent: "space-between" }}>
								<Typography sx={{ display: "flex", alignItems: "center" }}>
									<StarRoundedIcon sx={{ color: orange[500] }} />{" "}
									{product.rating}
								</Typography>
								<Typography sx={{ display: "flex", alignItems: "center" }}>
									stock: {product.stock}
								</Typography>
							</Box>
						</CardContent>
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Products;
