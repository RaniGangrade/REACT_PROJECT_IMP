import {useState} from "react";
import './App.css';
const Form = () =>{
    const [name,setName] = useState("")
    const [userErr,setUserErr] = useState(false)
    const [redio,setRedio] = useState(false)
    const [redioErr,setRedioErr] = useState(false)
    const [check,setCheck] = useState(false)
    const [checkErr,setCheckErr] = useState(false)
    const [option,setOption] = useState(false)
    const [optionErr,setOptionErr] = useState(false)
    // const [email,setEmail] = useState("")
    // const [emailErr,setEmailErr] = useState(true)
    const [password,setPassword] = useState("")
    const [passwordErr,setPasswordErr] = useState(false)
    
    
    
    
    
    const getFormData =(e) =>{
        console.log(name,option,redio,check,password)
        if(name.length < 3  ){
          setUserErr(true)
        }
        else{
          setUserErr(false)
        }
        if(password.length < 3){
          setPasswordErr(true)
        }
        else{
          setPasswordErr(false)
        }
        if(redio === false){
          setRedioErr(true)
        }
        else{
          setRedioErr(false)
        }
        if(check === false){
          setCheckErr(true)
        }
        else{
          setCheckErr(false)
        }
        if(option === false){
          setOptionErr(true)
        }
        else{
          setOptionErr(false)
        }
        e.preventDefault()
    }
    const userHendler =(e) =>{
      console.log(e.target.value)
      if(e.target.value.length <3){
        console.log("User name Must be 4 letters")
        setUserErr(true)
      }
      else{
       setUserErr(false)
       setName(e.target.value)
      }
     }
    const passwordHendler =(e) =>{
     console.log(e.target.value)
     if(e.target.value.length <3){
       console.log("Password Must be 4 letters")
       setPasswordErr(true)
     }
     else{
      setPasswordErr(false)

      setPassword(e.target.value)
     }
    }
    // const emailHendler =(e) =>{
    //   console.log(e.target.value)
    //   if(e.target.value.length <3){
    //     console.log("User name Must be 4 letters")
    //     setEmailErr(true)
    //   }
    //   else{
    //     setEmailErr(false)
    //     setEmail(e.target.value)
    //   }
    //  }

      return (
        <div className="form" >
            <h1>Handle Form</h1>
            <form onSubmit={getFormData}>
            User Name: <input type="text" placeholder="Enter Name" />
            Name: <input type="text" placeholder="Enter Name" onChange ={userHendler}/> { userErr?<span>*User name Must be 4 letters</span>: ""}<br /><br />
            Email: <input type="text" placeholder="Enter Email"  /><br />
            {/* Confirm Email<input type="text" placeholder="Enter Name" onChange ={emailHendler}/> {confirmEmailErr? <span>*Email Must have @gmail.com</span> :""}<br /><br /> */}
           <label onChange ={ (e) => setRedio(e.target.value)}>Gender:
            <input type="radio" value="option1" name="options" />
            Male
          
            <input type="radio" value="option2" name="options" />
            Female
          
        <input type="radio" value="option3" name="options" />
        Prefer not to say
      </label >{redioErr?<span>*Please Choose an option</span>: ""}<br />
            <input type="checkbox" onChange ={ (e) => setCheck(e.target.checked)} /> Apply Tearms & Conditions  {checkErr?<span>*Please check the box</span>: ""}<br /><br />
            <label onChange ={ (e) => setOption(e.target.value)} > Option: 
            <select >
                <option>Select option</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>{optionErr?<span>*Please check the box</span>: ""}
            </label><br /><br />
            Password: <input type="text" placeholder="Enter Password" onChange ={passwordHendler} />{passwordErr?<span>*Password Must be 4 letters</span>: ""}
            <br /><br /><button type="submit">Submit</button>
        </form>
          
        </div>
        
      );
    }
    export default Form;
