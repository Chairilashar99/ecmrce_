import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import products from "../../data/Products";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Box, Input } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";

const Products = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const searchFunction = (e) => {
		setSearchTerm(e.target.value);

		// console.log(e.target.value);
	};

	const filtered = (product) => {
		return product.name.toLowerCase().includes(searchTerm.toLowerCase());
	};

	const filteredProduct = products.filter(filtered);

	return (
		<Box sx={{ display: "flex", flexDirection: "column", width: "100%", p: 2 }}>
			<Box>
				<Input
					placeholder="Cari sesuatu ..."
					type="text"
					onChange={searchFunction}
					value={searchTerm}
					sx={{ p: 1 }}
				/>
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
