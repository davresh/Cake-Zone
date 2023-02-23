

import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { myContext } from '../../router';
import './style.scss';

function Header() {
    let box = useContext(myContext);
    let [wrap,setWrap] = useState(false)
    let [len,setLen] = useState(false)
    let location = useLocation().pathname;
    let [name,setName] = useState('');
    let head = useRef()

    useEffect(()=>{
      if(location === '/service' || location === '/test'){
          setName('#E88F2A')
      }else{
        setName('#fff')
      }
    },[location])
    return (
      <>
        <header 
          className='header'
          ref={head}
        >
          <div className='header-menu-bar'>
            <h1><span className='icon-gift'/>CAKEZONE</h1>
            <span className='icon-menu' onClick={()=>{
              setLen(!len)
             head.current.style.height = len?80+'px':400+'px'
            }}/>
          </div>
            <ul className='link-box'>
                <li className="link-page" onClick={()=>{
                    head.current.style.height = 80+'px'
                    setLen(!len)
                }}><NavLink to={'/Cake-Zone'}>HOME</NavLink></li>
                <li className="link-page" onClick={()=>{
                    head.current.style.height = 80+'px'
                    setLen(!len)
                }}><NavLink to={'/about'}>ABOUT US</NavLink></li>
                <li className="link-page" onClick={()=>{
                    head.current.style.height = 80+'px'
                    setLen(!len)
                }}><NavLink to={'/menu'}>MENU & PRICING</NavLink></li>
                <li className="link-page" onClick={()=>{
                    head.current.style.height = 80+'px'
                    setLen(!len)
                }}><NavLink to={'/master'} >MASTER CHEFS</NavLink></li>
                <li className='link-page' style={{color:name}} onClick={()=>{setWrap(!wrap)}}> 
                  <ul className='wraper-link' style={{display:wrap?'inline-block':'none'}}>
                    <li onClick={()=>{
                    head.current.style.height = 80+'px'
                    setLen(!len)
                    }}><NavLink to={'/service'}>Our Service</NavLink></li>
                    <li onClick={()=>{
                    head.current.style.height = 80+'px'
                    setLen(!len)
                    }}><NavLink to={'/test'}>Testimonal</NavLink></li>
                  </ul>PAGES<span className='icon-play3' /></li>
                <li className="link-page" onClick={()=>{
                    head.current.style.height = 80+'px'
                    setLen(!len)
                }}><NavLink to={'/contact'}>CONTACT US</NavLink></li>
            </ul>
        </header>
        <a href="#header" className={`to-top-btn${box.scrollTop[0]>=15?' to-top-visible':''}`}>
          <span className='icon-arrow-up2'></span>
        </a>
      </>
    );
}
export default Header;