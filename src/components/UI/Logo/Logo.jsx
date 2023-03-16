import logoText from "../../../static/img/HouseVOP.png";
import cn from 'classnames'
import st from "./Logo.module.scss";

 export const Logo = () => (
   <div className={cn(st.logo)}>
     <img src={logoText} alt='' />
     <span className={st.logo__text2}>ЖИЛОЙ КОМПЛЕКС</span>
   </div>
 );


