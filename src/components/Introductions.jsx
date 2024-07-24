import { Link } from "react-router-dom"


function Introductions(){
    return(
        <div>
            <img src=""/>
            <div className="bg-[#023047] bg-no-repeat bg-cover bg-center h-[80vh] flex  justify-center items-center">
                <div className="text-3xl font-medium text-[#fff]">
                <h2>I am YNA ATIENO OORO a full stack developer after undergoing 7months training at MYC tech academy,</h2>
                   <h2> i am knowledgable in different programming languages such as Javascript,Node.js,React</h2>
                   <h2>I was able to come up with some projects.</h2>
                   <div>
                   <Link to="/Project"><h2 className="text-5xl font-bold text-[#fff] mt-16 text-center cursor-pointer underline md:underline-offset-4 ">Projects</h2></Link>
</div>
                   </div>
                  
                   
                
            </div>
        </div>
    )
}
export default Introductions