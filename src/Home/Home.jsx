import React, { useEffect } from "react";
import './Home.css'
import image from '../Assets/Daco_6068770.png'
import image2 from '../Assets/splash.png'
import image3 from '../Assets/3.png'
import { SiPuma } from "react-icons/si";
import { SiNike } from "react-icons/si";
import { SiAdidas } from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import { Swiper, SwiperSlide} from "swiper/react"
import Cur from "./Cur/Cur";
import Card from "../Card/Card";
import { useState } from 'react';
import Card2 from "../Card2/Card2";
import {Pagination} from 'swiper/modules'
function Home(){
     const AOBJ={
     "id": 2,
     "title": "Saree",
     "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
     "price": 899,
     "discountPercentage": 17.94,
     "rating": 4.44,
     "stock": 34,
     "brand": "Apple",
     "category": "smartphones",
     "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "image": image
      
 }
  const [color, setColor] = useState('#ffffff');
  const generateRandomColor = () => {
    

    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
    console.log(randomColor);
  };
  
    return(<>
    <section>
        <div className="page1 pb-56 ">
            <h1 className=" text-H lg:absolute p-32 lg:w-full ">New Fashion</h1>
            <div  className="home-description lg:grid lg:grid-cols-3 lg:place-items-center lg:max-h-screen text-white">
                <p className="lg:text-2xl px-16 absolute lg:static top-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla vero in assumenda debitis facere cum, quam facilis veniam, sequi animi praesentium maxime ex esse quisquam velit optio magni molestiae!<br /><br />
                <button className="border-slate-950 border-2 rounded-3xl bg-white bg-opacity-40 lg:text-3xl shadow-xl shadow-black p-2">Shop Now</button></p>
                
                <img src={image} alt="" className="female lg:object-cover lg:w-full lg:h-3/4 lg:object-left-top "/>
                <img src={image2} id="image" alt="" className="  lg:object-left-top  lg:h-3/4 hidden" />
                <div className="home-extra lg:w-11/12">
                    <ul className="lg:grid lg:grid-cols-2">
                        <li className="lg:bg-opacity-20 lg:bg-white ">h1</li>
                        <li></li>
                    </ul>
                    <ul className="lg:grid lg:grid-cols-2">
                        <li></li>
                        <li>h1</li>
                    </ul>
                </div>
                
            </div>
            <div className="footer">
                    <ul className="grid lg:grid-cols-5 px-16 absolute w-full bg-orange-200 h-2/4 lg:h-1/4 items-center place-items-center">
                        <li><SiPuma size={100} /></li>
                        <li><SiNike size={100} /></li>
                        <li><SiAdidas size={100}/></li>
                        <li><CgChanel size={100}/></li>
                        <li></li>
                    </ul>
                </div>
                
        </div>
        <div className="page2 relative h-screen ">
            <h1 className="text-4xl text-center p-5 text-white">Product Highlight</h1>
            <p className="text-xl text-center p-2 text-white">h111</p>
            <Swiper className="Swiper" slidesPerView={6}
        spaceBetween={212}  loop={true}>
                <SwiperSlide onLoad={generateRandomColor}><Cur colorP={color}>1</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>2</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>3</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>4</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>5</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>1</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>2</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>3</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>42</Cur></SwiperSlide>
                <SwiperSlide><Cur colorP={color}>5</Cur></SwiperSlide>
            </Swiper>
        </div>
        <div className="page3 relative h-screen ">
            <div className="navbar text-3xl flex justify-between p-10 ">
                <h1>New Collection</h1><button>All Collection</button>
            </div>
            <cards className="grid grid-cols-4 place-items-center">
            <Card proddi={AOBJ}></Card>
            <Card proddi={AOBJ}></Card>
            <Card proddi={AOBJ}></Card>
            <Card proddi={AOBJ}></Card>
            </cards>
        </div>
        <div className="page4 md:flex mt-32  pb-40">
            <div className=" md:ml-32 md:mr-32 md:w-2/4">
            
                <img src={image3} className=' bg-red-400 md:pl-20 md:pt-12 pl-32 w-5/6 'alt="" />
                </div>
            
            <div className="info text-center place-content-center md:text-left grid grid-rows-3">
                <h1 className="md:w-2/4">Best Fashion Since 2004</h1>
                <p className="text-xl md:w-2/4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, exercitationem? Voluptatum molestiae illo quam obcaecati odit delectus, illum quisquam, atque, sint iusto quod odio optio accusamus quos corporis exercitationem asperiores.</p>
                <div className="w-full  h-32 blocl md:pr-32 grid grid-cols-3 text-center "><i>
                    <h className='md:text-5xl '>2014</h><p>Next Inn</p>
                    </i>
                    <i><h className='md:text-5xl'>8900+</h><p>Product Sold</p></i>
                    <i><h className='md:text-5xl'>3105+</h><p>Reviews</p></i></div>
            </div>
        </div>
        <div className="page5 md:flex text-white h-auto pb-56 md:pt-36">
            <div className="md:w-1/4  md:ml-32 mr-12">
                <h1 className="text-5xl pb-10 ">Best Seller Product</h1>
                <h2 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores perferendis adipisci minima illo eaque explicabo quis blanditiis ut similique! Perspiciatis aspernatur eaque voluptatum placeat enim pariatur reprehenderit obcaecati. Vel, neque?</h2>
                <button className=" border-black border-2 p-3 mt-9  ">See More</button>
            </div>
            <div className="swiper">
                <Swiper className="flex" slidesPerView={3} pagination={true} modules={Pagination}>
                    <SwiperSlide><Card2 proddi={AOBJ}></Card2></SwiperSlide>
                    <SwiperSlide><Card2 proddi={AOBJ}></Card2></SwiperSlide>
                    <SwiperSlide><Card2 proddi={AOBJ}></Card2></SwiperSlide>
                    <SwiperSlide><Card2 proddi={AOBJ}></Card2></SwiperSlide>
                    <SwiperSlide><Card2 proddi={AOBJ}></Card2></SwiperSlide>
                    <SwiperSlide><Card2 proddi={AOBJ}></Card2></SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
</>)
}
export default Home;