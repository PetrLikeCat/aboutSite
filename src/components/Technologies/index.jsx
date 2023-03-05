import React from "react";
import s from "./technologies.module.scss";
export const Technologies = () => {
  return (
    <div className={s.content}>
      <h2>Мой стек технологий</h2>
      <div className={s.technologies}>
        <div className={s.fronend}>
          <h3>FronEnd</h3>
          <p>
            JavaSript(ES6+), TypeScript
            <br /> Redux, Redux Toolkit, Redux Thunk, Redux Saga <br /> HTML,
            CSS, Bootstrap SCSS / styled-components /CSS Modules
            <br /> React Router v6 <br /> Material UI, Bootstrap,
            React-Bootstrap Webpack / Gulp,
          </p>
        </div>
        <div className={s.backend}>
          <h3>BackEnd</h3>
          <p>
            Node.js, Express js
            <br /> PostgreSQL, Mongodb
          </p>
        </div>
        <div className={s.other}>
          <h3>Other</h3>
          <p>Git , GitHub , GitLab<br /> Prettier, JSON</p>
        </div>
      </div>
    </div>
  );
};
