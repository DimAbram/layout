
import cn from 'classnames'
import st from "./H1.module.scss";

 export const H1 = ({text, ...prop}) => (
   <h1 className={cn(st.h1)} {...prop}>{text}</h1>
 );


