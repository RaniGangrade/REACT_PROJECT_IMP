import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
const Colorchanger= ()=>{
    const [color,setColor] =useState("olive")
    return(
        <div>
        <div  style={{height:"600px",backgroundColor:color}}></div>
            <div  className="fixed-top bg-light rounded-pill p-2">
                <button onClick={()=> setColor("red")} className="px-4 py-3 rounded-pill  text-white border-0" style={{backgroundColor:"red"}} >Red</button>
                <button onClick={()=> setColor("Blue")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"Blue"}}>Blue</button>
                <button onClick={()=> setColor("olive")} className="px-4 py-3 rounded-pill text-white border-0"style={{backgroundColor:"olive"}}>OLIVE</button>
                <button onClick={()=> setColor("green")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"green"}}>Green</button>
                <button onClick={()=> setColor("gray")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"gray"}}>Gray</button>
                <button onClick={()=> setColor("#d63384")} className="px-4 py-3 rounded-pill text-black border-0" style={{backgroundColor:"#d63384"}}>Pink</button>
                <button onClick={()=> setColor("yellow")} className="px-4 py-3 rounded-pill  text-black border-0" style={{backgroundColor:"yellow"}}>Yellow</button>
                <button onClick={()=> setColor("Purple")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"Purple"}}>Purple</button>
                <button onClick={()=> setColor("#20c997")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"#20c997"}}>Teal</button>
                <button onClick={()=> setColor("#0dcaf0")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"#0dcaf0"}}>Cyan</button>
                <button onClick={()=> setColor("#fd7e14")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"#fd7e14"}}>Orange</button>
                <button onClick={()=> setColor("white")} className="px-4 py-3 rounded-pill text-black border-0" style={{backgroundColor:"white"}}>White</button>
                <button onClick={()=> setColor("Black")} className="px-4 py-3 rounded-pill text-white border-0" style={{backgroundColor:"Black"}}>Black</button>
            </div>
            </div>

        
    )
}
export default Colorchanger
