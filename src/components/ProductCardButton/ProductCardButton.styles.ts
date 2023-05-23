import { styled } from "@mui/system";

export const Container = styled("div")({
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
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0 0 10px #C4C4C4",
  },
});

export const SubContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Image = styled("div")({
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
});

export const ProductInfoContent = styled("div")({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});

export const Title = styled("label")({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "130%",
  height: "58px",
  lineHeight: "29px",
  color: "#000000",
  margin: "0px 0px 12px 0px",
  letterSpacing: "-0.05em",
});

export const Description = styled("label")({
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
});

export const Price = styled("label")({
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
});

export const Footer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "40px",
  "& button": {
    width: "100%",
    fontSize: "80%",
    backgroundColor: "#89D963",
    color: "#FFFFFF",
    display: "flex",
    "&:hover": {
      backgroundColor: "#50982E",
    },
  },
});

export const Evaluation = styled("div")({
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
});
