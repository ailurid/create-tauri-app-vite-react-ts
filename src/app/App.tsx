import { useState } from "react";
import { Flex, Stack, Center, Text, Button, Divider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flex h="100vh">
      <Center w="30vw">
        <Text>sidebox</Text>
      </Center>
      <Divider orientation="vertical" />
      <Center flex="1">
        <Stack>
          <Text>Hello Vite + React!</Text>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </Button>
          <Text>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </Text>
        </Stack>
      </Center>
    </Flex>
  );
}

export default App;
