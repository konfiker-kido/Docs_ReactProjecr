import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineDownloadForOffline } from "react-icons/md";


const Card=(props, )=>{

    const info=props.info;
    const tag=props.info.tag; 
    
    const footerStyle={
        backgroundColor: tag.color, 
    } 
      return (   
        <motion.div drag dragConstraints={props.referenceDrag} whileDrag={{scale:1.3}} class="card" >    
                <div class="upprCard" >   
                    <FaFileAlt/>  
                    <p> {info.desc}</p>
                </div>
   
                <div className="actions"> 
                      <p>{info.size}</p> 
                    {(info.icon)? <span><MdOutlineDownloadForOffline size="1.3em" /></span> : <span><IoMdCloseCircleOutline size="1.3em" /></span> }   
                </div>

       
       {/* Conditional Rendering */}  
        
                {(tag.flag)?(<div class="footerCard" style={footerStyle}> 
                    <span>{tag.tagLine}</span>  
                </div> ):null } 
         </motion.div>
      )
}

export default Card; 