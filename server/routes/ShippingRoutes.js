import express from "express";
import { authenticate } from "../middleware/authenticate.js";
import axios from "axios";

// SETUP RAJA ONGKIR
axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.common["key"] = process.env.KEY;
axios.defaults.headers.post["Content-Type"] =
	"application/x-www-form-urlencoded";

const router = express.Router();

router.get("/provinces", authenticate(["user"]), async (req, res) => {
	try {
		const provinces = await axios.get("/province");

		res.status(200).json(provinces.data.rajaongkir.results);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

router.get("/city/:province_id", authenticate(["user"]), async (req, res) => {
	try {
		const id = req.params.province_id;

		const cities = await axios.get(`/city?province=${id}`);

		res.status(200).json(cities.data.rajaongkir.results);
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
});

router.get(
	"/cost/:origin/:destination/:weight/:courier",
	authenticate(["user"]),
	async (req, res) => {
		try {
			const params = req.params;

			const cost = await axios.post("/cost", {
				origin: params.origin,
				destination: params.destination,
				weight: params.weight,
				courier: params.courier,
			});

			res.status(200).json(cost.data.rajaongkir.results);
		} catch (error) {
			return res.status(500).json({ error: error.message });
		}
	}
);

export default router;
