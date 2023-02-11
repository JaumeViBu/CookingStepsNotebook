import React, { useEffect, useState } from "react";
import styles from "./CookingStep.module.css";

const CookingStep = ({ cookingStepProp }) => {
  const [cookingStep, setCookingStep] = useState(cookingStepProp);
  const [striked, setStriked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState(cookingStep.desc);

  function handleLiOnClick(e) {
    if (e.target.tagName == "SPAN") setStriked(!striked);
  }

  function handleLiOnContextMenu(e) {
    e.preventDefault();
    saveInput(e);
  }

  function handleOnChange(e) {
    setInput(e.target.value);
  }

  function handleOnKeyUp(e) {
    if (e.key == "Enter") saveInput(e);
  }

  function saveInput(e) {
    if (editMode) {
      setCookingStep({ ...cookingStep, desc: input });
    }

    setEditMode(!editMode);
  }

  return (
    <li
      className={`${striked ? styles.striked : ""} ${
        editMode ? styles.editMode : ""
      }`}
      onClick={handleLiOnClick}
      onContextMenu={handleLiOnContextMenu}
    >
      <img src={cookingStep.icon.img} alt={cookingStep.icon.imgAlt} />
      {editMode ? (
        <input
          type="text"
          value={input}
          onChange={handleOnChange}
          onKeyUp={handleOnKeyUp}
        />
      ) : (
        <span>{cookingStep.desc}</span>
      )}
    </li>
  );
};

export default CookingStep;
