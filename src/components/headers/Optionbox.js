import { useState } from "react"
import { CSSTransition } from "react-transition-group"


export default function Optionbox (props) {

  
   const cancel = () => {
    props.callcanceller(false) 
   }
    
   const revertcancel = () => {
    props.callcanceller(true)
   }
   

  return(
      
  <CSSTransition 
  in={props.keyvalue == 4 && props.showbox == true}
  timeout={{enter:500,exit:300,appear:1000}}
  classNames={"header__floatingoption"}
  unmountOnExit
  onExit={cancel}  //set cancel to false to avoid reappearing of Optionbox/Navpane when "Projects^" is hovered during exit
  onExited={revertcancel} //set cancel to true when CSSTransition exit is done to allow the user to hover again
  >  

 <div className="header__floatingoption">   
   <div className="header__floatingoption__ul">HTML &#x26; CSS</div>
   <div className="header__floatingoption__ul">Vanilla JS</div>
   <div className="header__floatingoption__ul2">React JS</div>
 </div>

</CSSTransition>
    
  )
}