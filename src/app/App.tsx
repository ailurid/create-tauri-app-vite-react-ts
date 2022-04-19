import { FunctionComponent } from "react";
import { CounterButton } from "./CounterButton";

export const App: FunctionComponent = () => {
  return (
    <div>
      <header>
        <p>Hello Vite + React!</p>
        <CounterButton />
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  );
};
