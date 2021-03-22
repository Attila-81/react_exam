import React, { useState, useEffect } from "react";
import Subscription from "./Subscription";

const Hotel = (props) => {
  const [show, setShow] = useState(false);
  const [showSub, setShowSub] = useState(false);

  useEffect(() => {
    setShowSub(false);
  }, [setShow]);

  return (
    <div>
      <p>{props.hotel.name}</p>
      {show && (
        <>
          <p>
            {props.hotel.city} ({props.hotel.stars})
          </p>
          <button onClick={() => setShowSub(true)}>Request more info</button>
          {showSub ? <Subscription /> : <></>}
        </>
      )}

      {show ? (
        <button onClick={() => setShow(false)}>Show less</button>
      ) : (
        <button onClick={() => setShow(true)}>Show more</button>
      )}
    </div>
  );
};

export default Hotel;
