import { useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./components/HangmanDrawing";
import { HangmanWord } from "./components/HangmanWord";
import { Keyboard } from "./components/Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "800px",
        margin: "0 auto",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div style={{fontSize:"2rem", textAlign:"center"}}>
        Lose
        Won
      </div>
      <HangmanDrawing />
      <HangmanWord/>
      <Keyboard/>
    </div>
  );
}

export default App;
