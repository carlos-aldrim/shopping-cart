import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productsList: {
    maxWidth: "1752px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: "0px",
    margin: "62px 0px 94px 0px",
  },
  loading: {
    display: "flex",
    flexDirection: "row",
  },
  skeleton: {
    margin: "77px 0px 0px 15px",
    borderRadius: "5px",
  },
});