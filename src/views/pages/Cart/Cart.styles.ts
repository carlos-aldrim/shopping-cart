import { styled } from "@mui/system";

export const Title = styled("label")({
  width: "197px",
  height: "39px",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "32px",
  lineHeight: "39px",
  color: "#000000",
  letterSpacing: "-0em",
  margin: "77px 0px 0px 90px",
});

export const CartContent = styled("div")({
  display: "flex",
});

export const CardProduct = styled("div")({
  width: "57.362%",
  minWidth: "400px",
  margin: "15px 0px 0px 82px",
});

export const PurchaseInformation = styled("div")({
  width: "36.385%",
  minWidth: "200px",
  height: "220px",
  backgroundColor: "#FFFFFF",
  margin: "30px 82px 0px 15px",
  borderRadius: "5px",
  padding: 30,
});

export const TextsRow = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const TextGroupSeparator = styled("div")({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const Definitions = styled("label")({
  width: "100px",
  height: "20px",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "23px",
  color: "#1A1A1A",
  letterSpacing: "-0em",
});

export const Strong = styled("label")({
  width: "100px",
  display: "flex",
  justifyContent: "flex-end",
  height: "20px",
  fontFamily: "Helvetica",
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "18px",
  lineHeight: "23px",
  color: "#1A1A1A",
  letterSpacing: "-0em",
});

export const ValueContainer = styled("div")({
  "& button": {
    marginTop: "30px",
    width: "100%",
    backgroundColor: "#89D963",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#50982E",
    },
  },
});

export const Loading = styled("div")({
  display: "flex",
  flexDirection: "row",
});

export const TitleIndividual = styled("label")({
  height: "calc(100vh - 463px)",
  "& p": {
    width: "197px",
    height: "39px",
    fontFamily: "Helvetica",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "39px",
    color: "#000000",
    letterSpacing: "-0em",
    margin: "77px 0px 0px 90px",
  },
});
