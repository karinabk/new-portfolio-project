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
                        <h1 id="subtitle">Research</h1>
                    </ScrollableAnchor>
                    <img src={nu} alt="Nazarbayev University logo"></img>
                     <h2 id="company-info"> Location: Kazakhstan, Nur-Sultan </h2>
                     <h2 id="company-info"> Stack: Python </h2>
                     <h2 id="company-info"> Position: Undergraduate Reasearch Assistant </h2>
                     <h2 id="company-info"> When: October 2019 - Present </h2>
                     <p id="company-descr">Comparative study of the classification models for prediction of bank telemarketing
(Oct 17, 2018, IEEE 12th International Conference on Application of Information and Communication Technologies).</p>
                    <p id="company-descr">
Effective diagnosis of heart disease imposed by incomplete data based on fuzzy random forest.</p>
                    <p id="company-descr">Semi-Supervised learning (Pseudo-Labelling).</p>
            </Col>
                
            </Row>
        </Container>
    )


}

export default Research;