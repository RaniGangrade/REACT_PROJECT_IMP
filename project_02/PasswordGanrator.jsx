import { useCallback, useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const  PasswordGanrator=()=>{
    const [length,setLength]=useState(8)
    const [numAllowed,setNumAllowed] =useState(false)
    const [charAllowed,setCharAllowed] =useState(false)
    const [password,setPassword] = useState(" ")
    
    const RandomPass = useCallback(() =>{
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqurstuvwxyz"
        let pass = ""
        if(numAllowed)  str += "0123456789";
        if(charAllowed) str += "@!#$%^&_?/<>|~+-";
        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() *str.length +1)
            pass+= str.charAt(char)
            
        }
        setPassword(pass)
    },[length,numAllowed,charAllowed,setPassword])


    const CopyPassword =useCallback(()=>{

        window.navigator.clipboard.writeText(password)
    },[password])
    useEffect(()=>{
        RandomPass()
    },[length,numAllowed,charAllowed,RandomPass])


    return(
        <div style={{position: "absolute",left:"30%", backgroundColor:"pink" ,top: "30%"}} className="p-4 mt-5"> 
        <h2>Password Ganrator</h2>
            <div>

            <input type="text" value={password} readOnly/>
            <button className="px-5  ml-2 bg-primary text-white border-1" onClick={CopyPassword}>Copy</button>
            </div>
            <div style={{display:"flex" }} className="mt-3">
                <div>

                <input type="range" value={length} min={8} max={20} onChange={(e)=> setLength(e.target.value)}/>
                <label>Length : {length}</label>
                {/* <input type="check" /> */}

            </div>
            <div className="ml-3">

            <input type="checkbox" onClick={()=> setNumAllowed(!numAllowed)}/>
            <label>Numbers</label>
            <input type="checkbox" onClick={()=> setCharAllowed(!charAllowed)}/>
            <label>Spacial char</label>
            </div>
            </div>

        </div>
    )

}
export default PasswordGanrator
