import { Logo } from '../UI'
import cn from 'classnames'
import st from "./Menu.module.scss";

 export const Menu = () => (
   <div className={cn(st.menu)}>
     <div className={cn('wrapper', st.menu__wrapper)}>
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
   </div>
 );



