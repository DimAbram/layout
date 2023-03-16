import { H3, Input, Button } from "../UI";
import cn from 'classnames'
import st from "./CraForm.module.scss";

 export const CraForm = () => (
   <div className={cn(st.craForm)}>
     <div className='wrapper'>
       <H3 text='Есть вопросы?' />
       <form className={st.craForm__form}>
         <span className={st.craForm__text}>
           *Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.h
         </span>
         <Input placeholder='Ваше имя' />
         <Input placeholder='Ваш телефон' />
         <Button>Посмотреть район</Button>
       </form>
     </div>
   </div>
 );


