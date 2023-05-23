import React from "react";
import { Container } from "./PageContainer.styles";

interface PageContainerProps {
  children?: React.ReactNode;
};

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
}) => {
  return (
    <Container>
      {children}
    </Container>
  );
};