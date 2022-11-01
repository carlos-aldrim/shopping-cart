import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  main: {
    height: "calc(100vh - 108px)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  animation: {
    width: "50%",
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
    marginRight: "120px",
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