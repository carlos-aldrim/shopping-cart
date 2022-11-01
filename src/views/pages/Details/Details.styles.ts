import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    height: "auto",
  },
  body: {
    display: "flex",
    alignItems: "center",
    height: "auto",
    width: "100%",
    justifyContent: "center",
    margin: "62px 0px 0px 0px",
  },
  image: {
    marginLeft: "25px",
    borderRadius: "10px",
    width: "400px",
    height: "400px",
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    overflow: "hidden",
    padding: "10px",
    "& img": {
      maxWidth: "400px",
      transition: "0.5s all ease-in-out",
      "&:hover": {
        transform: "scale(2)",
      },
    },
  },
  detailsProduct: {
    width: "500px",
    height: "auto",
    marginLeft: "50px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  title: {
    "&.MuiTypography-root": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "29px",
      color: "#000000",
      margin: "0px 0px 24px 0px",
    },
  },
  description: {
    "&.MuiTypography-root": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#272727",
      fontSize: "14px",
      lineHeight: "17px",
      margin: "0px 0px 24px 0px",
    },
  },
  rating: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "20px",
    margin: "0px 0px 24px 0px",
  },
  price: {
    "&.MuiTypography-root": {
      height: "auto",
      display: "flex",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#000000",
      fontSize: "24px",
      lineHeight: "20px",
      margin: "0px 0px 24px 0px",
    },
  },
  button: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    "& button": {
      width: "100%",
      backgroundColor: "#89D963",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#50982E",
      }
    },
  },
});