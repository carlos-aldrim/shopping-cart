import React from "react";
import IconLogo from "assets/icons/LogoIcon.svg";
import { Box } from "@mui/material";
import { useStyles } from "./Footer.styles";

export const Footer: React.FC = () => {
  const styles = useStyles();

  return (
    <React.Fragment>
      <Box className={styles.container}>
        <img src={IconLogo} alt="IconLogo"/>
      </Box>
    </React.Fragment>
  );
};