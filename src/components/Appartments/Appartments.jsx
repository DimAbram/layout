import { motion } from "framer-motion";

import { MH3 } from "../UI";
import appart1 from "../../static/img/Rectangle-appart.png";
import appart2 from "../../static/img/Rectangle-appart2.png";
import cn from "classnames";
import st from "./Appartments.module.scss";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const Appartments = () => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.5, once: true }}
    className={cn(st.appartments)}
  >
    <div className='wrapper'>
      <MH3 custom={1} variants={textAnimation} text='Наши квартиры' />
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.4, once: true }}
        className={st.appartments__cards}
      >
        <motion.figure
          custom={1}
          variants={textAnimation}
          className={st.appartments__card}
        >
          <img className={st.appartments__img} src={appart1} alt='appart1' />
          <figcaption className={st.appartments__text}>
            Лофт — 3 этажа
          </figcaption>
        </motion.figure>
        <motion.figure
          custom={2}
          variants={textAnimation}
          className={st.appartments__card}
        >
          <img className={st.appartments__img} src={appart2} alt='appart2' />
          <figcaption className={st.appartments__text}>
            Лофт — 2 этажа
          </figcaption>
        </motion.figure>
        <motion.figure
          custom={3}
          variants={textAnimation}
          className={st.appartments__card}
        >
          <img className={st.appartments__img} src={appart1} alt='appart1' />
          <figcaption className={st.appartments__text}>
            Лофт — 3 этажа
          </figcaption>
        </motion.figure>
        <motion.figure
          custom={4}
          variants={textAnimation}
          className={st.appartments__card}
        >
          <img className={st.appartments__img} src={appart2} alt='appart2' />
          <figcaption className={st.appartments__text}>
            Лофт — 2 этажа
          </figcaption>
        </motion.figure>
      </motion.div>
    </div>
  </motion.div>
);
