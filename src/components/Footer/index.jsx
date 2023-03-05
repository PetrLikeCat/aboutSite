import React from "react";
import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={s.footer_about}>
        <h3>Обо мне</h3>
        <p>
          Соблюдение дедлайнов и нацеленность на результат.
          <br />-Большое желание развиваться в сфере Fronend-разработки и приносить пользу бизнесу.
          <br />-Готов быстро освоить технологии, требуемые на конкретном проекте.
          <br />-Pre-Intermediate. На уровне чтения технической документации.
        </p>
      </div>
      <div className={s.footer_Img}></div>
    </footer>
  );
};
