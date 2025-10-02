import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  
  
  
  
  DiPython,
  
  
} from "react-icons/di";
import {
 SiMysql,   // ✅ MySQL
} 
from "react-icons/si";
// ✅ New imports for Excel, Power BI, Tableau
import { FaFileExcel, FaChartPie } from "react-icons/fa"; 
import { BiBarChartAlt2 } from "react-icons/bi";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      

      {/* ✅ Excel */}
      <Col xs={4} md={2} className="tech-icons">
        <FaFileExcel />
      </Col>

      {/* ✅ Power BI */}
      <Col xs={4} md={2} className="tech-icons">
        <BiBarChartAlt2 />
      </Col>

      {/* ✅ Tableau */}
      <Col xs={4} md={2} className="tech-icons">
        <FaChartPie />
      </Col>

      {/* ✅ MySQL */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
    </Row>
  );
}

export default Techstack;
