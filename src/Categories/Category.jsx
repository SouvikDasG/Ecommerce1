import React, { useEffect, useRef, useState } from "react";
import Card from "../Card/Card";
import './Category.css'
 function Category(){
    
    const ref1=useRef(null)
    function Left() {
        ref1.current.classList.toggle('hidden')
    }
    let value= ""
    let Value2 = ""
    const [product, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const GetItems = async(value)=>{
        const response = await fetch(`https://fakestoreapi.com/products/category/${value}`)
        const data=await response.json();
        setProduct(data); 
    }
    const GetCategories = async(value)=>{
        const response = await fetch(`https://fakestoreapi.com/products/category/${value}`)
        const data=await response.json();
        setSearchTerm(data); 
    }

    useEffect(()=>{
        GetItems();

    },[ ])

    return(<body class="bg-gray-500 font-sans leading-normal tracking-normal flex">
    
    <div className="leftbar-container w-1/4 pt-32 hidden md:block bg-white  " ref={ref1}>
        {/* <ul className="pb-10 text-xl text-black font-bold">
            <h1>T-SHIRTS AND TOPS</h1>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="pb-10  text-black font-bold">
            <h2>ACTIVEWEAR</h2>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="pb-10  text-black font-bold">
            <h3>SWEATERS</h3>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="pb-10  text-black font-bold">
            <h4>SKIRTS AND SHORTS</h4>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="pb-10  text-black font-bold">
            <h5>OUTWEAR AND BLAZERS</h5>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul className="pb-10  text-black font-bold">
            <h5>ACCESSORIES AND SHOES</h5>
            <li>
            <li></li>
            <li></li>
            <li></li>
            <li></li></li>
        </ul> */}
        <ul className="items pb-10 text-xl text-black font-bold pl-20 place-items-center">
            <h1 className="text-4xl pb-10">ITEMS</h1>
            {
                searchTerm.map((category)=><li className="pb-10" onClick={()=>{GetItems({category});Value2="Men";}}>MENS</li>)
            }
            <li className="pb-10" onClick={  ()=>{
                                                GetItems("")
                                                }}>
                                                ACCESSORIES</li>
            <li className="pb-10" onClick={()=>{GetItems("men's clothing");Value2="Men";}}>MENS</li>
            <li className="pb-10" onClick={()=>{GetItems("women's clothing")}}>WOMEN</li>
            <li className="pb-10"></li>
        </ul>
    </div>
    <div class="container mx-auto px-4 py-16">
        <h1 class="text-4xl text-center mb-12 text-white">{Value2}</h1>
        <button onClick={Left}>Categories</button>
        <div class="flex justify-between items-center mb-8">
            <div class="w-1/3">
                <label for="filter" class="block text-gray-700 font-bold mb-2">Filter by:</label>
                <select id="filter" class="w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="all">All</option>
                    <option value="featured">Featured</option>
                    <option value="new">New</option>
                </select>

                
            </div>
            <div class="w-1/3">
                <label for="sort" class="block text-gray-700 font-bold mb-2">Sort by:</label>
                <select id="sort" class="w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                </select>
            </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 place-items-center ">
            {/* <!-- Repeat for other products --> */}
            {
                product.map((proddy)=>(<Card proddi={proddy}></Card>))
            }
            {/* <!-- Repeat for other products --> */}
        </div>
        <div class="mt-8">
            <ul class="flex justify-center">
                <li><a href="#" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md mr-2">Previous</a></li>
                <li><a href="#" class="px-4 py-2 text-white bg-indigo-500 rounded-md">Next</a></li>
            </ul>
        </div>
    </div>
</body>)
 }
 export default Category