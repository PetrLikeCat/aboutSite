import * as React from "react";
import { Item } from "./item";

import siteCoffee from "..//../img/siteCoffee.png"
import siteXiaomi from "..//../img/siteXiaomi.png"
import siteElectro from "..//../img/siteElectro.png"
import s from "./Portfolio.module.scss"
const dateCart = [
  {
    id: 1,
    title: "coffe",
    text: "Адаптивный сайт, написанный на React, scss и React-Bootstrap",
    img: siteCoffee,
    link: "https://github.com/Petr-lover-of-justice/coffee"
  },
  {
    id: 2,
    title: "Магазин Xiaomi",
    text: "Сайт на React, TypeScript,scss, React Router v6, Redux Toolkit",
    img: siteXiaomi,
    link: "https://github.com/Petr-lover-of-justice/shopXiaomi.git"
  },
  {
    id: 3,
    title: "Лендинг",
    text: "Адаптивный cайт написанный на Jquery,SCSS,HTML,",
    img: siteElectro,
    link: "https://github.com/Petr-lover-of-justice/layout-electronic-landing-page"
  },
];
export const Portfolio = () => {
  const cart = dateCart.map((item, i) => <Item key={i} {...item} />);
  return (
    <div className={s.portfolio}>
      <h2>Моё портфолие:</h2>
      <div className={s.portfolio__cart}>{cart}</div>
    </div>
  );
};
