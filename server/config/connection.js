import mongoose from "mongoose";

const connect = async () => {
	try {
		console.log(`Connecting to MongoDB at ${process.env.URL}`);
		const connection = await mongoose.connect(process.env.URL);
		console.log(`Connected to MongoDB at ${connection.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connect;
