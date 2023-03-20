import { motion } from "framer-motion";
import { MH3, MInput, MButton } from "../UI";
import cn from "classnames";
import st from "./CraForm.module.scss";

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

export const CraForm = () => (
  <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.3, once: true }}
    className={cn(st.craForm)}
  >
    <div className='wrapper'>
      <MH3 custom={1} variants={textAnimation} text='Есть вопросы?' />
      <motion.form
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.3, once: true }}
        className={st.craForm__form}
      >
        <motion.span
          custom={1}
          variants={textAnimation}
          className={st.craForm__text}
        >
          *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.h
        </motion.span>
        <MInput
          className={st.craForm__input}
          custom={2}
          variants={textAnimation}
          placeholder='Ваше имя'
        />
        <MInput
          className={st.craForm__input}
          custom={3}
          variants={textAnimation}
          placeholder='Ваш телефон'
        />
        <MButton
          className={st.craForm__button}
          custom={4}
          variants={textAnimation}
        >
          Посмотреть район
        </MButton>
      </motion.form>
    </div>
  </motion.div>
);
