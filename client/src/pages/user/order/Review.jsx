import { Box, Button, Fade, Modal, Rating, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import iziToast from "izitoast";
import { useGiveReviewMutation } from "../../../state/api/productApi";

const Review = ({ open, close, product }) => {
	const [giveReview, { data, isSuccess, isLoading, error }] =
		useGiveReviewMutation();

	const [rating, setRating] = useState(1);
	const [review, setReview] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();

		const data = {
			rating: rating,
			review: review,
		};

		giveReview({ id: product._id, body: data });
	};

	useEffect(() => {
		if (isSuccess) {
			iziToast.success({
				title: "Success",
				message: data?.message,
				position: "topRight",
				timeout: 3000,
			});

			// getMyOrder().unwrap();

			close();
		}

		if (error) {
			iziToast.error({
				title: "Error",
				message: error?.data.error,
				position: "topRight",
				timeout: 3000,
			});

			console.log(error);
		}
	}, [isSuccess, data, error]);

	return (
		<Modal open={open} onClose={close}>
			<Fade in={open}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 450,
						height: 340,
						bgcolor: "background.paper",
						boxShadow: 24,
						borderRadius: "5px",
						p: 2,
					}}>
					<form
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							gap: "15px",
						}}
						onSubmit={submitHandler}>
						<Stack spacing={1}>
							<Rating
								name="size-large"
								value={rating}
								size="large"
								onChange={(event, newValue) => {
									setRating(newValue);
								}}
							/>
						</Stack>
						<ReactQuill
							theme="snow"
							value={review}
							onChange={setReview}
							style={{ width: "100", height: "150px" }}
						/>

						<Button
							sx={{ mt: 4 }}
							fullWidth
							variant="contained"
							color="primary"
							type="submit">
							{isLoading ? "..." : "Simpan"}
						</Button>

						<Button onClick={close} fullWidth variant="contained" color="error">
							Tutup
						</Button>
					</form>
				</Box>
			</Fade>
		</Modal>
	);
};

export default Review;
