import React from 'react';
import { Link } from 'react-scroll';


function Menu(props){
    return(
        <div id="header">
            <a href="/" id="logo">Hi! I'm Karina Bekbayeva.</a>
            
            <p id="text">Welcome to my portfolio page. What do you want to know about me?</p>
            <ul id="menu">
                <li><a href="#experience"><span>Experience</span></a></li>
                <li><a href="/"><span>Projects</span></a></li>
                <li><a href="/"><span>Research</span></a></li>
                <li><a href="/"><span>Contact</span></a></li>
            </ul>
        </div>
    );
}
 export default Menu;