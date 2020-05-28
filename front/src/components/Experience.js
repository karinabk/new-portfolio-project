import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollableAnchor from 'react-scrollable-anchor';
import bts from '../assets/image.png';
import google from '../assets/google.jpg';
import googlelogo from '../assets/googlelogo.png';
import btslogo from '../assets/bts.png';


import Card from './Card';

function Experience(props){
    return(
    <Container>
        
            <Row className="exp">
                <Col className="left-exp">
                    <ScrollableAnchor id={'section1'}>
                        <h1 id="subtitle">Experience</h1>
                    </ScrollableAnchor>
                    <img src={btslogo} alt="BTSDigital logo"></img>
                     <h2 id="company-info"> Location: Kazakhstan, Nur-Sultan </h2>
                     <h2 id="company-info"> Stack: Kotlin </h2>
                     <h2 id="company-info"> Position: Back-end intern </h2>
                     <h2 id="company-info"> When: June 2018 - August 2018 </h2>
                     <p id="company-descr">During this internship, I implemented chat-bots for a messenger. We worked in pairs with other interns. The first dictionary bot could return the meaning of the given word, synonyms or antonyms using Words API. The second bot was a quiz-bot that asked a question, gave hints, counted the points and displayed a record board of all participants or record board of all attempts of the given user.
</p>
                </Col>
                
                <Col className="right-exp">
                    <Card image={bts} className="bts" photoTitle="The first day of the first internship :)"/>
                     
                </Col>
            </Row>

            <Row className="exp">
                <Col className="right-google">
                    <Card image={google} className="google" photoTitle="Our first TGIF!"/> 
                </Col>
                
                <Col className="left-google">
                     <img src={googlelogo} alt="Google logo"></img>
                     <h2 id="company-info"> Location: Switzerland, Zurich </h2>
                     <h2 id="company-info"> Stack: Python </h2>
                     <h2 id="company-info"> Position: SRE intern </h2>
                     <h2 id="company-info"> When: July 2019 - September 2019 </h2>
                     <p id="company-descr">I was a STEP Site Reliability Engineering Intern at Google where I developed a command-line interface on Python. During STEP (Student Training in Engineering Program) I worked in a pair with another intern. She was working on the front-end part of this project and surfaced the annotations of the dashboard.
 This interface used internal API and allowed to create, read, update, or delete annotations in the SLO monitoring system. It allowed users to see what happened to service with low SLI by looking at the annotations left by another engineer who investigated it.</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;