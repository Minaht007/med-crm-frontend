import { Component } from "react";
import style from "./headerNav.module.scss";

class HeaderNav extends Component {
  render() {
    return (
      <>
        <ul className={style.navTitle}>
          <li className={style.navList}>
            <a href="/">Записатися</a>
          </li>
          <li className={style.navList}>
            <a href="/about">Лікарі</a>
          </li>
          <li className={style.navList}>
            <a href="/contact">Таріфи</a>
          </li>
          <li className={style.navList}>
            <a href="/contact">Таріфи</a>
          </li>
        </ul>
      </>
    );
  }
}

export default HeaderNav;
