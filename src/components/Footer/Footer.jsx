import { Logo } from '../UI'
import { ReactComponent as YouTube } from "../../static/img/svg/youtube.svg";
import { ReactComponent as Vk } from "../../static/img/svg/vk.svg";
import { ReactComponent as Facebook} from "../../static/img/svg/facebook-logo.svg";
import { ReactComponent as Instagram } from "../../static/img/svg/instagram.svg";

import cn from 'classnames'
import st from "./Footer.module.scss";

 export const Footer = () => (
   <div className={cn(st.footer)}>
     <div className={cn("wrapper", st.footer__wrapper)}>
       <Logo className={st.footer__logo} />
       <div className={cn(st.footer__column, st.footer__column_none)}>
         <span className={st.footer__row}>О комплексе</span>
         <span className={st.footer__row}>Район</span>
         <span className={st.footer__row}>Каталог квартир</span>
         <span className={st.footer__row}>Ипотека</span>
         <span className={st.footer__row}>Контакты</span>
       </div>
       <div className={cn(st.footer__column, st.footer__column_none)}>
         <span className={st.footer__row}>О комплексе</span>
         <span className={st.footer__row}>Район</span>
         <span className={st.footer__row}>Каталог квартир</span>
         <span className={st.footer__row}>Ипотека</span>
         <span className={st.footer__row}>Контакты</span>
       </div>
       <div className={st.footer__column}>
         <span className={st.footer__row}>Адрес: Наб. реки Фонтанки 10-15</span>
         <span className={st.footer__row}>Телефон: 8 (812) 123-45-67</span>
         <span className={st.footer__row}>Отдел продаж: 10:00 - 20:00</span>
         <span className={st.footer__row}>
           E-mail: <span className={st.footer__row__mail}>vip@housevip.ru</span>{" "}
         </span>
         <div className={st.footer__row__links}>
           <a href='#!'>
             <YouTube className={st.footer__icon} />
           </a>
           <a href='#!'>
             <Vk className={st.footer__icon} />
           </a>
           <a href='#!'>
             <Facebook className={st.footer__icon} />
           </a>
           <a href='#!'>
             <Instagram className={st.footer__icon} />
           </a>
         </div>
       </div>
     </div>
   </div>
 );


