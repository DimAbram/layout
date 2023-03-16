import { motion } from "framer-motion";
import { ReactComponent as Bench } from "../../static/img/svg/bench.svg";
import { ReactComponent as Building } from "../../static/img/svg/building.svg";
import { ReactComponent as Bicycle } from "../../static/img/svg/bicycle.svg";
import { ReactComponent as Fountain } from "../../static/img/svg/fountain.svg";

import cn from "classnames";
import st from "./Testimonials.module.scss";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible:(custom)=> ({
    x: 0,
    opacity: 1,
    transition: {delay: custom*0.2}
  }),
};

export const Testimonials = () => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 1, once: true }}
    className={cn(st.testimonials)}
  >
    <div className={st.testimonials__container}>
      <motion.div
        custom={1}
        variants={textAnimation}
        className={st.testimonials__item}
      >
        <Bench className={st.testimonials__img} />
        <span className={st.testimonials__text}>
          Рядом исторические парки и скверы
        </span>
      </motion.div>
      <motion.div
        custom={2}
        variants={textAnimation}
        className={st.testimonials__item}
      >
        <Building className={st.testimonials__img} />
        <span className={st.testimonials__text}>Полностью обустроенный</span>
      </motion.div>
      <motion.div
        custom={3}
        variants={textAnimation}
        className={st.testimonials__item}
      >
        <Fountain className={st.testimonials__img} />
        <span className={st.testimonials__text}>10 фонтанов на территории</span>
      </motion.div>
      <motion.div
        custom={4}
        variants={textAnimation}
        className={st.testimonials__item}
      >
        <Bicycle className={st.testimonials__img} />
        <span className={st.testimonials__text}>6 км велодорожек</span>
      </motion.div>
    </div>
  </motion.div>
);
