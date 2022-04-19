import { FunctionComponent, useState } from "react";

export const CounterButton: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((count) => count + 1)}>
      count is: {count}
    </button>
  );
};
