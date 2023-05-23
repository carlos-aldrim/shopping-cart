import { Skeleton } from "@mui/material";
import { styled } from "@mui/system";
import { PageContainer } from "components/PageContainer/PageContainer";

export const Container = styled(PageContainer)({
  display: "flex",
  flexDirection: "column",
});

export const ProductsList = styled("div")({
  minWidth: "fit-content",
  maxWidth: "min-content",
  display: "flex",
  flexWrap: "wrap",
  padding: "0px",
  margin: "0px 4.55% 94px 3.55%",
  justifyContent: "space-evenly",
});

export const Loading = styled("div")({
  display: "flex",
  flexDirection: "row",
  margin: "0px 4.55% 94px 3.55%",
  justifyContent: "space-evenly",
});

export const CardLoading = styled(Skeleton)({
  margin: "0px 0px 15px 27px",
  borderRadius: "5px",
});