import React from "react";
import styles from "./Input.module.scss";

type InputProps = {
  isSelectList?: Boolean;
};

const renderInput = (
  <label>
    Question<input className={styles.input} type="text"></input>
  </label>
);

const renderSelectList = (
  <select name="type">
    <option>Yes</option>
    <option>No</option>
  </select>
);

const Input = ({ isSelectList }: InputProps) => {
  return !isSelectList ? renderInput : renderSelectList;
};
export default Input;
