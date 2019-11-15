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

  renderForm = () => (
    <AppConsumer>
      {(ctx: IApp) => ctx.state.isRenderForm && <Form />}
    </AppConsumer>
  );
  render() {
    return (
      <React.Fragment>
        {this.renderInitialForm()}
        {this.renderForm()}
      </React.Fragment>
    );
  }
}
export default FormList;
