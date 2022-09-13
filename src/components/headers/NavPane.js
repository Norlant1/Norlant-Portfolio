import { CSSTransition } from "react-transition-group"

export default function NavPane({changeid,refresh,data,currentid}){

  const format = data.key == currentid ? "navpane-text-active":"navpane-text";

  
   const callid = () =>{
    changeid(data.key);
    refresh();
     
   }

  return(
      
     <div className={format} onClick={callid}>{data.label}</div>  
  )
}