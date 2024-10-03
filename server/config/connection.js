import mongoose from "mongoose";

const connect = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Connected to MongoDB at ${connection.connection.host}`);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connect;
