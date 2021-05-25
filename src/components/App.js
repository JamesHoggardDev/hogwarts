import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsData from "../porkers_data";
// import HelloWorld from "./HelloWorld";
import PigPen from "./PigPen"
import Buttons from "./Buttons"

class App extends Component {

  state = {
    hogs: [],
    filterTerm: "All"
  }

  handleFilterTerm = (newFilterTerm) => {
    this.setState({
      filterTerm: newFilterTerm
    })
  }

  componentDidMount() {
    this.setState({
      hogs: hogsData
    })
  }

  arrayToSendDown = () => {
    let theArray = this.state.hogs
    if (this.state.filterTerm === "Greased") {
      theArray = this.state.hogs.filter(hog => hog.greased)
    } else if (this.state.filterTerm === "Non Greased"){
      theArray = this.state.hogs.filter(hog => !hog.greased)
    } else if(this.state.filterTerm === "All"){
      theArray = [...this.state.hogs]
    }

    theArray = [...theArray].sort((hogA, hogB) => {
      return hogA.weight - hogB.weight
    })

    // theArray = [...theArray].sort((hogA, hogB) => {
    //   return hogA.name.localeCompare(hogB.name)
    // })

    return theArray
  }

  render() {
      console.log(this.state, "APP STATE")

    return (
      <div className="App">
        <Nav />
        <Buttons
          filterTerm={this.state.filterTerm}
          handleFilterTerm={this.handleFilterTerm}
        />
        <PigPen 
        hogs={this.arrayToSendDown()}
        />
        
      </div>
    );
  }
}

export default App;


