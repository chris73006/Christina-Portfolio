import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Christina </span>
            from <span className="purple"> Chennai, India.</span>
            <br />
            I am currently pursuing B.E Computer Science.
            <br />
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring datasets and building small projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Practicing exercises on Python
            </li>
            <li className="about-activity">
              <ImPointRight /> Interested to Explore Content Writing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to learn, explore, and turn data into meaningful insights!"{" "}
          </p>
          <footer className="blockquote-footer">Christina</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
