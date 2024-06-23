import { Button, Center } from "@chakra-ui/react";

interface WordsCountBtnProps {
  val: number;
  onClick: React.Dispatch<React.SetStateAction<number>>;
}

const WordsBtn: React.FC<WordsCountBtnProps> = ({ val, onClick }) => {
  return (
    <Center backgroundColor="secondary" rounded="lg" w="30px" h="30px">
      <Button
        w="full"
        h="full"
        textColor="accentOne"
        onClick={() => onClick(val)}>
        {val}
      </Button>
    </Center>
  );
};

export default WordsBtn;
