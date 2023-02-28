import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./index.css";
const HomePage = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.inforBox}>
        <h2>Xin chào, Phạm Hoàng Tú </h2>
      </Box>
      <Box sx={styles.inforBox}>
        <Box sx={styles.contentBox}>
          <p style={styles.text}>Địa chỉ: </p>
        </Box>
        <Box sx={styles.contentBox}>
          <p>453/15 Lê Văn Khương, phường Hiệp Thành , Quận 12</p>
        </Box>
        <Box sx={styles.contentBox}>
          <p style={styles.text}>Số điện thoại chi nhánh: </p>
        </Box>
        <Box sx={styles.contentBox}>
          <p style={styles.text}>0898989898 </p>
        </Box>
      </Box>
    </Box>
  );
};
const styles = {
  container: {
    width: "100%",
    padding: "0 16px 0 16px",
  },
  inforBox: {
    padding: "8px",
    border: "1px solid silver",
    borderRadius: "15px",
    margin: "16px 0 16px 0",
  },
  contentBox:{
    margin: "8px 0 0 0",
  },
  text: {

  },
};
export default HomePage;
