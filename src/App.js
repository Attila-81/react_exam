import React, { useState, useEffect } from "react";
import LoadingMask from "./components/LoadingMask";
import Hotel from "./components/Hotel";

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`api/hotels`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => setData(null))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Hotels</h1>
      {isLoading === true ? (
        <LoadingMask></LoadingMask>
      ) : data ? (
        <div>
          {data.map((item, index) => (
            <Hotel key={index} hotel={item}></Hotel>
          ))}
        </div>
      ) : (
        <p>Oops, something happened</p>
      )}
    </>
  );
};

export default App;
