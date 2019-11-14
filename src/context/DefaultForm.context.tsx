import React, { Component, createContext } from "react";

export interface IApp {
  state: IState;
  actions: IActions;
}

interface IState {
  isRender: boolean;
  isRenderForm: boolean;
  counter: number;
  isRenderSubForm: boolean;
}

interface IActions {
  handleRenderButton: () => void;
  handleRenderForm: () => void;
  handleRenderSubForm: () => void;
}

const ctxt = createContext<any>(null);

const AppContext = ctxt.Provider;

class AppProvider extends Component<{}, IState> {
  state: IState = {
    isRender: false,
    isRenderForm: false,
    counter: 0,
    isRenderSubForm: false
  };

  handleRenderButton = () =>
    this.setState(prevState => ({ isRender: !prevState.isRender }));

  handleRenderForm = () => {
    this.setState(
      prevState => ({
        isRenderForm: !prevState.isRenderForm,
        counter: prevState.counter + 1
      }),
      () => console.log("this.state.counter :", this.state.counter)
    );
  };

  handleRenderSubForm = () => {
    this.setState(
      prevState => ({
        counter: prevState.counter + 1
      }),
      () => {
        console.log("this.state.counter :", this.state.counter);
      }
    );
  };

  render() {
    const { children } = this.props;
    return (
      <AppContext
        value={{
          state: this.state,
          actions: {
            handleRenderButton: this.handleRenderButton,
            handleRenderForm: this.handleRenderForm,
            handleRenderSubForm: this.handleRenderSubForm
          }
        }}
      >
        {children}
      </AppContext>
    );
  }
}
export { AppProvider };
export const AppConsumer = ctxt.Consumer;
