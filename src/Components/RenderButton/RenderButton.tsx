import React from "react";
import styles from "./RenderButton.module.scss";

type RenderButtonProps = {
  handleButton: () => void;
};

const RenderButton = ({ handleButton }: RenderButtonProps) => {
  return (
    <button className={styles.renderButton} onClick={handleButton}>
      Generate
    </button>
  );
};

export default RenderButton;
