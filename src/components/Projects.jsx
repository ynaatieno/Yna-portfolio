import { Link } from "react-router-dom"


function Projects(){
    return(
        <div className="bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/images/computer1.jpg')] h-[90vh] bg-cover w-[100vw]">
        
        <div className="flex flex-col justify-center items-center gap-[5em] h-full">
<div className="flex gap-9">
<h2 className="text-3xl font-medium text-[#fff] ">GreenKenya</h2>
      <h3 className="font-extrabold text-gray-300">access live link <span className="cursor-pointer text-[#ffb703] underline md:underline-offset-4"><a href="https://360lad.github.io/Greenkenya/
">link</a></span></h3>
    
</div>
<div className="flex gap-9">

    <h2 className="text-3xl font-medium text-[#fff] ">Medic-care</h2>
    <h3 className="font-extrabold text-gray-300">access live link <span className="cursor-pointer text-[#ffb703] underline md:underline-offset-4"><a href="https://ynaatieno.github.io/medic-care/">link</a></span></h3>

</div>
<div className="flex gap-9">

    <h2 className="text-3xl font-medium text-[#fff]">Jokes App</h2>
    <h3 className="font-extrabold text-gray-300">access live link <span className="cursor-pointer text-[#ffb703] underline md:underline-offset-4"><a href="https://ynaatieno.github.io/jokes-app/">link</a></span></h3>

</div>

<div className="flex gap-9">

    <h2 className="text-3xl font-medium text-[#fff]">Pizzara Deliveries</h2>
    <h3 className="font-extrabold text-gray-300">access live link <span className="cursor-pointer text-[#ffb703] underline md:underline-offset-4"><a href="https://ynaatieno.github.io/pizzara-deliveries/">link</a></span></h3>

</div>

    
    </div>
</div>
    )
}
export default Projects