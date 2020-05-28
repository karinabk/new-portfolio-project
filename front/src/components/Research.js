import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import nu from '../assets/nu.png';
import ScrollableAnchor from 'react-scrollable-anchor';


function Research(){
    return(
        <Container>
            <Row>
                
                    <ScrollableAnchor id={'section3'}>
                        <h1 id="subtitle">Research</h1>
                    </ScrollableAnchor>
                    <img src={nu} alt="Nazarbayev University logo"></img>
                     <h2 id="company-info"> Location: Kazakhstan, Nur-Sultan </h2>
                     <h2 id="company-info"> Stack: Python </h2>
                     <h2 id="company-info"> Position: Undergraduate Reasearch Assistant </h2>
                     <h2 id="company-info"> When: October 2019 - Present </h2>
                     <p id="company-descr">s</p>


                
            </Row>
        </Container>
    )


}

export default Research;