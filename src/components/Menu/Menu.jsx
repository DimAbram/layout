import { useEffect, useState, forwardRef } from "react";

import {
  motion,
  useTransform,
  useViewportScroll,
  AnimatePresence,
} from "framer-motion";

import { Logo } from "../UI";
import cn from "classnames";
import st from "./Menu.module.scss";

export const Menu = () => {
  const { scrollY } = useViewportScroll();
  const bgColor = ["none", "rgb(36, 43, 51, 0.5)", "rgb(36, 43, 51)"];
  const offsetY = [0, 100, 300];
  const color = useTransform(scrollY, offsetY, bgColor);

  const [burger, setBurger] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaWatcher = window.matchMedia("screen and (max-width: 768px)");
    setIsMobile(mediaWatcher.matches);

    function updateIsNarrowScreen(e) {
      setIsMobile(e.matches);
    }
    if(mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsNarrowScreen)
      }
    } else {
      mediaWatcher.addListener(updateIsNarrowScreen)
      return function cleanup() {
        mediaWatcher.removeListener(updateIsNarrowScreen)
      }
    }
  }, [])

  const handlerBurger = () => setBurger(!burger)

  return (
    <>
      <motion.div style={{ background: color }} className={cn(st.menu)}>
        <div className={cn("wrapper", st.menu__wrapper)}>
          <Logo />
          {isMobile ? (
            <BurgerButton click={handlerBurger} />
          ) : (
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
          )}
        </div>
      </motion.div>

      <AnimatePresence initial={false}>
        {burger && (
          <MBurgerContent
            click={handlerBurger}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const BurgerButton = ({click}) => {
  return (
    <div className={st.burgerButton} onClick={()=>click()}>
      <span className={st.burgerButton__span}></span>
      <span className={st.burgerButton__span}></span>
      <span className={st.burgerButton__span}></span>
    </div>
  );
}
const BurgerButtonClose = ({ click }) => {
  return <div onClick={() => click()} className={st.burgerButtonClose}></div>;
};
const BurgerContent = forwardRef(({click},ref) => {
  return (
    <div className={st.BurgerContent} ref={ref}>
      <BurgerButtonClose click={click}/>
      <ul className={st.BurgerContent__links}>
        <li className={st.BurgerContent__li}>
          <a href='#!'>О комплексе</a>
        </li>
        <li className={st.BurgerContent__li}>
          <a href='#!'>Район</a>
        </li>
        <li className={st.BurgerContent__li}>
          <a href='#!'>Каталог квартир</a>
        </li>
        <li className={st.BurgerContent__li}>
          <a href='#!'>Ипотека</a>
        </li>
        <li className={st.BurgerContent__li}>
          <a href='#!'>Контакты</a>
        </li>
      </ul>
    </div>
  );
});

const MBurgerContent = motion(BurgerContent);