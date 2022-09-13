import { useState } from "react";
import Optionbox from "./Optionbox";



export default function EachHeader (props){
 
  const [showbox,setshowbox] = useState(false);
  const [cancel,setcancel] = useState(true);

  
  const callid = () => {
    changeval();
    props.changeid(props.data.key);
  }
 
  const changeformat = () => { 
    if(cancel === true){  
    setshowbox(true)  //  to start its child's CSSTransition and enter "entering state" if cancel is true 
  } }                 

  const changeval = () => {
     setshowbox(false)  // to terminate its child's CSSTransition and enter "Exit state"
  }
const format = props.data.key == props.currentid ? "header text":"header";



  return(     
    <div className={format} onClick={callid} onMouseEnter={changeformat} onMouseLeave={changeval}>
    {props.data.key == 4 ? props.data.label+" ^": props.data.label}
    {props.data.key == 4 && <Optionbox keyvalue={props.data.key} showbox={showbox} callcanceller={setcancel} />}  
  </div>    
  )
}