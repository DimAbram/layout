import { motion } from "framer-motion";

import { MH3 } from "../UI";
import cn from "classnames";
import st from "./Maps.module.scss";

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
export const Maps = () => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.3, once: true }}
    className={cn(st.maps)}
  >
    <div className='wrapper'>
      <MH3 custom={1} variants={textAnimation} text='Район на карте' />
      <motion.div
        custom={2}
        variants={textAnimation}
        className={st.maps__map}
      ></motion.div>
    </div>
  </motion.div>
);
