import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Salesforce Tech Lead", "Salesforce Engineer", "Web Developer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        
        return () => { clearInterval(ticker)};
    }, [text]) // eslint-disable-line react-hooks/exhaustive-deps

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting && updatedText === fullText) { 
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') { 
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__heartBeat" : ""}>
                                <h1> The archive</h1>
                                <p>Become a star model and be part of the internet forever or just have fun sharing your most desired models. We don't host any images we are just a linker.</p>
                                <button onClick={() => console.log('connect')}>Start uploading!</button>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <p>AQUI VA EL SPAM. Habrá que crearle un componente propio</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}