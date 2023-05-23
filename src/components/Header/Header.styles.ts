import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const Container = styled("div")({
  height: "100px",
  minWidth: "max-content",
  maxWidth: "100%",
  background: "#FFFFFF",
  marginBottom: "90px"
});

export const SubContainer = styled("div")({
  padding: "0px 116px 0px 118px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  height: "100%",
});

export const TextLink = styled(Link)({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#000000",
  textDecorationColor: "#FFFFFF",
  marginLeft: "72px",
  "&:hover": {
    textDecorationColor: "#C71D1D",
  },
});

export const Menu = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
});

export const ProfileImage = styled("div")({
  marginLeft: "30px",
  "& img": {
    width: "64px",
    height: "64px",
  },
});

export const CartImage = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  cursor: "pointer",
  "& img": {
    width: "38.25px",
    height: "34px",
    marginLeft: "60px",
  },
  "& p": {
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24.48px",
    lineHeight: "30px",
    color: "#C71D1D",
    marginLeft: "15px",
  },
});
