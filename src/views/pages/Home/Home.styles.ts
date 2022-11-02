import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  animation: {
    width: "40%",
    marginLeft: "5%",
  },
  openingText: {
    "&.MuiTypography-root": {
      display: "flex",
      height: "auto",
      justifyContent: "flex-end",
      fontFamily: "Helvetica",
      fontStyle: "normal",
      fontWeight: 800,
      fontSize: "300%",
      lineHeight: "130%",
      color: "#C71D1D",
      letterSpacing: "-0em",
    },
  },
  text: {
    marginRight: "9%",
  },
  logo: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    "& img": {
      width: "90px",
      marginLeft: "15px",
    },
  },
});