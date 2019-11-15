import React, { Component } from "react";
import styles from "./DefaultForm.module.scss";
import Input from "../Input/Input";
import { AppConsumer, IApp } from "../../context/DefaultForm.context";

interface IDefaultForm {
  type: String | Number | Boolean;
  isEquals: Boolean;
  isSelected: Boolean;
  isGreater: Boolean;
  isLess: Boolean;
  isSelectList: Boolean;
  children: any[];
}

class DefaultForm extends Component<any, IDefaultForm> {
  state = {
    type: "",
    isEquals: false,
    isSelected: false,
    isGreater: false,
    isLess: false,
    isSelectList: true,
    children: []
  };

  renderButtons = (
    <AppConsumer>
      {(ctx: IApp) => (
        <div className={styles.buttonsContainer}>
          <button type="button" onClick={ctx.actions.handleRenderForm}>
            Add Sub-Input
          </button>
          <button onClick={ctx.actions.handleRenderButton}>Delete</button>
        </div>
      )}
    </AppConsumer>
  );

  renderDefaultForm = (
    <form className={styles.defaultForm}>
      <Input />
      <Input isSelectList />
      {this.renderButtons}
    </form>
  );
  render() {
    return this.renderDefaultForm;
  }
}
export default DefaultForm;
