// App.js
import { ChakraProvider, Button, Input, VStack } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <VStack spacing={4} align="center" mt={10}>
        <h2>Chakra UI Example</h2>
        <Input placeholder="Enter your name" width="250px" />
        <Button colorScheme="teal">Click Me</Button>
      </VStack>
    </ChakraProvider>
  );
}

export default App;
