import { forwardRef } from "react";
import { motion } from "framer-motion";

import logoText from "../../../static/img/HouseVOP.png";
import cn from "classnames";
import st from "./Logo.module.scss";

export const Logo = forwardRef(({ ...props }, ref) => (
  <div className={cn(st.logo)} ref={ref} {...props}>
    <img src={logoText} alt='logoText' />
    <span className={st.logo__text2}>ЖИЛОЙ КОМПЛЕКС</span>
  </div>
));
 

export const MLogo = motion(Logo);
