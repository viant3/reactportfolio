import React, { useState, useCallback} from "react";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col } from "./bootstrap-component.jsx";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import NSA from "../../pages/images/nsaBuild.jpg";
import doctor from "../../pages/images/doctor.jpg";
import trivia from "../../pages/images/triviaChuck.jpg";
import biohazzard from "../../pages/images/biohazzard.jpg";
import claws from "../../pages/images/claws.jpg";
import "./style.css";

const styles = { height: 400, width: "100%" };
const icon_glass = <span className="fa fa-glass" color="black" />;
const icon_music = <span className="fa fa-music" color="grey" />;

function Slides() {
  const [autoplay, setAutoplay] = useState(true);
  const [icon, setIcon] = useState({});
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
  const _visiableOnSelect = useCallback(active => {
    console.log(`visiable onSelect active=${active}`);
  }, []);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  }, []);
  const _changeIcon = useCallback(() => {
    // Icon Switch
    setIcon(({ leftIcon, rightIcon }) => {
      leftIcon = leftIcon ? undefined : icon_glass;
      rightIcon = rightIcon ? undefined : icon_music;
      return { leftIcon: leftIcon, rightIcon: rightIcon };
    });
  }, []);


  return (
    <div className="container-fluid" style={{ paddingBottom: 20 }}>
     
      <Row>
      
      
        <Col span={12}>
          <RBCarousel
            autoplay={autoplay}
            pauseOnVisibility={true}
            onSelect={_visiableOnSelect}
            slideshowSpeed={2500}
            version={4}
            
          >
            <div style={{ ...styles, backgroundColor: "white" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/project1/">
              <div className="carousel-center">
              <img
                style={{ width: "100%", height: "100%" }}
                src={doctor}
                alt={"Project 1"}
                className="roundCorner"
              />
              </div>


              <div className="carousel-caption dark">The Doctor is In</div>
              </a>
            </div>
            <div style={{ ...styles, backgroundColor: "white" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://ucfp2.herokuapp.com/">
              <div className="carousel-center">
              <img
                style={{ width: "100%", height: "100%" }}
                src={claws}
                alt={"Project 2"}
                className="roundCorner"
              />
              </div>


              <div className="carousel-caption dark">Project 2 / MySQL</div>
              </a>
            </div>
            <div style={{ ...styles, backgroundColor: "white" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://vpdcproj3.herokuapp.com/">
              <div className="carousel-center ">
              <img
                style={{ width: "100%", height: "100%" }}
                src={NSA}
                alt={"Project 3"}
                className="roundCorner"
              />
              </div>
              <div className="carousel-caption dark">Project 3 MongoDB</div>
              </a>
            </div>


            <div style={{ ...styles, backgroundColor: "white" }}>
            <a  target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/TriviaGame/">
              <div className="carousel-center ">
              <img
                style={{ width: "100%", height: "100%" }}
                src={trivia}
                alt={"Trivia"}
                className="roundCorner"
              />
              </div>
              <div className="carousel-caption dark">Chuck Norris Trivia</div>
              </a>
            </div>

            <div style={{ ...styles, backgroundColor: "white" }}>
            <a target="_blank" rel="noopener noreferrer" href="https://viant3.github.io/unit-4-game/">
              <div className="carousel-center ">
              <img
                style={{ width: "100%", height: "100%" }}
                src={biohazzard}
                alt={"BioHazzard"}
                className="roundCorner"
              />
              </div>
              <div className="carousel-caption dark">Bio-Hazzard Game</div>
              </a>
            </div>
          </RBCarousel>
        </Col>
    
      </Row>
    </div>
  );
}
export default Slides;
