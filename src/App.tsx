import React, { Component } from "react";
import styles from "./App.module.scss";
import RenderButton from "./Components/RenderButton/RenderButton";
import DefaultForm from "./Components/DefaultForm/DefaultForm";
import FormList from "./Components/FormList/FormList";
import { AppProvider } from "./context/App.contest";

interface IApp {
  isRender: Boolean;
  isLoading: Boolean;
}

class App extends Component<any, IApp> {
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
    this.setState(prevState => ({ isRender: !prevState.isRender }));

  render() {
    return (
      <AppProvider>
        <div className="App">
          <section className={styles.container}>
            <RenderButton />
            <FormList />
          </section>
        </div>
      </AppProvider>
    );
  }
}

export default App;
