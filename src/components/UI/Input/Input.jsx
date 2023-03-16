
import cn from 'classnames'
import st from "./Input.module.scss";

 export const Input = ({children, ...props}) => (
   <input className={cn(st.input)} {...props}></input>
 );


