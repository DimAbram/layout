import { forwardRef } from "react";
import { motion } from "framer-motion";

import cn from "classnames";
import st from "./Input.module.scss";

export const Input = forwardRef(({ children,className, ...props }, ref) => (
  <input className={cn(st.input, className)} {...props} ref={ref}></input>
));
export const MInput = motion(Input);
