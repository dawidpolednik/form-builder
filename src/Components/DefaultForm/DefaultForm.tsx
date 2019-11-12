import React, { Component } from "react";
import styles from "./DefaultForm.module.scss";

class DefaultForm extends Component {
  render() {
    return <button className={styles.renderButton}>Generate</button>;
  }
}
export default DefaultForm;
