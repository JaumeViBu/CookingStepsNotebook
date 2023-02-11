import React, { useState } from "react";
import CookingStep from "../pure/CookingStep/CookingStep";
import styles from "./CookingStepsList.module.css";

//img's
import cutImg from "../../assets/cookingIcons/cut.png";
import boilImg from "../../assets/cookingIcons/boil.png";
import mixImg from "../../assets/cookingIcons/mix.png";
import panImg from "../../assets/cookingIcons/pan.png";
import serveImg from "../../assets/cookingIcons/serve.png";
import spicesImg from "../../assets/cookingIcons/spices.png";

const defaultSteps = [
  {
    icon: {
      imgAlt: "icon to represent cut actions",
      img: cutImg,
    },
    desc: "Broccoli, Zanahoria, Panceta, Diente de ajo",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    desc: "Broccoli",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    desc: "Brocoli descongelado ? Add panceta",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    desc: "Panceta suelta grasa ? Add zanahoria",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    desc: "Broccoli o Zanahoria esta casi lista ? Add ajo",
  },
  {
    icon: {
      imgAlt: "icon to represent adding spices actions",
      img: spicesImg,
    },
    desc: "Sal pimentar al gusto...",
  },
  {
    icon: {
      imgAlt: "icon to represent serving actions",
      img: serveImg,
    },
    desc: "Servir",
  },
];

const CookingStepsList = () => {
  const [steps, setSteps] = useState(defaultSteps);

  return (
    <ul>
      {steps.map((step, i) => (
        <CookingStep cookingStepProp={step} key={i} />
      ))}
    </ul>
  );
};

export default CookingStepsList;
