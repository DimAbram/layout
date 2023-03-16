import cn from "classnames";
import st from "./Button.module.scss";

export const Button = ({ ...props }) => (
  <button className={cn(st.button)} {...props}></button>
);
