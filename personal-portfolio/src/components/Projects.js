// src/components/Projects.js
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import grnliteLogo from "../assets/img/Grn_Lite_Logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // One featured project per tab
  const projectTab1 = [
    {
      title: "GRNLITE: author & editor collaboration platform",
      description:
        "GRNLITE is a collaborative platform connecting authors, beta readers, and editors. It enables real-time feedback to help authors refine manuscripts, fosters direct author-reader communication for clear expectations, and supports project budgeting to match authors with beta readers that fit their needs. Integrated secure payment systems streamline transactions between authors, beta readers, and editors.",
      imgUrl: grnliteLogo,
      link: "https://grnlite.onrender.com/",
    },
  ];

  const projectTab2 = [
    {
      title: "Fitness Center Management API",
      description:
        "Flask & MySQL REST API for members, sessions, and payments. CRUD + validation + Postman collection.",
      imgUrl: projImg2,
      link: "https://github.com/yourusername/fitness-center-api", // ← replace
    },
  ];

  const projectTab3 = [
    {
      title: "E-Commerce",
      description:
        "Flask + SQLAlchemy backend for products, orders, and stock restocking logic. Dockerized.",
      imgUrl: projImg3,
      link: "https://github.com/JSander72/Frontend_Week6_MiniProject_FLASK_eCommerce.git", // ← replace
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Built with clean code, clear docs, and a focus on reliability. Click any card to
                    view the repo or demo.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">GRNLITE</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Fitness API</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">E-Commerce</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectTab1.map((project, index) => (
                            <ProjectCard key={`t1-${index}`} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectTab2.map((project, index) => (
                            <ProjectCard key={`t2-${index}`} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectTab3.map((project, index) => (
                            <ProjectCard key={`t3-${index}`} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
