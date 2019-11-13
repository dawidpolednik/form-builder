import React, { Component } from "react";
import { AppConsumer, IApp } from "../../context/App.contest";
import DefaultForm from "../DefaultForm/DefaultForm";

const FormList = () => {
  return (
    <AppConsumer>
      {(ctx: IApp) =>
        ctx.state.isRender ? <DefaultForm /> : ctx.actions.handleRenderButton
      }
    </AppConsumer>
  );
};
export default FormList;
