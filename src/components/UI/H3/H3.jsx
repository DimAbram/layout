
import cn from 'classnames'
import st from "./H3.module.scss";

 export const H3 = ({text, ...prop}) => (
   <h3 className={cn(st.h3)} {...prop} >{text}</h3>
 );


