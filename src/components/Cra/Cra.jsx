import { H3, Input, Button } from "../UI";

import cn from "classnames";
import st from "./Cra.module.scss";

export const Cra = () => (
  <div className={cn(st.cra)}>
    <div className={cn(st.cra__wrapper, "wrapper")}>
      <div className={st.cra__info}>
        <H3 style={{ marginBottom: "50px" }} text='Хотите посмотреть?' />
        <span className={st.cra__text}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
          латинице с начала XVI века. В то время некий безымянный печатник
          создал большую коллекцию размеров и форм шрифтов, используя Lorem
          Ipsum для распечатки образцов.{" "}
        </span>
      </div>
      <form className={st.cra__form}>
        <Input placeholder='Ваше имя' />
        <Input placeholder='Ваш телефон' />
        <span className={st.cra__formText}>
          *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.
        </span>
        <Button>Посмотреть район</Button>
      </form>
    </div>
  </div>
);
