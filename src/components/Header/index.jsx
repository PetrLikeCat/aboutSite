import React from "react";
import video from "..//../video/videoplayback.mp4";
import { ButtonCyper } from "../ButtonCyper";
import s from "./header.module.scss";
import { NavBar } from "./NavBar";

export const Header = () => {
  return (
    <header>
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <NavBar />
      <div className={s.colle}>
        <h1>Сайт профессионального разработчика</h1>
        <ButtonCyper title={"colle me"} />
      </div>
    </header>
  );
};
