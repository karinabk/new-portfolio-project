import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScrollableAnchor from 'react-scrollable-anchor';
import anita from '../assets/anita.png';
import mac from '../assets/mck.png';
import mckphoto from '../assets/mck-photo.JPG';
import Card from './Card';
import gif from '../assets/ghc.gif';
import GifPlayer from 'react-gif-player';



function Awards(props){
    return(
    <Container>
        <Row>
            <Col className="left-exp">
                    <ScrollableAnchor id={'section2'}>
                        <h2 className="subtitle">Awards</h2>
                    </ScrollableAnchor>
                    <img id="anita" src={anita} alt="Anita"></img>
                    <h3 className="info">Grace Hopper Celebration Student Scholarship</h3>
                     <h3 className="info"> Location: Orlando, Florida </h3>
                     <h3 className="info"> When: October 2019 </h3>
                     <p className="info details">GHC is the world’s largest gathering of women in computing. GHC presenters are leaders in their respective fields, representing industry, academia and government.</p>
                     <a href="https://ghc.anitab.org/about/" className="info"> Do you want to know more?</a>
            </Col>
            <Col className="right-exp">
                <GifPlayer className="card gif" gif={gif} still={gif} />
            </Col>

        </Row> 

        <Row className="exp">
                <Col className="right-google">
                    <Card image={mckphoto} className="mck-photo" photoTitle="NGWL finalists dinner"/> 
                </Col>
                
                <Col className="left-google">
                     <img src={mac} id="mck" alt="McKinsey"></img>
                     <h3 className="info"> Next Generation Women Leaders Award</h3>
                     <h3 className="info"> Location: Kazakhstan, Nur-Sultan </h3>
                     <h3 className="info"> When: January 2020</h3>
                     <p className="info details">The Next Generation Women Leaders award is a scholarship designed to recognize talent and support students who would like to maximize their own potential.</p>
                     <a href="https://www.mckinsey.com/next-generation-women-leaders/overview" className="info"> Do you want to know more?</a>
                </Col>
            </Row>
    </Container>
    );
}

export default Awards;