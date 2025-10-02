import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";

// Import certification images
import cert1 from "../../Assets/Certifications/cert1.png";
import cert2 from "../../Assets/Certifications/cert2.png";


function Certifications() {
  const certifications = [
    {
      title: "Data Science Internship - Prodigy InfoTech",
      imgPath: cert1,
      link: "https://www.linkedin.com/posts/christina-s-3626542a5_datascience-internship-python-activity-7348986311166349315-fzWM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmZyfoBRrwVAGRDka1DKK9UDlrfkURWnhA", // replace with actual link
    },
    {
      title: "Web Development Internship - Slytherin",
      imgPath: cert2,
      link: "https://www.linkedin.com/posts/christina-s-3626542a5_webdevelopment-internship-learning-activity-7376605900897366016-sFeC?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEmZyfoBRrwVAGRDka1DKK9UDlrfkURWnhA", // replace
    },
    
  ];

  return (
    <Container fluid className="certification-section" style={{ paddingTop: "100px" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some certifications I have earned to showcase achievements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certifications.map((cert, index) => (
            <Col md={4} className="certification-card" key={index} style={{ marginBottom: "20px" }}>
              <Card className="h-100 shadow-lg rounded-2xl">
                <Card.Img variant="top" src={cert.imgPath} alt={cert.title} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{cert.title}</Card.Title>
                  {cert.link && (
                    <Button
                      variant="primary"
                      href={cert.link}
                      target="_blank"
                      className="mt-auto"
                    >
                      View Certification
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
