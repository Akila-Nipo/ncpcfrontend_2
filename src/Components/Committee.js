import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ChoyonSirCard from "./ChoyonSirCard";

function Committee({imageUrls,executiveNameList,executivePostList,committeeName}) {


    
    return (
        <Container fluid="true" className="mt-3 pb-3">
           <div className="committeeTextDiv">
               <h4 className="title text-white">{committeeName}</h4>
           </div>
            <Row className="mt-2 p-0 mx-0">
                {imageUrls.map((img, idx) => (
                    <Col className="mt-3" lg={3} md={4} sm={6}>
                        <ChoyonSirCard choyon={img} name={executiveNameList[idx]} post={executivePostList[idx]}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Committee;
