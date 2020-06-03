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
            <Col className="left-exp">
                    <ScrollableAnchor id={'section3'}>
                        <h2 className="subtitle">Research</h2>
                    </ScrollableAnchor>
                    <img src={nu} alt="Nazarbayev University logo"></img>
                     <h3 className="info"> Location: Kazakhstan, Nur-Sultan </h3>
                     <h3 className="info"> Stack: Python </h3>
                     <h3 className="info"> Position: Undergraduate Reasearch Assistant </h3>
                     <h3 className="info"> When: October 2019 - Present </h3>
                     <p className="info details">Comparative study of the classification models for prediction of bank telemarketing
(Oct 17, 2018, IEEE 12th International Conference on Application of Information and Communication Technologies).</p>
                    <p className="info details">
Effective diagnosis of heart disease imposed by incomplete data based on fuzzy random forest.</p>
                    <p className="info details">Semi-Supervised learning (Pseudo-Labelling).</p>
            </Col>
                
            </Row>
        </Container>
    )


}

export default Research;