import React, { Component } from "react";
import styles from "./DefaultForm.module.scss";
import Input from "../Input/Input";
import { AppConsumer, IApp } from "../../context/DefaultForm.context";

export interface IDefaultForm {
  state: IDefaultFormState;
  actions: IDefaultFormActions;
}

export interface IDefaultFormState {
  isSelectList?: Boolean;
  type: String;
  question: String;
  children: any[];
}

interface IDefaultFormActions {
  handleChangeType: () => void;
  handleChangeQuestion: () => void;
}

class DefaultForm extends Component<any, IDefaultFormState> {
  state = {
    type: "yes",
    question: "",
    children: []
  };

  handleChangeType = (e: React.ChangeEvent<HTMLSelectElement>): any => {
    e.preventDefault();
    return this.setState({
      ...this.state,
      type: e.target.value
    });
  };

  handleChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>): any => {
    e.preventDefault();
    return this.setState({
      ...this.state,
      question: e.target.value
    });
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
      {/* <Input
        question={this.state.question}
        handleChangeQuestion={this.handleChangeQuestion}
      />
      <Input
        isSelectList
        type={this.state.type}
        handleChangeType={this.handleChangeType}
      /> */}
      {this.renderButtons}
    </form>
  );

  render() {
    return this.renderDefaultForm;
  }
}
export default DefaultForm;
