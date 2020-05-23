import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './Card'
import Menu from './Menu';


function Introduction(props){
    return(
        <Container>
            <Row>
                <Col className="left">
                     <Card />
                </Col>
                
                <Col className="right">
                     
                     <Menu />
                </Col>
            </Row>
        </Container>
    );
}

export default Introduction;