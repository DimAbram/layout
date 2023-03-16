import { H3 } from "../UI";
import cn from "classnames";
import st from "./Maps.module.scss";

export const Maps = () => (
  <div className={cn(st.maps)}>
    <div className='wrapper'>
      <H3 text='Район на карте' />
      <div className={st.maps__map}></div>
    </div>
  </div>
);
