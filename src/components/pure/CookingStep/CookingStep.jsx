import React, { useState } from "react";
import styles from "./CookingStep.module.css";

const CookingStep = ({ cookingStepProp }) => {
  const [cookingStep, setCookingStep] = useState(cookingStepProp);
  const [striked, setStriked] = useState(false);

  function handleLiOnClick(e) {
    setStriked(!striked);
  }

  return (
    <li className={striked ? styles.striked : ""} onClick={handleLiOnClick}>
      <img src={cookingStep.icon.img} alt={cookingStep.icon.imgAlt} />
      <span>{cookingStep.desc}</span>
    </li>
  );
};

export default CookingStep;
