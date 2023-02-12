import React, { useEffect, useState } from "react";

import styles from "./CookingStep.module.css";
import { FaTrash } from "react-icons/fa";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CookingStep = ({
  cookingStepProp,
  editStep,
  deleteStep,
  setSnackDeleteOpen,
}) => {
  const [cookingStep, setCookingStep] = useState(cookingStepProp);
  const [striked, setStriked] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState(cookingStep.desc);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

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
      const newStep = { ...cookingStep, desc: input };
      editStep(newStep);
      setCookingStep(newStep);
    }

    setEditMode(!editMode);
  }

  function handleDeleteOnClick() {
    setConfirmDeleteOpen(true);
  }

  function handleConfirmDeleteClose(op) {
    setConfirmDeleteOpen(false);
    if (op === "YES") {
      deleteStep(cookingStep);
      setSnackDeleteOpen(true);
    }
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
        <div>
          <input
            type="text"
            value={input}
            onChange={handleOnChange}
            onKeyUp={handleOnKeyUp}
          />
          <FaTrash className={styles.icon} onClick={handleDeleteOnClick} />
        </div>
      ) : (
        <span>{cookingStep.desc}</span>
      )}
      <Dialog
        open={confirmDeleteOpen}
        onClose={handleConfirmDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this step?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmDeleteClose("NO")}>NO</Button>
          <Button onClick={() => handleConfirmDeleteClose("YES")} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
};

export default CookingStep;
