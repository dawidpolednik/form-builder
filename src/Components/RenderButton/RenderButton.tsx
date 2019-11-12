import React, { Component } from "react";
import styles from "./RenderButton.module.scss";

class RenderButton extends Component {
  render() {
    return <button className={styles.renderButton}>Generate</button>;
  }
}
export default RenderButton;
