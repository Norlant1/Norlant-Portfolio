import Contactcontent from "./Contactcontent"
import Homecontent from "./Homecontent"


export default function Content ({currentid,setcurrectid}){

  return(
    <>
      {currentid === 1 && <Homecontent/>}
       {currentid === 3 && <Contactcontent/>}
    </>
  )
}