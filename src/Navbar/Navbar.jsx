import React, { useRef } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import './Navbar.css'
import { Link } from "react-router-dom";
function Navbar(){
    const ref1 = useRef(null);
    let iconbu= document.getElementById('iconbu');
    let sideba= document.getElementById('sidebar');

    const sidebar=()=>{
        ref1.current.classList.toggle('absolute')
        ref1.current.classList.toggle('hidden')
        console.log(ref1.current)
    }
    
    return(<>
        <section>
            <div className="navbar flex justify-between fixed w-full text-gray-50 items-center z-40 shadow-md" >
                <icon>
                <FaCartShopping className="p-5" color="black" size={100} />
                </icon>
                
                <div className="si w-64 bg-gray-800 text-white p-4 left-0 hidden top-0 h-screen z-50 md:hidden " ref={ref1} >
                .
                    <h1 className="text- font-bold mb-4">Sidebar Title</h1>
                    <ul className>
                        <li> Home</li>
                        <li>Shop</li>
                        <li className="flex"><h1>NEXT-IN</h1><h1 className="text-gray-500">N</h1></li>
                        <li>Categories</li>
                        <li>About</li>
                </ul>
                </div>

                <li className="flex md:hidden"><h1>NEXT-IN</h1><h1 className="text-gray-500">N</h1></li>

                <ul className ="linkss md:flex md:gap-x-24 md:text-3xl md:items-center hidden pl-6">
                    <li><Link to='/'> Home</Link></li>
                    <li>Shop</li>
                    <li className="flex log"><h1>NEXT-IN</h1><h1 className="text-gray-500">N</h1></li>
                    <li><Link to='/category'>Categories</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                <icon>
                <IoSearchSharp className="md:p-5 hidden md:block" size={100}/>
                </icon>
                    <icon className="md:hidden " id ='iconbu' onClick={sidebar}>
                    Hamburger
                </icon>
                
            </div>
        </section>
    </>)
}
export default Navbar