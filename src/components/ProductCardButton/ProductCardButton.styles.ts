import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    width: "394px",
    height: "569px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    borderRadius: "5px",
    backgroundColor: "#FFFFFF",
    margin: "15px 0px 0px 14px",
    "&:hover": {
      boxShadow: "0 0 10px #C4C4C4",
    },
  },
  subContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    "& img": {
      height: "320px",
      maxWidth: "330px",
      marginBottom: "15px",
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
      fontSize: "24px",
      lineHeight: "29px",
      color: "#000000",
      margin: "0px 0px 24px 0px",
    },
  },
  description: {
    "&.MuiTypography-root": {
      maxWidth: "332px",
      height: "34px",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#272727",
      fontSize: "14px",
      lineHeight: "17px",
      margin: "0px 0px 24px 0px",
    },
  },
  price: {
    "&.MuiTypography-root": {
      maxWidth: "100%",
      height: "29px",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#000000",
      fontSize: "24px",
      lineHeight: "29px",
      margin: "0px 0px 24px 0px",
    },
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    width: "394px",
    height: "51px",
    "& button": {
      backgroundColor: "#89D963",
      color: "#FFFFFF",
      display: "flex",
      "&:hover": {
        backgroundColor: "#50982E",
      }
    },
  },
  evaluation: {
    height: "51px",
    display: "flex",
    alignItems: "flex-end",
    "& img": {
      margin: "0px 0px 0px 3px",
      wight: "25px",
      height: "25px",
    },
    "& p": {
      height: "25px",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 500,
      color: "#000000",
      fontSize: "18px",
      lineHeight: "29px",
    },
  },
});