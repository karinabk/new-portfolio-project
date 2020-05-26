import React from 'react';


function Menu(props){
    return(
        <div id="header">
            <a href="/" id="logo">Hi! I'm Karina Bekbayeva.</a>
            
            <p id="text">Welcome to my portfolio page. What do you want to know about me?</p>
            <ul id="menu">
                <li><a href="#section1">Experience</a></li>

                <li><a href="#section2"><span>Projects</span></a></li>
                <li><a href="/"><span>Awards</span></a></li>
                <li><a href="/"><span>Research</span></a></li>
                <li><a href="/"><span>Contact</span></a></li>
            </ul>

            
        </div>
        
    );
}
 export default Menu;