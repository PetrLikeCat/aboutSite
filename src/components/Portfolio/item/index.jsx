import * as React from "react";
import { ButtonCyper } from "../../ButtonCyper";

import s from "./Item.module.scss"
export const Item = ({ id, title, text, img,link }) => {
  console.log(id, title, text, img);
  return (
    <div className={s.card}>
      <img className={s.card_img} src={img} alt="card" />
      <h3>{title}</h3>
      <p>{text}</p>
      <ButtonCyper title={"Код"} linkButton = {link} />
    </div>
  );
};
