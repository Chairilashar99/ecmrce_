import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Rating,
	Stack,
	Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatIcon from "@mui/icons-material/Chat";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import { blue, green, orange, red, yellow } from "@mui/material/colors";

const Products = () => {
	return (
		<Card sx={{ width: 250 }}>
			<CardMedia
				component="img"
				height={224}
				image="https://img.lazcdn.com/g/p/58b704c6dbd9ebbf317f3c53e3860c9a.jpg_400x400q80.jpg"
			/>
			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 1,
					}}>
					<Typography fontWeight="bold" align="center" fontSize={18}>
						Shampoo
					</Typography>
					<Typography
						fontWeight="bold"
						align="center"
						fontSize={14}
						fontStyle="italic">
						20.000
					</Typography>

					<Stack spacing={2}>
						<Rating value={5} readOnly />
					</Stack>
				</Box>
			</CardContent>
			<CardActions>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						gap: 2,
					}}>
					<IconButton>
						<MoreVertIcon sx={{ color: blue[500] }} />
					</IconButton>
					<IconButton>
						<ChatIcon sx={{ color: green[500] }} />
					</IconButton>
					<IconButton>
						<EditIcon sx={{ color: yellow[800] }} />
					</IconButton>
					<IconButton>
						<RemoveIcon sx={{ color: red[800] }} />
					</IconButton>
				</Box>
			</CardActions>
		</Card>
	);
};

export default Products;
