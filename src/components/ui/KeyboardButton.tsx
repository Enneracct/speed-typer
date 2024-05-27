import { Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface PropsI {
  label: string;
}

const KeyboardButton: React.FC<PropsI> = ({ label }) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === label.toLowerCase()) {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === label.toLowerCase()) {
        setIsPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [label]);

  return (
    <Center
      height="50px"
      width={label !== " " ? "50px" : "350px"}
      m="2px"
      color={isPressed ? "black" : "white"}
      bgColor={isPressed ? "orange.200" : "divider"}
      rounded="md"
    >
      {label}
    </Center>
  );
};

export default KeyboardButton;
