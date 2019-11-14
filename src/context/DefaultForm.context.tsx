import React, { Component, createContext } from "react";

export interface IApp {
  state: IState;
  actions: IActions;
}

interface IState {
  isRender: boolean;
  isRenderForm: boolean;
}

interface IActions {
  handleRenderButton: () => void;
  handleRenderForm: () => void;
}

const ctxt = createContext<any>(null);

const AppContext = ctxt.Provider;

class AppProvider extends Component<{}, IState> {
  state: IState = {
    isRender: false,
    isRenderForm: false
  };

  handleRenderButton = () =>
    this.setState(prevState => ({ isRender: !prevState.isRender }));

  handleRenderForm = () => {
    this.setState(prevState => ({
      isRenderForm: !prevState.isRenderForm
    }));
  };

  render() {
    const { children } = this.props;
    return (
      <AppContext
        value={{
          state: this.state,
          actions: {
            handleRenderButton: this.handleRenderButton,
            handleRenderForm: this.handleRenderForm
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
