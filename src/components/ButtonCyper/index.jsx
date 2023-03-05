import React from "react";
import s from "./Button.module.scss";
export const ButtonCyper = ({ title, linkButton }) => {
  return (
    <>
      <a href={linkButton}>
        <button className={s.cybr_btn}>
          {title}
          <span aria-hidden></span>
          <span aria-hidden className={s.cybr_btn__glitch}>
            Clicks_
          </span>
          <span aria-hidden className={s.cybr_btn__tag}>
            Наведи
          </span>
        </button>
      </a>
    </>
  );
};
