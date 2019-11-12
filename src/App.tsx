import React, { Component } from "react";
import styles from "./App.module.scss";
import RenderButton from "./Components/RenderButton/RenderButton";
import DefaultForm from "./Components/DefaultForm/DefaultForm";

type AppState = { isRender: Boolean };

class App extends Component<{}, AppState> {
  state = {
    isRender: false
  };

  handleRenderButton = () =>
    this.setState(prevState => ({ isRender: !prevState.isRender } as AppState));

  // deleteForm = () =>(
  //   this.setState
  // )

  render() {
    const { isRender } = this.state;
    return (
      <div className="App">
        <section className={styles.container}>
          <RenderButton handleButton={this.handleRenderButton} />
          {isRender && <DefaultForm deleteForm={this.handleRenderButton} />}
        </section>
      </div>
    );
  }
}

export default App;
