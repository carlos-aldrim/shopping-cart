import { styled } from "@mui/system";

export const Main = styled("div")({
  height: "auto",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const Animation = styled("div")({
  width: "40%",
  marginLeft: "5%",
});

export const OpeningText = styled("label")({
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
});

export const Text = styled("label")({
  marginRight: "9%",
});

export const Logo = styled("label")({
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "row",
  alignItems: "center",
  "& img": {
    width: "90px",
    marginLeft: "15px",
  },
});