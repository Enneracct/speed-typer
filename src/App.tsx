import { Flex } from "@chakra-ui/react";
import KeyboardLayout from "./components/KeyboardLayout";
import TextArea from "./components/TextArea";
import { paragraphs } from "./utils/mockParagraphs";

function App() {
  return (
    <Flex direction="column" w="full" alignItems="center" gap="2rem">
      <TextArea paragraph={paragraphs[0]} />
      <KeyboardLayout />
    </Flex>
  );
}

export default App;
