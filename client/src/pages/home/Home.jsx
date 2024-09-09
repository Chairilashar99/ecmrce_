import { Box } from "@mui/material";
import Appbar from "../../components/appbar/Appbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Appbar />

      <Box
        sx={{
          height: 935,
          m: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Products
      </Box>

      <Footer />
    </div>
  );
};

export default Home;
