import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";




function Hero(){
    return(
        <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/images/computer1.jpg')] h-[90vh] bg-cover w-[100vw]">
        
        <div className="flex flex-col justify-center items-center gap-[5em] h-full">

    <h2 className="text-6xl font-bold text-[#fff]">welcome to my Portfolio</h2>
    <div>

   <Link to="/Introduction"><h2 className="text-white font-bold text-7xl"><FaArrowRightLong /></h2></Link>


    </div>
    </div>
</div>
    )
}
export default Hero