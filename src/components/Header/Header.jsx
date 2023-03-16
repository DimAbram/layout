import {motion} from 'framer-motion'
import {MH1} from '../UI'

import cn from 'classnames'
import st from "./Header.module.scss";


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

 export const Header = () => (
   <motion.div
     initial='hidden'
     whileInView='visible'
     viewport={{ amount: 1, once: true }}
     className={cn(st.header)}
   >
     <div className='wrapper'>
       <div className={st.header__content}>
         <MH1
           custom={1}
           variants={textAnimation}
           text='Жилой комплекс в историческом центре'
         />
         <motion.div
           custom={2}
           variants={textAnimation}
           className={st.header__info}
         >
           <span className={st.header__address}>Наб. реки Фонтанки 10-15</span>
           <span className={st.header__phone}>8 (812) 123-45-67</span>
         </motion.div>
       </div>
     </div>
   </motion.div>
 );


