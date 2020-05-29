import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import git from '../assets/git.png';
import gmail from '../assets/gmail.png';

import leet from '../assets/leet.png';
import lin from '../assets/lin.png';
import ScrollableAnchor from 'react-scrollable-anchor';

function Contact(props){
    return(
        <Container>
            <Row>
            <Col className="left-exp">
                    <ScrollableAnchor id={'section4'}>
                        <h1 id="subtitle">Let's talk!</h1>
                    </ScrollableAnchor>
                    <div>
                    <a href="https://www.linkedin.com/in/karinabk" target="_blank">
                    <img src={lin} id="lin" alt="linked in"></img>
                    </a>

                    <a href="https://leetcode.com/sunnya/" target="_blank">
                    <img src={leet} id="leet" alt="leetcode "></img>
                    </a>
                    
                    <a href="https://github.com/karinabk" target="_blank">
                    <img src={git} id="git" alt="github "></img>
                    </a>

                    <a href="mailto:karina.bekbayeva@nu.edu.kz" target="_blank">
                    <img src={gmail} id="gmail" alt="gmail "></img>
                    </a>

                    </div>
                    
            </Col>
            <Col className="right-exp">
                    
                    
            </Col>
                
                
            </Row>
        </Container>
    )


}
export default Contact;