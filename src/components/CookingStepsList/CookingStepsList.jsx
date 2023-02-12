import React, { useState, useEffect } from "react";
import CookingStep from "../pure/CookingStep/CookingStep";
import { v4 as uuidv4 } from "uuid";

import styles from "./CookingStepsList.module.css";

//img's
import cutImg from "../../assets/cookingIcons/cut.png";
import boilImg from "../../assets/cookingIcons/boil.png";
import mixImg from "../../assets/cookingIcons/mix.png";
import panImg from "../../assets/cookingIcons/pan.png";
import serveImg from "../../assets/cookingIcons/serve.png";
import spicesImg from "../../assets/cookingIcons/spices.png";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const defaultSteps = [
  {
    icon: {
      imgAlt: "icon to represent cut actions",
      img: cutImg,
    },
    id: uuidv4(),
    desc: "Broccoli, Zanahoria, Panceta, Diente de ajo",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    id: uuidv4(),
    desc: "Broccoli",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    id: uuidv4(),
    desc: "Brocoli descongelado ? Add panceta",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    id: uuidv4(),
    desc: "Panceta suelta grasa ? Add zanahoria",
  },
  {
    icon: {
      imgAlt: "icon to represent cooking in pan actions",
      img: panImg,
    },
    id: uuidv4(),
    desc: "Broccoli o Zanahoria esta casi lista ? Add ajo",
  },
  {
    icon: {
      imgAlt: "icon to represent adding spices actions",
      img: spicesImg,
    },
    id: uuidv4(),
    desc: "Sal pimentar al gusto...",
  },
  {
    icon: {
      imgAlt: "icon to represent serving actions",
      img: serveImg,
    },
    id: uuidv4(),
    desc: "Servir",
  },
];

const CookingStepsList = () => {
  const [steps, setSteps] = useState(defaultSteps);
  const [snackDeleteOpen, setSnackDeleteOpen] = useState(false);

  function editStep(step) {
    const stepIndex = steps.findIndex((ele) => ele.id == step.id);
    steps[stepIndex] = step;
    setSteps([...steps]);
  }

  function deleteStep(step) {
    const filtered = steps.filter((ele) => ele.id !== step.id);
    setSteps(filtered);
  }

  useEffect(() => {
    if (snackDeleteOpen) console.log("should open snackbar");
  }, [snackDeleteOpen]);

  function handleSnackConfirmDelClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setSnackDeleteOpen(false);
  }

  return (
    <ul>
      {steps.map((step) => (
        <CookingStep
          cookingStepProp={step}
          key={step.id}
          editStep={editStep}
          deleteStep={deleteStep}
          setSnackDeleteOpen={setSnackDeleteOpen}
        />
      ))}
      <Snackbar
        open={snackDeleteOpen}
        autoHideDuration={6000}
        onClose={handleSnackConfirmDelClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackConfirmDelClose}
          severity="info"
          sx={{ width: "100%" }}
        >
          Paso eliminado!
        </Alert>
      </Snackbar>
    </ul>
  );
};

export default CookingStepsList;
