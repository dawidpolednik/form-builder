import React from "react";
import styles from "./Input.module.scss";
import { AppConsumer, IApp } from "../../context/DefaultForm.context";
import { IDefaultFormState } from "../DefaultForm/DefaultForm";

// enum Type {
//   yes = "yes",
//   no = "no"
// }

// type InputProps = {
//   isSelectList?: Boolean;
//   type: String;
//   question: String;
//   handleChangeQuestion: any;
//   handleChangeType: any;
// };

const renderInput: any = (
  <label>
    Question<input className={styles.input} type="text"></input>
  </label>
);

const renderSelectList: any = (
  <label>
    Type
    <select name="type">
      <option>Yes / No</option>
    </select>
  </label>
);

const Input = ({ isSelectList }: IDefaultFormState) => {
  return !isSelectList ? renderInput : renderSelectList;
};
export default Input;
