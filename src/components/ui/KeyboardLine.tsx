import { Center } from "@chakra-ui/react";
import KeyboardButton from "./KeyboardButton";

interface KeyObject {
  label: string;
}

interface KeyboardLayoutProps {
  keys: KeyObject[];
}

const KeyboardLine: React.FC<KeyboardLayoutProps> = ({ keys }) => (
  <Center>
    {keys.map((key, index) => (
      <KeyboardButton key={index} label={key.label} />
    ))}
  </Center>
);

export default KeyboardLine;
