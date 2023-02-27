import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./index.css";
const HomePage = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.welcomeBox}>
        <h2>Xin chào, Phạm Hoàng Tú </h2>
      </Box>
      <Box
        sx={{
          padding: "8px",
        }}
      >
        <span>Xin chào, Phạm Hoàng Tú </span>
      </Box>
    </Box>
  );
};
const styles = {
  container: {
    width: "100%",
  },
  welcomeBox: {
    padding: "8px",
    border: "1px solid silver",
    borderRadius: "8px",
  },
};
export default HomePage;
