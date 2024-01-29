export const HangmanWord = () => {
  const word = "hello";
  const guessedLetters = ["e"];
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
      {word.split("").map((letter, index) => {
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
