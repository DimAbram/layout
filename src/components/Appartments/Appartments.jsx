import { H3 } from "../UI";
import  appart1 from "../../static/img/Rectangle-appart.png";
import appart2 from "../../static/img/Rectangle-appart2.png";
import cn from "classnames";
import st from "./Appartments.module.scss";

export const Appartments = () => (
  <div className={cn(st.appartments)}>
    <div className='wrapper'>
      <H3 text='Наши квартиры' />
      <div className={st.appartments__cards}>
        <figure className={st.appartments__card}>
          <img className={st.appartments__img} src={appart1} alt='appart1' />
          <figcaption className={st.appartments__text}>
            Лофт — 3 этажа
          </figcaption>
        </figure>
        <figure className={st.appartments__card}>
          <img className={st.appartments__img} src={appart2} alt='appart2' />
          <figcaption className={st.appartments__text}>
            Лофт — 2 этажа
          </figcaption>
        </figure>
        <figure className={st.appartments__card}>
          <img className={st.appartments__img} src={appart1} alt='appart1' />
          <figcaption className={st.appartments__text}>
            Лофт — 3 этажа
          </figcaption>
        </figure>
        <figure className={st.appartments__card}>
          <img className={st.appartments__img} src={appart2} alt='appart2' />
          <figcaption className={st.appartments__text}>
            Лофт — 2 этажа
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
);
