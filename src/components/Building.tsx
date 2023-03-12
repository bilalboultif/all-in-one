import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import { useNavigate , useParams} from "react-router-dom";


function Building() {
    let whid = window.location.href.split("/")[4];
    const newWhid = whid.slice(0, 4);
    console.log(newWhid);
     let google = "https://rodeo.amazon.com/" + newWhid
    const [location , setLocation] = useState(`${whid}`);
    const locationL = location.toLowerCase();
  console.log(location);
  
    const navigate = useNavigate()
    function handleBack(): void {
        navigate('/all-in-one/'+whid);
   

  
        

      }
      const linkArray = [`https://inside.amazon.com/en/MyWorkplace/FC/NAOps/NACFTSort/US${location}/Pages/${location}.aspx`,
      `https://inside.amazon.com/en/MyWorkplace/FC/NAOps/NACFMixedSort/us${locationL}/Pages/${location}.aspx`,
      `https://inside.amazon.com/en/MyWorkplace/FC/NAOps/NACFNonSorts/US${location}/Pages/default.aspx`
      ];
  
       
  const LinkList = () => {
      const [validLinks, setValidLinks] = useState<string[]>([]);
       const  links: Array<string> = [];
      useEffect(() => {
        const checkLinks = async () => {
         
    
          for (const link of linkArray) {
            try {
              const response = await fetch(link);
              if (response.ok) {
                links.push(link);
              }
            } catch (error) {
              console.log(`Error checking link: ${link}`, error);
            }
          }
    
          setValidLinks(links);
        };
    
        checkLinks();
      }, []);
    
      return (
        <div>
          {validLinks.map((link) => (
            <a href={link}>{link}</a>
          ))}
        </div>
      );
    };
      const MyComponent = () => {
        const [showLinks, setShowLinks] = useState(false);
      
        const handleButtonClick = () => {
          setShowLinks(true);
        };
      
        return (
          <div>
            <button onClick={handleButtonClick}>Show Links</button>
            {showLinks && (
              <React.Fragment>
                <LinkList />
              </React.Fragment>
            )}
          </div>
        );
      };
  return (
    <Container style = {{minWidth: "80%", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", marginTop: "50px", maxHeight: "100%"
        }}>
    <Card style={{ width: '30rem' }}>
      <Card.Body>
        <Card.Title>Building</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Global Rapid Asset Deployment</Card.Subtitle>
        <Card.Text style={{marginTop: "50px", marginBottom: "30px"}}>
          Please click on Wiki page for more information or go directly to River Workflow
        </Card.Text>

      </Card.Body>
      <MyComponent />
       <Button style={{margin: "50px"}}variant="primary" href={`https://inside.amazon.com/en/MyWorkplace/FC/NAOps/NACFMixedSort/us${locationL}/Pages/${location}.aspx`} target="_new"
      >Or this Page</Button>
      <Button style={{margin: "50px"}}variant="primary" href="https://river.amazon.com/?org=it_help&buildingId=*&q0=a784d9a3-02aa-47c1-a89b-71fb60a8b658" target="_new">River Workflow</Button>
      <Button style={{margin: "50px"}}variant="danger" onClick={() => handleBack()}>Back</Button>



    </Card>
    </Container>
  );
}

export default Building