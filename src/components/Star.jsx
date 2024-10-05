//represents individual stars that are randomly placed in space. These components need to be focusable and destructible upon user interaction.

import React, { useRef, useEffect } from "react";
import "./Star.css";

// import PropTypes from "prop-types"; // Import PropTypes
// or disable project-wide in eslintrc (.eslintrc.cjs)
// "rules": {
//   "react/prop-types": "off"
// }

// works but missing props validation
const Star = ({ id, x, y, destroyStar }) => {
  const starRef = useRef(null);
  useEffect(() => {
    const star = starRef.current;
    star.style.outline = "none";
    star.style.textShadow = "1px 1px 8px #fff";
  }, []);

  return (
    <div
      ref={starRef}
      tabIndex="0"
      onClick={() => destroyStar(id)}
      className="Star"
      style={{
        position: "absolute",
        left: `${x}vh`,
        top: `${y}vw`,
      }}
    >
      ⭐️
    </div>
  );
};
// // Add prop types validation
// Star.propTypes = {
//   id: PropTypes.number.isRequired, // Validate 'id' prop
//   x: PropTypes.number.isRequired,
//   y: PropTypes.number.isRequired,
//   destroyStar: PropTypes.func.isRequired,
// };

export default Star;
