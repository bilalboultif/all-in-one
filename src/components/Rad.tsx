import Card from 'react-bootstrap/Card';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useNavigate , useParams} from "react-router-dom";

function TextExample() {
    const {whid} = useParams();
    const navigate = useNavigate()
    function handleBack(): void {
        navigate('/all-in-one/'+whid);
        
      }
  return (
    <Container style = {{minWidth: "80%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginTop: "50px", maxHeight: "100%"
        }}>
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>RAD</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Global Rapid Asset Deployment</Card.Subtitle>
        <Card.Text style={{marginTop: "50px", marginBottom: "30px"}}>
          Please click on Wiki page for more information or go directly to River Workflow
        </Card.Text>

      </Card.Body>
      <Button style={{margin: "50px"}}variant="primary" href="https://w.amazon.com/bin/view/OpsTechIT/SupplyChain/RAD/" target="_new"
      >RAD Wiki Page</Button>
      <Button style={{margin: "50px"}}variant="primary" href="https://river.amazon.com/?org=it_help&buildingId=*&q0=a784d9a3-02aa-47c1-a89b-71fb60a8b658" target="_new">River Workflow</Button>
      <Button style={{margin: "50px"}}variant="danger" onClick={() => handleBack()}>Back</Button>



    </Card>
    </Container>
  );
}

export default TextExample