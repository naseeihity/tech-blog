import React from "react";

import style from "../style/footer.module.css";
const Footer = () => (
  <div className={style.footer}>
    <a href="/rss.xml" className={style.link} target="_blank">
      F E E D
    </a>
  </div>
);

export default Footer;
