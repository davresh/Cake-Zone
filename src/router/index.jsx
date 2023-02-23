
//css
import './style.scss';
//hooks
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
//components
import Header from '../pages/header';
import Home from '../pages/home';
import AboutUs from '../pages/about-us';
import MenuPricig from '../pages/menu-pricing';
import MasterChefs from '../pages/master-chefs';
import Services from '../pages/services';
import Testimonial from '../pages/testimonial';
import Footer from '../pages/footer';
import ContactUs from '../pages/contact-us';
//photo
import about from '../assets/image/about.jpg';
import bg from '../assets/image/bg.jpg';
import cake1 from '../assets/image/cake-1.jpg';
import cake2 from '../assets/image/cake-2.jpg';
import cake3 from '../assets/image/cake-3.jpg';
import hero from '../assets/image/hero.jpg';
import offer from '../assets/image/offer.jpg';
import service from '../assets/image/service.jpg';
import team1 from '../assets/image/team-1.jpg';
import team2 from '../assets/image/team-2.jpg';
import team3 from '../assets/image/team-3.jpg';
import testimonial1 from '../assets/image/testimonial-1.jpg';
import testimonial2 from '../assets/image/testimonial-2.jpg';
import testimonial3 from '../assets/image/testimonial-3.jpg';
import testimonial4 from '../assets/image/testimonial-4.jpg';

//Context
export const myContext = React.createContext()
function Router() {

    let [scrollTop,setScrollTop] = useState(0)
    window.onscroll = () => {
        setScrollTop(Math.round(window.scrollY/10))
    }
    return (
      <>
        <myContext.Provider value={{
            scrollTop:[scrollTop,setScrollTop],
            hero,about,service,bg,offer,
            award:[
                {
                    icon:'icon-heart',
                    name:'100% HEALTHY',
                    text:'Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero',
                },
                {
                    icon:'icon-heart',
                    name:'AWARD WINNING',
                    text:'Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero',
                }
            ],
            iconVal:[
                {
                    icon:'icon-star-full',
                    name:'OUR EXPERIENCE',
                    num:12345,
                },
                {
                    icon:'icon-users',
                    name:'CAKE SPECIALIST',
                    num:12345,
                },
                {
                    icon:'icon-checkmark',
                    name:'COMPLETE PROJECT',
                    num:12345,
                },
                {
                    icon:'icon-mug',
                    name:'HAPPY CLIENTS',
                    num:12345,
                },
            ],
            holidayImg:{
                'birthday':[cake1,'BIRTHDAY CAKE'],
                'wedding':[cake2,'WEDDING CAKE'],
                'custom':[cake3,'CUSTOM CAKE'],
            },
            holiday:[
                {
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
                    val:99,
                },
                {
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
                    val:99,
                },
                {
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
                    val:99,
                },
                {
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
                    val:99,
                },
                {
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
                    val:99,
                },
                {
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo',
                    val:99,
                },
            ],
            discount:[
                {
                    name:'BIRTHDAY CAKE',
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum',
                    link:'READ MORE',
                },
                {
                    name:'WEDDING CAKE',
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum',
                    link:'READ MORE',
                },
                {
                    name:'CUSTOM CAKE',
                    text:'Ipsum ipsum clita erat amet dolor sit justo sea eirmod diam stet sit justo amet tempor amet kasd lorem dolor ipsum',
                    link:'READ MORE',
                },
            ],
            shefPower:[
                {
                    img:team1,
                    name:'FULL NAME',
                    proff:'Designation',
                    icons:['icon-twitter','icon-facebook','icon-linkedin2'],
                },
                {
                    img:team2,
                    name:'FULL NAME',
                    proff:'Designation',
                    icons:['icon-twitter','icon-facebook','icon-linkedin2'],
                },
                {
                    img:team3,
                    name:'FULL NAME',
                    proff:'Designation',
                    icons:['icon-twitter','icon-facebook','icon-linkedin2'],
                },
            ],
            testimonial:[
                {
                    img:testimonial1,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
                {
                    img:testimonial2,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
                {
                    img:testimonial3,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
                {
                    img:testimonial4,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
                {
                    img:testimonial1,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
                {
                    img:testimonial2,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
                {
                    img:testimonial3,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
                {
                    img:testimonial4,
                    name:'CLIENT NAME',
                    proff:'Profession',
                    text:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
                },
            ],
            contactData:[
                {
                    icon:'icon-location',
                    name:'OUR OFFICE',
                    loc:'123 Street, New York, USA',
                },
                {
                    icon:'icon-mail',
                    name:'EMAIL US',
                    loc:'info@example.com',
                },
                {
                    icon:'icon-phone',
                    name:'CALL US',
                    loc:'+012 345 6789',
                },
            ]
        }}>
            <Header/>
                <Routes>
                    <Route path='/Cake-Zone' index element={<Home/>} />
                    <Route path='/about' element={<AboutUs/>} />
                    <Route path='/menu' element={<MenuPricig/>} />
                    <Route path='/master' element={<MasterChefs/>} />
                    <Route path='/service' element={<Services/>} />
                    <Route path='/test' element={<Testimonial/>} />
                    <Route path='/contact' element={<ContactUs/>} />
                </Routes>
            <Footer/>
        </myContext.Provider>
      </>
    );
}
export default Router;