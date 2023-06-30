import style from "./headerNav.module.scss";
import { useState } from "react";

export const HeaderNav = ({ items }) => {
  const [activeIndex, setactivIndex] = useState(0);

  const element = items.map(({ id, link }, index) => {
    return (
      <li className={style.item} key={id}>
        <a
          onClick={() => setactivIndex(index)}
          href={link}
          className={style.link}
        >
          {items[index].name}
        </a>
      </li>
    );
  });
  return <ul>{element}</ul>;
};
