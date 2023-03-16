import { forwardRef } from "react";
import { motion } from "framer-motion";

import cn from "classnames";
import st from "./H3.module.scss";

export const H3 = forwardRef(({ text, ...prop }, ref) => (
  <h3 className={cn(st.h3)} {...prop} ref={ref}>
    {text}
  </h3>
));

export const MH3 = motion(H3);