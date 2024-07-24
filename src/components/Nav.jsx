import { Link } from "react-router-dom"
import React from "react"
function Nav(){
    return(
        <div className="bg-[#fff] fixed z-4 w-full h-24  items-center ">
        <div className="container mx-auto flex">

                    <div className="flex">
                        <ul className="flex justify-between items-center gap-6 mx-80 mt-6" >
                      <Link to="/"><h2 className="text-[#023047] text-2xl">Home</h2></Link>
                      <Link to="/Introduction"><h2 className="text-[#023047] text-2xl">Introduction</h2></Link>
                      
                        </ul>
                    </div>
                    </div>
                </div>
                
        
    
        
        
        
    )
}

export default Nav