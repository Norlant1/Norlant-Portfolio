import Header from "./headers/Header"
import Content from "./content/Content"
import { useState } from "react";

export default function Main(){

  const [currentid,setcurrectid] = useState(1);


  return(
    <>
      <Header currentid={currentid} setcurrectid={setcurrectid}/>
      <Content currentid={currentid} setcurrectid={setcurrectid}/>    
    </>
  )
}