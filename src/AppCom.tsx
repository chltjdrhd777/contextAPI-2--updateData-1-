import React, { Component } from "react";
import AppPresenter from "./App";
import store from "./Store";

//Provider can give me an access to the storage
//I can change the stored value like that
//To get and use this value, I can use store.consume

//note, if I use constructor, It means that I want to replace state with new one without no redundant code
//contex API is dependent on constructor. If I want to realize some function, it must be stored in constructor

class App extends Component {
  state: { notification: { id: number; text: string; seen: boolean }[] };

  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      notification: [
        { id: 1, text: "one", seen: false },

        { id: 2, text: "two", seen: false },

        { id: 3, text: "three", seen: false },
      ],
    };
  }

  render() {
    return (
      <store.Provider value={this.state}>
        <AppPresenter />
      </store.Provider>
    );
  }
}

export default App;
