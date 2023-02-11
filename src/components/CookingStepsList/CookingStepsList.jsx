import React from "react";
import CookingStep from "../pure/CookingStep/CookingStep";
import styles from "./CookingStepsList.module.css";

const defaultSteps = [
  {
    icon: {
      imgAlt: "icon to represent cut actions",
      img: "./src/assets/cookingIcons/cut.png",
    },
    desc: "Broccoli, Zanahoria, Panceta, Diente de ajo",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: "./src/assets/cookingIcons/pan.png",
    },
    desc: "Broccoli",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: "./src/assets/cookingIcons/pan.png",
    },
    desc: "Cuando Brocoli descongelado -> Añadir panceta",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: "./src/assets/cookingIcons/pan.png",
    },
    desc: "Cuando Panceta empieza a soltar grasa -> Añadir zanahoria",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: "./src/assets/cookingIcons/pan.png",
    },
    desc: "Cuando Broccoli y/o Zanahoria este casi lista -> Añadir ajo",
  },
  {
    icon: {
      imgAlt: "icon to represent adding spices actions",
      img: "./src/assets/cookingIcons/spices.png",
    },
    desc: "Sal pimentar al gusto...",
  },
  {
    icon: {
      imgAlt: "icon to represent serving actions",
      img: "./src/assets/cookingIcons/serve.png",
    },
    desc: "Servir",
  },
];

const CookingStepsList = () => {
  return (
    <ul>
      {defaultSteps.map((step, i) => (
        <CookingStep cookingStepProp={step} key={i} />
      ))}
      {/* <CookingStep cookingStepProp={defaultCookingStep} /> */}
    </ul>
  );
};

export default CookingStepsList;
