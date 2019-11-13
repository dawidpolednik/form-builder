import React from "react";
import styles from "./RenderButton.module.scss";
import { AppConsumer, IApp } from "../../context/App.contest";

// type RenderButtonProps = {
//   handleButton: () => void;
// };

const RenderButton = ({}) => {
  return (
    <AppConsumer>
      {(ctx: IApp) => {
        return (
          <button
            className={styles.renderButton}
            onClick={ctx.actions.handleRenderButton}
          >
            Generate
          </button>
        );
      }}
    </AppConsumer>
  );
};

export default RenderButton;
