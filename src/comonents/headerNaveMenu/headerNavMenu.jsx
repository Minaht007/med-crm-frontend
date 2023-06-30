import { Component } from "react";

class HedNavMenu extends Component {
  state = {
    activeIndex: 0,
  };
  handlclick(index) {
    this.setState = {
      activeIndex: index,
    };
  }
  render() {
    const { link } = this.props;
    const { activeIndex } = this.state;
    return (
      <>
        <ul className={style.navTitle}>
          <li className={style.navList}>
            <a className={style.navLink} href="/">
              Записатися
            </a>
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

export default HedNavMenu;
