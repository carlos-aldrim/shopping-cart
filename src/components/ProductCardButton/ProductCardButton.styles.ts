import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "20%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    margin: "0px 0px 15px 14px",
    "&:hover": {
      boxShadow: "0 0 10px #C4C4C4",
    },
  },
  subContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "250px",
    marginBottom: "20px",
    justifyContent: "center",
    "& img": {
      width: "60%",
      maxHeight: "100%",
    },
  },
  productInfo: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  title: {
    "&.MuiTypography-root": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "130%",
      height: "58px",
      lineHeight: "29px",
      color: "#000000",
      margin: "0px 0px 12px 0px",
      letterSpacing: "-0.05em",
    },
  },
  description: {
    "&.MuiTypography-root": {
      maxWidth: "332px",
      height: "51px",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#272727",
      fontSize: "75%",
      lineHeight: "17px",
      margin: "0px 0px 12px 0px",
      letterSpacing: "-0.05em",
    },
  },
  price: {
    "&.MuiTypography-root": {
      maxWidth: "100%",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#000000",
      fontSize: "120%",
      lineHeight: "29px",
      height: "auto",
      margin: "0px 0px 12px 0px",
      letterSpacing: "-0.05em",
    },
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "40px",
    "& button": {
      width: "60%",
      fontSize: "60%",
      backgroundColor: "#89D963",
      color: "#FFFFFF",
      display: "flex",
      "&:hover": {
        backgroundColor: "#50982E",
      }
    },
  },
  evaluation: {
    height: "auto",
    display: "flex",
    alignItems: "flex-end",
    "& img": {
      margin: "0px 0px 0px 3px",
      wight: "20px",
      height: "20px",
    },
    "& p": {
      height: "25px",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 300,
      color: "#000000",
      fontSize: "90%",
      lineHeight: "35px",
    },
  },
});