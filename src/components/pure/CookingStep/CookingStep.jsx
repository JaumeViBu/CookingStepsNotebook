import React, { useState } from "react";
import styles from "./CookingStep.module.css";

const CookingStep = ({ cookingStepProp }) => {
  // cookingStepProp = {
  //   icon: {
  //     imgAlt: "icon to represent cut actions",
  //     img: "./assets/cookingIcons/cut.png",
  //   },
  //   desc: "Broccoli",
  // };
  const [cookingStep, setCookingStep] = useState(cookingStepProp);

  return (
    <li>
      <img src={cookingStep.icon.img} alt={cookingStep.icon.imgAlt} />
      <span>{cookingStep.desc}</span>
    </li>
  );
};

export default CookingStep;
