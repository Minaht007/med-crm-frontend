import { Component } from "react";
import style from "./main.module";
import * as IMG from "../../images/logo.jpg";

class Header extends Component {
  render() {
    return (
      <div>
        console.log(IMG)
        <a href="/">
          <img className={style.img} src={IMG} alt="logo" />
        </a>
      </div>
    );
  }
}

export default Header;
