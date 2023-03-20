import { motion } from "framer-motion";

import { MH3, MInput, MButton } from "../UI";

import cn from "classnames";
import st from "./Cra.module.scss";

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

export const Cra = () => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.5, once: true }}
    className={cn(st.cra)}
  >
    <div className={cn(st.cra__wrapper, "wrapper")}>
      <div className={st.cra__info}>
        <MH3
          className={st.cra__h3}
          custom={1}
          variants={textAnimation}
          style={{ marginBottom: "50px" }}
          text='Хотите посмотреть?'
        />
        <motion.span
          custom={2}
          variants={textAnimation}
          className={st.cra__text}
        >
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов.{" "}
        </motion.span>
      </div>
      <motion.form
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.5, once: true }}
        className={st.cra__form}
      >
        <MInput
          className={st.cra__input}
          custom={1}
          variants={textAnimation}
          placeholder='Ваше имя'
        />
        <MInput
          className={st.cra__input}
          custom={2}
          variants={textAnimation}
          placeholder='Ваш телефон'
        />
        <motion.span
          custom={3}
          variants={textAnimation}
          className={st.cra__formText}
        >
          *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
        </motion.span>
        <MButton className={st.cra__input} custom={4} variants={textAnimation}>
          Посмотреть район
        </MButton>
      </motion.form>
    </div>
  </motion.div>
);
