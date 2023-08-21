import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/example-gallery2.jpg";
import projImg3 from "../assets/img/example-gallery1.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            likes: 12,
            views: 200,
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            likes: 12,
            views: 200,
            imgUrl: projImg2,
        },
        {
            title: "Business Startup Holassss d",
            description: "Design & Development Aweso",
            likes: 12,
            views: 200,
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            likes: 12,
            views: 200,
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            likes: 12,
            views: 200,
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            likes: 12,
            views: 200,
            imgUrl: projImg3,
        }
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>lkjasdlk lkjasdlkj lkajsdlakjsda  aksjhaksjd</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p>{project.description}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <p>{project.imgUrl}</p>
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
    )
}