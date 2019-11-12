import React, { Component } from "react";
import styles from "./RenderButton.module.scss";
import DefaultForm from "../DefaultForm/DefaultForm";

type RenderButtonProps = {
  handleButton: () => {};
};

const RenderButton = ({ handleButton }: RenderButtonProps) => {
  // console.log("isRender :", isRender);
  return (
    <button className={styles.renderButton} onClick={handleButton}>
      Generate
    </button>
  );
};

export default RenderButton;
