import { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"

export default function HeaderACP ({texthead,currentid}) {



  return(
  <div className="acp-header"> 
  <h1 className="textinfo resized">{texthead[currentid-1].label}</h1>
  </div>)
}