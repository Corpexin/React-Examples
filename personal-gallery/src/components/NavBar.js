import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from  "react-bootstrap";
import logo from '../assets/img/logo.svg';
import userIcon1 from '../assets/img/user-icon1.svg';
import searchIcon1 from '../assets/img/search-icon1.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#showcase" className={activeLink === 'showcase' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('showcase')}>Showcase</Nav.Link>
                    <Nav.Link href="#community" className={activeLink === 'community' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('community')}>Community</Nav.Link>
                    <Nav.Link href="#rules" className={activeLink === 'rules' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('rules')}>Rules</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="#search"><img src={searchIcon1} alt=""/></a>
                    </div>
                    <button className="vvd" onClick={() => console.log('connect')}><span>Upload</span></button>
                    <div className="user-icon">
                        <a href="#user"><img src={userIcon1} alt=""/></a>
                    </div>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}