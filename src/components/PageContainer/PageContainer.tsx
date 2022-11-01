import React from "react";
import { Box, Container } from "@mui/material";
import { useStyles } from "./PageContainer.styles";

interface PageContainerProps {
  className?: string;
  children?: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({
  className,
  children,
}) => {
  const styles = useStyles();

  return (
    <Box className={`${styles.pageContainer} ${className}`}>
      {children}
    </Box>
  );
};