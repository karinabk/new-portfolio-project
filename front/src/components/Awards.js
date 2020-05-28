import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollableAnchor from 'react-scrollable-anchor';
import anita from '../assets/anita.png';
import mac from '../assets/mck.png';
import mckphoto from '../assets/mck-photo.JPG';
import Card from './Card';


function Awards(props){
    return(
    <Container>
        <Row>
        <Col className="left-exp">
                    <ScrollableAnchor id={'section2'}>
                        <h1 id="subtitle">Awards</h1>
                    </ScrollableAnchor>
                    <img id="anita" src={anita} alt="Anita"></img>
                    <h2 id="company-info">Grace Hopper Celebration Student Scholarship</h2>
                     <h2 id="company-info"> Location: Orlando, Florida </h2>
                     <h2 id="company-info"> When: October 2019 </h2>
                     <p id="company-descr">GHC is the world’s largest gathering of women in computing. GHC presenters are leaders in their respective fields, representing industry, academia and government.</p>
                     <a href="https://ghc.anitab.org/about/" id="company-info"> Do you want to know more?</a>
                </Col>

        </Row> 

        <Row className="exp">
                <Col className="right-google">
                    <Card image={mckphoto} className="mck-photo" photoTitle="NGWL finalists dinner"/> 
                </Col>
                
                <Col className="left-google">
                     <img src={mac} id="mck" alt="McKinsey"></img>
                     <h2 id="company-info"> Next Generation Women Leaders Award</h2>
                     <h2 id="company-info"> Location: Kazakhstan, Nur-Sultan </h2>
                     <h2 id="company-info"> When: January 2020</h2>
                     <p id="company-descr">The Next Generation Women Leaders award is a scholarship designed to recognize talent and support students who would like to maximize their own potential.</p>
                     <a href="https://www.mckinsey.com/next-generation-women-leaders/overview" id="company-info"> Do you want to know more?</a>
                </Col>
            </Row>
    </Container>
    );
}

export default Awards;