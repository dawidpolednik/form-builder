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
          <button type="submit">Add Sub-Input</button>
          <button onClick={ctx.actions.handleRenderForm}>Delete</button>
        </div>
      )}
    </AppConsumer>
  );

  renderSingleForm = () => (
    <AppConsumer>
      {(ctx: IApp) => (
        <form
          className={styles.form}
          onSubmit={e => {
            e.preventDefault();
            ctx.actions.handleRenderSubForm();
          }}
        >
          {this.renderCondition()}
          {this.renderAnswer()}
          <Input />
          <Input isSelectList />
          {this.renderButtons}
        </form>
      )}
    </AppConsumer>
  );

  render() {
    return (
      <>
        {this.renderSingleForm()}
        <AppConsumer>
          {(ctx: IApp) => ctx.state.counter === 2 && this.renderSingleForm()}
        </AppConsumer>
      </>
    );
  }
}
export default Form;
