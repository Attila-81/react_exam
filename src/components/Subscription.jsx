import React, { useState, useEffect } from "react";
import LoadingMask from "./LoadingMask";

const Subscription = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [response, setResponse] = useState(null);

  const submitForm = (close) => {
    setLoading(true);
    fetch("api/hotels/subscribe", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: value }),
    })
      .then((res) => setResponse(true))
      .catch((err) => setResponse(false))
      .finally(() => setTimeout(close, 5000));
  };

  return (
    <div>
      {response === true ? (
        <p>Subscribed</p>
      ) : response === false ? (
        <p>Oops, something happened</p>
      ) : loading ? (
        <LoadingMask />
      ) : (
        <div>
          <h3>Request more info about</h3>
          <input
            name="email"
            type="email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            disabled={!(value.includes("@") && value.includes("."))}
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default Subscription;
