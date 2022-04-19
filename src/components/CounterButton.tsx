import { FunctionComponent, useState } from "react";
import { Button } from "@mantine/core";

export const CounterButton: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <Button type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </Button>
  );
};
