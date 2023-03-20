import { forwardRef } from "react";
import { motion } from "framer-motion";

import cn from "classnames";
import st from "./Button.module.scss";

export const Button = forwardRef(({ className, ...props }, ref) => (
  <button className={cn(st.button, className)} {...props} ref={ref}></button>
));

export const MButton = motion(Button);
