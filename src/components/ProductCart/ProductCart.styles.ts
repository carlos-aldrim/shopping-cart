import { styled } from "@mui/system";

export const Container = styled("div")({
  width: "auto",
  height: "105px",
  display: "flex",
  backgroundColor: "#FFFFFF",
  alignItems: "center",
  borderRadius: "5px",
  flexDirection: "row",
  padding: "30px",
  marginTop: "15px",
  "&:hover": {
    boxShadow: "0 0 10px #C4C4C4",
  },
});

export const Image = styled("div")({
  marginLeft: "25px",
  "& img": {
    maxWidth: "105px",
    height: "108px",
  },
});

export const Texts = styled("div")({
  marginLeft: "15px",
  width: "100%",
});

export const Title = styled("div")({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "29px",
  color: "#000000",
  margin: "0px 0px 5px 0px",
});

export const Price = styled("div")({
  maxWidth: "100%",
  height: "29px",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 500,
  color: "#000000",
  fontSize: "18px",
  lineHeight: "29px",
});

export const CountButtons = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100px",
  justifyContent: "center",
  margin: "0px 25px 0px 5px",
  border: "2px solid #C71D1D",
  borderRadius: "5px",
  "& button": {
    minWidth: "25px",
    height: "25px",
    padding: 0,
    borderRadius: "5px",
    color: "#C71D1D",
    backgroundColor: "#FFFFFF",
    fontSize: "20px",
    fontWeight: 600,
    display: "flex",
    "&:hover": {
      backgroundColor: "#FFF5EE",
      color: "#C71D1D",
    },
  },
  "& p": {
    maxWidth: "25px",
    height: "25px",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "26px",
    margin: "0px 5px 0px 5px",
  },
});

export const ProductCartInfo = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  cursor: "pointer",
});

export const PopButton = styled("div")({
  width: "32px",
  height: "100%",
  "& button": {
    minWidth: "32px",
    width: "32px",
    height: "32px",
    padding: 0,
    color: "#C71D1D",
    fontSize: "20px",
    backgroundColor: "#FFFFFF",
    borderRadius: "100px",
    "&:hover": {
      backgroundColor: "#FFF5EE",
    },
  },
});