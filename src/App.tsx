import React, { Component } from "react";
import styles from "./App.module.scss";
import RenderButton from "./Components/RenderButton/RenderButton";
import DefaultForm from "./Components/DefaultForm/DefaultForm";

interface IApp {
  isRender: Boolean;
  isLoading: Boolean;
}

class App extends Component<{}, IApp> {
  state = {
    isRender: false,
    isLoading: false
  };

  // componentWillMount() {
  //   localStorage.getItem("forms") &&
  //     this.setState({
  //       ...this.state,
  //       // forms: JSON.parse(localStorage.getItem("forms")),
  //       isLoading: false
  //     });
  // }
  // componentWillUpdate(nextProps,nextState){
  //   localStorage.setItem("forms",JSON.stringify(nextState.forms));
  // }

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
          {isRender && <DefaultForm disableForm={this.handleRenderButton} />}
        </section>
      </div>
    );
  }
}

export default App;
