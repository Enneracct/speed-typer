import { Flex } from "@chakra-ui/react";
import KeyboardLayout from "./components/KeyboardLayout";
import TextArea from "./components/TextArea";

function App() {
  return (
    <Flex direction="column" w="full" alignItems="center" gap="2rem">
      <TextArea />
      <KeyboardLayout />
    </Flex>
  );
}

export default App;
