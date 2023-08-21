import { Col } from "react-bootstrap";
import favIcon from '../assets/img/social-fav1.svg';
import viewsIcon from '../assets/img/social-views1.svg';

export const ProjectCard = ({ title, description, imgUrl, likes, views}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
                <div className="proj-txstats">
                    <img src={favIcon} className="proj-txfav" alt="nav1" />
                    <span> {likes} </span>
                    <img src={viewsIcon}  className="proj-txviews" alt="nav1" />
                    <span> {views} </span>
                </div>
            </div>
        </Col>
    )
}