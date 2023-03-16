
import {H1} from '../UI'

import cn from 'classnames'
import st from "./Header.module.scss";

 export const Header = () => (
   <div className={cn(st.header)}>
     <div className='wrapper'>
       <div className={st.header__content}>
         <H1 text='Жилой комплекс в историческом центре' />
         <div className={st.header__info}>
           <span className={st.header__address}>Наб. реки Фонтанки 10-15</span>
           <span className={st.header__phone}>8 (812) 123-45-67</span>
         </div>
       </div>
     </div>
   </div>
 );


