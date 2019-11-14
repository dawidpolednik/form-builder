import React, { Component } from "react";
import { AppConsumer, IApp } from "../../context/DefaultForm.context";
import DefaultForm from "../DefaultForm/DefaultForm";
import Form from "../Form/Form";

class FormList extends Component {
  renderInitialForm = () => (
    <AppConsumer>
      {(ctx: IApp) => ctx.state.isRender && <DefaultForm />}
    </AppConsumer>
  );
  renderSingleForm = () => <Form />;

  isRender = () => (
    <AppConsumer>{(ctx: IApp) => this.renderSingleForm()}</AppConsumer>
  );

  renderForm = () => (
    <AppConsumer>
      {(ctx: IApp) => ctx.state.isRenderForm && this.isRender()}
    </AppConsumer>
  );
  render() {
    return (
      <>
        {this.renderInitialForm()}
        {this.renderForm()}
      </>
    );
  }
}
export default FormList;
