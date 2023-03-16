import { motion, useTransform, useViewportScroll } from "framer-motion";

import { Logo } from "../UI";
import cn from "classnames";
import st from "./Menu.module.scss";

export const Menu = () => {
  const { scrollY } = useViewportScroll();
  const bgColor = ["none", "rgb(36, 43, 51, 0.5)", "rgb(36, 43, 51)"];
  const offsetY = [0, 100, 300];
  const color = useTransform(scrollY, offsetY, bgColor);
  return (
    <motion.div style={{ background: color }} className={cn(st.menu)}>
      <div className={cn("wrapper", st.menu__wrapper)}>
        <Logo />
        <ul className={st.menu__links}>
          <li className={st.menu__li}>
            <a href='#!'>О комплексе</a>
          </li>
          <li className={st.menu__li}>
            <a href='#!'>Район</a>
          </li>
          <li className={st.menu__li}>
            <a href='#!'>Каталог квартир</a>
          </li>
          <li className={st.menu__li}>
            <a href='#!'>Ипотека</a>
          </li>
          <li className={st.menu__li}>
            <a href='#!'>Контакты</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
