import React, { Component } from "react";
import { AppConsumer, IApp } from "../../context/App.contest";
import DefaultForm from "../DefaultForm/DefaultForm";

class FormList extends Component {
  render() {
    return (
      <AppConsumer>
        {(ctx: IApp) => ctx.state.isRender && <DefaultForm />}
      </AppConsumer>
    );
  }
}
export default FormList;
