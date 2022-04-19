import { FunctionComponent } from "react";
import { Container } from "@mantine/core";
import { CounterButton } from "../components/CounterButton";

export const MainContent: FunctionComponent = () => {
  return (
    <Container>
      <CounterButton />
    </Container>
  );
};
