import { forwardRef } from "react";
import { motion } from "framer-motion";

import cn from "classnames";
import st from "./H1.module.scss";

export const H1 = forwardRef(({ text, ...prop }, ref) => (
  <h1 className={cn(st.h1)} {...prop} ref={ref}>
    {text}
  </h1>
));


export const MH1 = motion(H1);
