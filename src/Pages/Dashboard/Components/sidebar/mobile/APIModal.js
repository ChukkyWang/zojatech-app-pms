import React from "react";
import { useTransition, animated } from "react-spring";
import Sidebar from "../sidebar";
import "./mobile.css";

function Mobile({ children, open, setIsOpen, status, mobile }) {
  //   const [isClicked, setIsClicked] = useState(true)
  console.log(status);
  const transitions = useTransition(open, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: open,
  });
  return transitions(
    ({ opacity }, item) =>
      item && (
        <>
          <animated.div
            onClick={() => setIsOpen(!open)}
            className="mobile_other-menu mobile_black_lead"
            style={{
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
          ></animated.div>
          <animated.div
            className="mobile_holder mobile_advanced_menu"
            style={{
              opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            }}
          >
            <Sidebar open={open} setIsOpen={setIsOpen} mobile={mobile} />
          </animated.div>
        </>
      )
  );
}

export default Mobile;
