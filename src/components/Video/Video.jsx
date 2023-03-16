import { motion } from "framer-motion";

import cn from "classnames";
import st from "./Video.module.scss";

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

export const Video = () => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.3, once: true }}
    className={cn(st.video)}
  >
    <motion.div
      custom={1}
      variants={textAnimation}
      className={st.video__container}
    ></motion.div>
  </motion.div>
);
