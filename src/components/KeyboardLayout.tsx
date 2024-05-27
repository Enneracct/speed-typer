import { Flex } from "@chakra-ui/react";
import KeyboardLine from "./ui/KeyboardLine";

const KeyboardLayout = () => {
  const keys1 = [
    { label: "Q" },
    { label: "W" },
    { label: "E" },
    { label: "R" },
    { label: "T" },
    { label: "Y" },
    { label: "U" },
    { label: "I" },
    { label: "O" },
    { label: "P" },
    { label: "[" },
    { label: "]" },
  ];

  const keysNums = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "0" },
    { label: "-" },
    { label: "=" },
  ];

  const keys2 = [
    { label: "A" },
    { label: "S" },
    { label: "D" },
    { label: "F" },
    { label: "G" },
    { label: "H" },
    { label: "J" },
    { label: "K" },
    { label: "L" },
    { label: ";" },
    { label: "'" },
  ];

  const keys3 = [
    { label: "Z" },
    { label: "X" },
    { label: "C" },
    { label: "V" },
    { label: "B" },
    { label: "N" },
    { label: "M" },
    { label: "," },
    { label: "." },
    { label: "/" },
  ];
  const spacebar = [{ label: " " }];

  return (
    <Flex direction="column" w="full">
      <KeyboardLine keys={keysNums} />
      <KeyboardLine keys={keys1} />
      <KeyboardLine keys={keys2} />
      <KeyboardLine keys={keys3} />
      <KeyboardLine keys={spacebar} />
    </Flex>
  );
};

export default KeyboardLayout;
