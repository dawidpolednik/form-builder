import React, { Component } from "react";
import styles from "./DefaultForm.module.scss";
import Input from "../Input/Input";

interface IDefaultForm {
  type: String | Number | Boolean;
  isEquals: Boolean;
  isSelected: Boolean;
  isGreater: Boolean;
  isLess: Boolean;
  isSelectList: Boolean;
}

// type DefaultFormProps = {
//   disableForm: () => void;
// };

class DefaultForm extends Component<any, IDefaultForm> {
  state = {
    type: "",
    isEquals: false,
    isSelected: false,
    isGreater: false,
    isLess: false,
    isSelectList: true
  };

  renderButtons = (
    <div className={styles.buttonsContainer}>
      <button type="button">Add Sub-Input</button>
      <button onClick={this.props.disableForm}>Delete</button>
    </div>
  );

  renderForm = (
    <form className={styles.defaultForm}>
      <Input />
      <Input isSelectList />
      {this.renderButtons}
    </form>
  );
  render() {
    return this.renderForm;
  }
}
export default DefaultForm;
