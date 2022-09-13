export default function Mobilenavbutton({showpane,navline}) {



 return (<div className="navbutton" onClick={showpane}>         
     <div className={navline ? "navbutton line first":"navbutton line"}></div>
     <div className={navline ? "navbutton line second":"navbutton line"}></div>
     <div className={navline ? "navbutton line third":"navbutton line"}></div>                                          
  </div> )
}