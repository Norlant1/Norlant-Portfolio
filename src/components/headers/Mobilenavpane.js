import { CSSTransition } from "react-transition-group"

export default function Mobilenavpane({mobileheading,navcall}) {
  
  return(<CSSTransition
          in={navcall === true}
          classNames={"navpane"}
          unmountOnExit
          timeout={{enter:500,exit:500}}>
           <div className="navpane">       
             {mobileheading}  
          </div>    
       </CSSTransition>
  )
}