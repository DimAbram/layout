
import { ReactComponent as Bench } from "../../static/img/svg/bench.svg";
import { ReactComponent as Building } from "../../static/img/svg/building.svg";
import { ReactComponent as Bicycle } from "../../static/img/svg/bicycle.svg";
import { ReactComponent as Fountain } from "../../static/img/svg/fountain.svg";

import cn from 'classnames'
import st from "./Testimonials.module.scss";

 export const Testimonials = () => (
   <div className={cn(st.testimonials)}>
     <div className={st.testimonials__container}>
       <div className={st.testimonials__item}>
         <Bench className={st.testimonials__img} />
         <span className={st.testimonials__text}>
           Рядом исторические парки и скверы
         </span>
       </div>
       <div className={st.testimonials__item}>
         <Building className={st.testimonials__img} />
         <span className={st.testimonials__text}>Полностью обустроенный</span>
       </div>
       <div className={st.testimonials__item}>
         <Fountain className={st.testimonials__img} />
         <span className={st.testimonials__text}>
           10 фонтанов на территории
         </span>
       </div>
       <div className={st.testimonials__item}>
         <Bicycle className={st.testimonials__img} />
         <span className={st.testimonials__text}>6 км велодорожек</span>
       </div>
     </div>
   </div>
 );


