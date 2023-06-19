// const {state, useState} from "react"

import { Component } from "react";
import regForm from "./regForm";

class Regisry extends Component() {
  render() {
    return (
      <div>
        <h2>Заповніть поля</h2>
        console.log("Hello")
        <regForm />
      </div>
    );
  }
}

export default Regisry;
