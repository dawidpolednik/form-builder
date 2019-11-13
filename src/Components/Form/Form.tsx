import React, { Component } from "react";
import styles from "./Form.module.scss";
import { AppConsumer, IApp } from "../../context/DefaultForm.context";
import Input from "../Input/Input";

interface IForm {
  renderCondition: () => void;
  renderForm: () => void;
}

class Form extends Component<{}, IForm> {
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
          <button type="button">Add Sub-Input</button>
          <button onClick={ctx.actions.handleRenderForm}>Delete</button>
        </div>
      )}
    </AppConsumer>
  );

  renderSingleForm = () => (
    <form className={styles.form}>
      {this.renderCondition()}
      {this.renderAnswer()}
      <Input />
      <Input isSelectList />
      {this.renderButtons}
    </form>
  );
  //   renderForm = () => (
  //     <AppConsumer>
  //       {(ctx: IApp) =>
  //         ctx.state.counter === 1 ? this.renderSingleForm() : this.renderForm()
  //       }
  //     </AppConsumer>
  //   );

  render() {
    return this.renderSingleForm();
  }
}
export default Form;
