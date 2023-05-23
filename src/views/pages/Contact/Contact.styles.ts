import { styled } from "@mui/system";

export const Main = styled("div")({
  display: "flex",
  width: "auto",
  height: "220px",
  justifyContent: "space-between",
  margin: "0px 82px 0px 82px",
});

export const SocialNetworks = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  "& img": {
    width: "auto",
    height: "84px",
  },
});

export const Phone = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  "& img": {
    width: "84px",
    height: "84px",
  },
});

export const Email = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  "& img": {
    width: "84px",
    height: "84px",
  },
});

export const Icons = styled("div")({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
  "& img": {
    width: "50px",
    height: "50px",
    borderRadius: "100px",
  },
});

export const Title = styled("label")({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "30px",
  lineHeight: "29px",
  color: "#C71D1D",
  margin: "15px 0px 5px 0px",
});

export const Subtitle = styled("label")({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "14px",
  lineHeight: "29px",
  color: "#C4C4C4",
  margin: "0px 0px 5px 0px",
});

export const Info = styled("label")({
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "24px",
  lineHeight: "29px",
  color: "#C4C4C4",
  margin: "0px 0px 5px 0px",
});