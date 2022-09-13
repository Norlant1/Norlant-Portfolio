import { useState } from "react";
import {animcaller,ClassNameMaker,startAnim,finishAnim} from "../animation util/anim"




export default function Eachbox ({id}) {  
const item = ClassNameMaker("eachbox-icon",10);
const [counter,setcounter] = useState(0);
const [box,setbox] = useState(true);


async function run () {
  

  if(box === true){
    
    await startAnim(setbox);
    await animcaller(0,setcounter,0);
    await animcaller(200,setcounter,1);
    await animcaller(200,setcounter,2);
    await animcaller(200,setcounter,3);
    await animcaller(200,setcounter,4);
    await animcaller(200,setcounter,5);
    await animcaller(200,setcounter,6);
    await animcaller(200,setcounter,7);
    await animcaller(200,setcounter,8);
    await finishAnim(setbox); 
  }

}



  return (


    <div className="eachbox">
      <div className="eachbox-imagecontainer"><img className={item[counter]} src={require("./images/insta-icon.png")} onMouseEnter={run} /> </div>
      <div className="eachbox-title">Social Skills</div> 
      <div>I can work within a team, collaborate well with developers because Im frontend-end myself, and I love feedbacks.</div> 
    </div>
  )
}