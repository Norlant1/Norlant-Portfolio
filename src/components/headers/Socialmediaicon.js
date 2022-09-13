import { animcaller,ClassNameMaker,startAnim,finishAnim } from "../animation util/anim";
import { useState } from "react"

export default function Socialmediaicon ({link}) {
  



  const socialmediaanim = ClassNameMaker("socialmedia-icon",9);
  const [counter,setcounter] = useState(0); 
  const [animating,setanimating] = useState(true);

  async function startanim () {
      
   if(animating === true){
      await startAnim(setanimating);
      await animcaller(0,setcounter,0)
      await animcaller(100,setcounter,1);
      await animcaller(300,setcounter,2);
      await animcaller(150,setcounter,3);
      await animcaller(150,setcounter,4);
      await animcaller(100,setcounter,5);
      await animcaller(100,setcounter,6);
      await animcaller(100,setcounter,7);
      await animcaller(100,setcounter,8);
      await finishAnim(setanimating);
   }
       
 } 




  return(
    <img className={socialmediaanim[counter]} onMouseEnter={startanim} 
    src={require(`../content/images/${link}`)} />
  )
}