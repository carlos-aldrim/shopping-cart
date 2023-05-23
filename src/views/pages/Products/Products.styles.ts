import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  productsList: {
    minWidth: "fit-content",
    maxWidth: "min-content",
    display: "flex",
    flexWrap: "wrap",
    padding: "0px",
    margin: "0px 4.55% 94px 3.55%",
    justifyContent: "space-evenly",
  },
  loading: {
    display: "flex",
    flexDirection: "row",
    margin: "0px 4.55% 94px 3.55%",
    justifyContent: "space-evenly",
  },
  skeleton: {
    margin: "0px 0px 15px 27px",
    borderRadius: "5px",
  },
});