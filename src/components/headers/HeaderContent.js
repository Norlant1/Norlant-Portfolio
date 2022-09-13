import { useState } from "react"
import { animcaller,ClassNameMaker,startAnim,finishAnim } from "../animation util/anim";
import Socialmediaicon from "./Socialmediaicon";

export default function Headercontent (){
  
  const contactanim = ClassNameMaker("spann",9);
  const socialmediaanim = ClassNameMaker("socialmedia-icon",9);
  const [counter,setcounter] = useState(0); 
  const [animating,setanimating] = useState(true);

  async function startanim () {
      
   if(animating === true){
      await startAnim(setanimating);
      await animcaller(0,setcounter,1);
      await animcaller(300,setcounter,2);
      await animcaller(150,setcounter,3);
      await animcaller(150,setcounter,4);
      await animcaller(100,setcounter,5);
      await animcaller(100,setcounter,6);
      await animcaller(100,setcounter,7);
      await animcaller(100,setcounter,8);
      await animcaller(100,setcounter,9); 
      await finishAnim(setanimating);
   }
       
 }  
  return( <div className="header-content-container">
            <div className="left-header-content">
              <div className="introduction">Hello, I am <span>Norlant Barrera</span> </div> 
              <div className="profession"> I am a Front-end Web Developer Entry Level <br/> with ReactJS</div>
              <div className="home-icons">
                 <div className="contact-me" onMouseEnter={startanim}> <span className={contactanim[counter]}>Contact me</span></div>
                 <Socialmediaicon link="fb-icon.png"/>
                 <Socialmediaicon link="insta-icon.png"/>
                 <Socialmediaicon link="twitter-icon.png"/>
              </div>
           </div>
           <div className="right-header-content">
              <img className="imageprofile" src={require("./profile.png")}/>
           </div>
         </div>
  
        
      )
}