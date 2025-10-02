import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Project screenshots
import carPriceImg from "../../Assets/Projects/car-price.png";
import sentimentImg from "../../Assets/Projects/sentiment.jpeg";
import visualizationImg from "../../Assets/Projects/visualization.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I completed as a Data Science Intern.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1: Data Visualization */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visualizationImg}
              title="📊 Data Visualization with Python"
              description="Created a histogram using Seaborn, Matplotlib, and Pandas to visualize age distribution. Learned data visualization, PyCharm workflow, and GitHub project management."
              ghLink="https://github.com/chris73006/PRODIGY_DS_01" // Replace
              
            />
          </Col>

          {/* Project 2: Sentiment Analysis */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimentImg}
              title="📝 Sentiment Analysis on Social Media Data"
              description="Built a Tweet Sentiment Classifier using Python and TextBlob with a Streamlit web app. Features real-time sentiment prediction, word cloud visualization, and CSV input/output handling."
              ghLink="https://github.com/chris73006/PRODIGY_DS_04" // Replace
              
            />
          </Col>

          {/* Project 3: Car Price Prediction */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carPriceImg}
              title="🚗 Car Price Prediction Web App"
              description="   Developed a regression model using scikit-learn to predict car prices. Created a Streamlit web app with interactive input for real-world data predictions and ML deployment practice."
              ghLink="https://github.com/chris73006/Price-Predict-ML" // Replace
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;