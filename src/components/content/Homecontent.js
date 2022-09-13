import Language from "./Language"
import Eachbox from "./Eachbox"

export default function Homecontent () { 
  return( 
    <div className="main-content">

     <div className="main-skills-info" > 
      <div className="skills-info">
        <div className="info-title">Information</div>
        <div className="info-text"> These are the measurement of my essential skills in order to  create a fully resposive &#x26; user-friendly Website. </div>
      </div>
      <div className="home-content">
       <div className="home-content-info">Skills &#x26; <span>Level</span></div>
       <div className="home-content-languages">
            <Language name={"HTML"} />
            <Language name={"SASS"}/>
            <Language name={"JAVASCRIPT"}/>
            <Language name={"REACTJS"}/> </div>
     </div>
     </div>

     <div className="working-ability">
         <div className="working-ability-info"> 
            <div>Personal Skills &#x26; <span>Work Abilities</span></div>
            <div className="working-ability-info-text">additional info here</div>
         </div>
         <div className="working-ability-mainbox">
           <Eachbox/>
           <Eachbox/>
           <Eachbox/>
           <Eachbox/>
         </div>
    </div>

    </div>
  )
}