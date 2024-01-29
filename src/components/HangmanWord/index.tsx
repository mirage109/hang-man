type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};
export const HangmanWord = ({guessedLetters, wordToGuess}:HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <div
            key={index}
            style={{
              borderBottom: ".1em solid black",
              width: "1em",
              textAlign: "center",
            }}
          >
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </div>
        );
      })}
    </div>
  );
};
