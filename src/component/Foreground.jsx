import { useRef } from "react";
import Card from "./Card";

const Foreground=()=>{

    const ref=useRef(null);

    const cardData=[
        { 
        desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem impedit corporis quasi, voluptate sint fugit?",
        size:".74mb",
        icon:true, 
        tag:{
         flag:true,
          tagLine:"Completed",
          color:"(85, 85, 231)", 
        }
    },
    {
        desc:" Quidem impedit corporis quasi, voluptate sint fugit?",
        size:".86mb",
        icon:false,
        tag:{
         flag:false,
          tagLine:"Completed",
          color:"(102, 102, 209)",
        }
    },
    {
        desc:" Quidem impedit corporis quasi, voluptate sint fugit?",
        size:".86mb",
        icon:true,
        tag:{
         flag:true,
          tagLine:"Download", 
          color:"green", 
        }
    } 
]
    return (
        <div ref={ref} id="foreground">  
          {
            cardData.map((data)=>(
                <Card info={data}  referenceDrag={ref}/>  
            ))
          }
                     
        </div>
    )
}

export default Foreground; 