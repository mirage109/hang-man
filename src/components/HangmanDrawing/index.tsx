import { Head, Body, RightArm, LeftArm, RightLeg, LeftLeg } from "./bodyParts";
import styles from "./style.module.css";
const BodyParts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};
export const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {BodyParts.slice(0, numberOfGuesses)}
      <div className={styles.rope} />
      <div className={styles.top}/>
      <div className={styles.pole} />
      <div className={styles.base} />
    </div>
  );
};
