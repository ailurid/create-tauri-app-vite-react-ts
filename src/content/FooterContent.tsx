import { FunctionComponent } from "react";
import { Container } from "@mantine/core";
import { CounterButton } from "../components/CounterButton";

export const FooterContent: FunctionComponent = () => {
  return (
    <Container>
      <CounterButton />
    </Container>
  );
};
