import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollableAnchor from 'react-scrollable-anchor'
import Card from './Card';

function Experience(props){
    return(
    <Container>
        
            <Row className="exp">
                <Col className="left-exp">
                    <ScrollableAnchor id={'section1'}>
                     <h1 id="subtitle">Experience</h1>

                    </ScrollableAnchor>
                     <h2 id="subtitle-company">BTSDigital </h2>
                     <h2 id="company-info"> Location: Kazakhstan, Nur-Sultan </h2>
                     <h2 id="company-info"> Stack: Kotlin </h2>
                     <h2 id="company-info"> Position: Back-end intern </h2>
                     <h2 id="company-info"> When: June 2018 - August 2018 </h2>
                     <p id="company-descr">During this internship, I implemented chat-bots for a messenger. We worked in pairs with other interns. The first dictionary bot could return the meaning of the given word, synonyms or antonyms using Words API. The second bot was a quiz-bot that asked a question, gave hints, counted the points and displayed a record board of all participants or record board of all attempts of the given user.
</p>
                </Col>
                
                <Col className="right-exp">
                    <Card image={props.image} className={props.className} photoTitle={props.photoTitle}/>
                     
                </Col>
            </Row>
        </Container>
    );
}

export default Experience;