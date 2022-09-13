import { useState } from "react"

export default function Contactcontent (){
   
 const [form,setform] = useState({name:"",email:"",message:""});


 function changehandle (event) {
  const {name,value,type} = event.target; 

   setform(prev => {
    return {...prev,[name]:value}
   })
 }

 console.log(form);


 return(
  <div className="Contact-content">
  <div className="Contact-info">
    <div className="info-container">
      <img className="contact-icons" src={require("./images/call.png")}/>
      <h3>Phone</h3>
      <label className="icons_label">09974492608</label>
    </div>
    <div className="info-container">
       <img className="contact-icons" src={require("./images/address.png")}/>
       <h3>Address</h3>
       <label className="icons_label">Philippines, Tarlac city</label>
    </div>
    <div className="info-container">
       <img className="contact-icons" src={require("./images/email.png")}/>
       <h3>Email</h3>
       <label className="icons_label">Jobenbarrera@gmail.com</label>
    </div>    
  </div>
  <form className="form">
    <label htmlFor="name">Name</label> <br/>
    <input type="text"
           className="input"
           name="name"
           onChange={changehandle}
           value={form.name}
    />  <br/>

    <label htmlFor="email">Email</label> <br/>
    <input type="text"
           className="input"
           name="email"
           onChange={changehandle}
           value={form.email}
    />  <br/>
    <label htmlFor="message">message</label> <br/>
    <textarea type="text"
           className="input textarea"
           name="message"
           onChange={changehandle}
           value={form.message}
    /> <br/>
    <button className="button">Submit</button>
    


  </form>
  {/* <div className="footnote">Test</div> */}
  </div>
 )
}