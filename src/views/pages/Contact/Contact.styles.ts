import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    display: "flex",
    width: "auto",
    height: "220px",
    justifyContent: "space-between",
    margin: "0px 82px 0px 82px",
  },
  socialNetworks: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& img": {
      width: "auto",
      height: "84px",
    },
  },
  phone: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& img": {
      width: "84px",
      height: "84px",
    },
  },
  email: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& img": {
      width: "84px",
      height: "84px",
    },
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    "& img": {
      width: "50px",
      height: "50px",
      borderRadius: "100px",
    },
  },
  title: {
    "&.MuiTypography-root": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "30px",
      lineHeight: "29px",
      color: "#C71D1D",
      margin: "15px 0px 5px 0px",
    },
  },
  subtitle: {
    "&.MuiTypography-root": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "29px",
      color: "#C4C4C4",
      margin: "0px 0px 5px 0px",
    },
  },
  info: {
    "&.MuiTypography-root": {
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 300,
      fontSize: "24px",
      lineHeight: "29px",
      color: "#C4C4C4",
      margin: "0px 0px 5px 0px",
    },
  },
});