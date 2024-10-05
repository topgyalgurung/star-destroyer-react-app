//generating stars at random locations within its bounds every 2.5 seconds and manages the lifecycle of these stars.

import React, { useState, useEffect, useRef } from "react";
import Star from "./Star";

function Space() {
  const [star, setStar] = useState([]);
  // useRef to focus on individual stars on first render
  const intervalRef = useRef();

  //   const STAR_SIZE = 30;
  //   // random number generator
  //   function getRandom() {
  //     return Math.random() * (window.innerWidth - STAR_SIZE);
  //   }
  function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
  }

  useEffect(() => {
    // set up an interval that adds a new star to space every 2.5 seconds.
    intervalRef.current = setInterval(() => {
      const addStar = () => {
        setStar((star) => [
          ...star,
          {
            id: Math.floor(Math.random() * 100),
            x: getRandom(),
            y: getRandom(),
          },
        ]);
      };
      addStar();
    }, 2500);
    // clear interval to avoid memory leaks
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const destroyStar = (id) => {
    setStar((star) => star.filter((s) => s.id !== id));
  };
  return (
    <div>
      {/* <button onClick={addStar}> Add Star </button> */}
      {star.map((s) => (
        <Star key={s.id} id={s.id} destroyStar={destroyStar} x={s.x} y={s.y} />
      ))}
    </div>
  );
}

export default Space;
