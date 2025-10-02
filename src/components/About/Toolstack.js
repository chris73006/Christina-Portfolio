import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiJetbrains, SiPostman, SiMysql } from "react-icons/si";
import { FaFileExcel } from "react-icons/fa";
import { BiBarChartAlt2 } from "react-icons/bi"; // ✅ Power BI substitute

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* VS Code */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

      {/* PyCharm (JetBrains family icon) */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains />
      </Col>

      {/* Excel */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>

      {/* Power BI */}
      <Col xs={4} md={2} className="tech-icons">
        <BiBarChartAlt2 />
      </Col>

      {/* MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Toolstack;
