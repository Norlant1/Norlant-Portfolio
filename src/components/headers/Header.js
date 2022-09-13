import EachHeader from "./EachHeader";
import HeaderContent from './HeaderContent';
import NavPane from "./NavPane";
import Mobilenavpane from "./Mobilenavpane";
import Mobilenavbutton from "./Mobilenavbutton";
import HeaderACP from "./HeaderACP";


import { useEffect, useState } from "react"

export default function Header({currentid,setcurrectid}){

  
   const texthead = [
    {label:"Home",key:1},{label:"About",key:2},{label:"Contact",key:3},{label:"Projects",key:4}];
      
  
    const showpane = () => {
      setnavcall(prev=>!prev)
      setnavline(prev=>!prev)
    }
    
 
     
const heading = texthead.map(item => {
  return <EachHeader changeid={changeid} currentid={currentid} data={item} key={item.key}/>
});

const mobileheading = texthead.map(item => {
  return <NavPane changeid={changeid} currentid={currentid} data={item} key={item.key} refresh={showpane}/>
});

function changeid (key){
  setcurrectid(key);
}
const [posY,setposY] = useState(false);
useEffect(()=>{window.addEventListener("scroll",setposY);
    if(window.scrollY > 19){
      setposY(true)
    }else{
      setposY(false); } });

const [navcall,setnavcall] = useState(false);
const [navline,setnavline] = useState(false);
  return(
    <div className={currentid === 1 ? "main-header home":"main-header other"}>
      <div className={currentid === 1 ? "bg-header home":"bg-header other"}>
        <div className={posY ? "header-bar added":"header-bar"}> 
            <div className="logo">Norlant</div>
            <div className="header-text-container">{heading}</div> 
            <Mobilenavbutton navline={navline} showpane={showpane} />   
            <Mobilenavpane navcall={navcall} mobileheading={mobileheading}/>                                     
        </div>  
         {currentid === 1 && <HeaderContent/>}
         {currentid !== 1 && <HeaderACP texthead={texthead} currentid={currentid}/>}        
      </div>
    </div>
  )
}