import { Box, Flex, Kbd } from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import useTypingGame from "react-typing-game-hook";
import { generateWordSequence } from "../utils/generateWodSequence";
import WordsBtn from "./ui/WordsBtn";

const TextArea = () => {
  const [paragraph, setParagraph] = useState("");
  const typingBox = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [cpm, setCpm] = useState(0);
  const letterElements = useRef<HTMLDivElement>(null);
  const [wordsInParagraph, setWordsInParagraph] = useState(10);

  const {
    states: { charsState, currIndex, phase, correctChar, startTime, endTime },
    actions: { insertTyping, deleteTyping, resetTyping },
  } = useTypingGame(paragraph, {
    skipCurrentWordOnSpace: false,
    pauseOnError: false,
  });

  // set cursor
  const pos = useMemo(() => {
    if (currIndex !== -1 && letterElements.current) {
      const spanref = letterElements.current.children[currIndex] as HTMLElement;
      if (spanref) {
        const left = spanref.offsetLeft + spanref.offsetWidth - 2;
        const top = spanref.offsetTop - 2;
        return { left, top };
      }
    }
    return { left: -2, top: 2 };
  }, [currIndex]);

  // Set new paragraph on page load
  useEffect(() => {
    setParagraph(generateWordSequence(wordsInParagraph));
    typingBox.current?.focus();
  }, [wordsInParagraph]);

  // Set WPM and CPM
  useEffect(() => {
    if (phase === 2 && endTime && startTime) {
      setTime(Math.floor((endTime - startTime) / 1000));
    } else {
      setTime(0);
    }
  }, [phase, startTime, endTime]);

  // Calculate current WPM, CPM
  useEffect(() => {
    if (startTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = (currentTime - startTime) / 1000; // in seconds
      const currentWpm = Math.round(((60 / elapsedTime) * correctChar) / 5);
      const currentCpm = Math.round(correctChar / (elapsedTime / 60));
      setWpm(currentWpm);
      setCpm(currentCpm);
    }
  }, [currIndex, correctChar, startTime]);

  const restart = () => {
    setParagraph(generateWordSequence(wordsInParagraph));
    resetTyping();
  };

  const handleKeyDown = (letter: string, control: boolean) => {
    if (letter === "Escape") {
      restart();
      setWpm(0);
      setCpm(0);
    } else if (letter === "Backspace") {
      deleteTyping(control);
    } else if (letter.length === 1) {
      insertTyping(letter);
    }
  };

  return (
    <Flex direction="column" gap="2rem" w="1000px" pos="relative" rounded="md">
      <Flex justifyContent="end" gap="1rem">
        <WordsBtn val={5} onClick={setWordsInParagraph} />
        <WordsBtn val={10} onClick={setWordsInParagraph} />
        <WordsBtn val={25} onClick={setWordsInParagraph} />
        <WordsBtn val={50} onClick={setWordsInParagraph} />
      </Flex>
      <Box
        ref={typingBox}
        pos="relative"
        fontSize="x-large"
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
        onKeyDown={(e) => handleKeyDown(e.key, e.ctrlKey)}
        tabIndex={0}>
        <Box ref={letterElements} tabIndex={0}>
          {paragraph.split("").map((letter, index) => {
            const state = charsState[index];
            const color =
              state === 0 ? "#4C4F54" : state === 1 ? "white" : "#8F0B13";
            return (
              <span key={letter + index} style={{ color: `${color}` }}>
                {letter}
              </span>
            );
          })}
        </Box>
        {phase !== 2 && isTyping ? (
          <span
            className={`caret`}
            style={{
              left: pos.left,
              top: pos.top,
            }}>
            &nbsp;
          </span>
        ) : null}
      </Box>
      <Flex justify="space-between">
        <Flex fontSize="small" alignItems="center" gap="4rem">
          <p>WPM: {wpm}</p>
          <p>CPM: {cpm}</p>
          {phase === 2 && startTime && endTime ? (
            <>
              <p>
                Accuracy: {((correctChar / paragraph.length) * 100).toFixed(2)}%
              </p>
              <p>{time}s</p>
            </>
          ) : null}
        </Flex>
        <span>
          Hit{" "}
          <Kbd color="black" mx="2">
            Esc
          </Kbd>{" "}
          to restart
        </span>
      </Flex>
    </Flex>
  );
};

export default TextArea;
