import React, { Component } from "react";
import styles from "./Form.module.scss";
import { AppConsumer, IApp } from "../../context/DefaultForm.context";
import Input from "../Input/Input";

interface IForm {
  renderCondition: () => void;
  renderForm: () => void;
  renderSubForm: () => void;
  isRenderSubForm: boolean;
}
type IState = {
  counter: number;
};
class Form extends Component<any, IState> {
  state = {
    counter: 0
  };
  componentDidUpdate(prevProps: IApp, prevState: IState) {
    console.log("prevState.counter :", prevState.counter);
    console.log("this.state.counter :", this.state.counter);
    prevState.counter !== this.state.counter && this.renderSingleForm();
  }

  handleRenderSubForm = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  renderCondition = () => (
    <label>
      Condition
      <select>
        <option>Equals</option>
        <option>Greater than</option>
        <option>Less than</option>
      </select>
    </label>
  );

  renderAnswer = () => (
    <select>
      <option>yes</option>
    </select>
  );

  renderButtons = (
    <AppConsumer>
      {(ctx: IApp) => (
        <div className={styles.buttonsContainer}>
          <button type="submit">Add Sub-Input</button>
          <button onClick={ctx.actions.handleRenderForm}>Delete</button>
        </div>
      )}
    </AppConsumer>
  );

  renderSingleForm = () => (
    <form
      className={styles.form}
      onSubmit={e => {
        e.preventDefault();
        this.handleRenderSubForm();
      }}
    >
      {this.renderCondition()}
      {this.renderAnswer()}
      <Input />
      <Input isSelectList />
      {this.renderButtons}
    </form>
  );

  render() {
    return this.renderSingleForm();
  }
}
export default Form;
