import { useEffect,useState } from "react"

export default function Language ({name}) {

  const [format,setformat] = useState(false);
  const [winposY,setwinposY] = useState(window.scrollY);
  let x = true;
  let windowsizeX;

  useEffect(()=> {
      window.addEventListener("scroll",()=>{
      windowsizeX = window.innerWidth;
      setwinposY(window.scrollY);

      
      if(winposY >= 600 && x && windowsizeX < 800 ){
        setformat(()=> true)
        x = false; 
      }
      else if(winposY >= 400 && x && windowsizeX > 800){
        setformat(()=> true)
        x = false;
      }
        
    })
  })
  

  return (
  <>
   <div className="language-text">{name}</div>
    <div className="language-design"> 
     <div className={format ? `language-design-${name} active`:"language-design-HTML"}></div> 
   </div>
  </>)
}