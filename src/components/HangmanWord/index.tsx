import styles from './style.module.css';

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  revial?: boolean;
};

export const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  revial = false,
}: HangmanWordProps) => {
  return (
    <div className={styles.hangmanWordContainer}>
      {wordToGuess.split("").map((letter, index) => {
        return (
          <div key={index} className={styles.hangmanLetterContainer}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || revial
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && revial ? "red" : "black",
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