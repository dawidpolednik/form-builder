import React, { Component, createContext } from "react";

export interface IApp {
  state: IState;
  actions: IActions;
}

interface IState {
  isRender: boolean;
}

interface IActions {
  handleRenderButton: () => void;
}

const ctxt = createContext<any>(null);

const AppContext = ctxt.Provider;

class AppProvider extends Component<{}, IState> {
  state: IState = {
    isRender: false
  };
  handleRenderButton = () =>
    this.setState(prevState => ({ isRender: !prevState.isRender }));

  render() {
    const { children } = this.props;
    return (
      <AppContext
        value={{
          state: this.state,
          actions: { handleRenderButton: this.handleRenderButton }
        }}
      >
        {children}
      </AppContext>
    );
  }
}
export { AppProvider };
export const AppConsumer = ctxt.Consumer;
