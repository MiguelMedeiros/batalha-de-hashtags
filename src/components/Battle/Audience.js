import React from "react";

const Audience = ({ tweets = [] }) => (
  <div className="battle-audience">
    {tweets.map((x, i) => (
      <p key={i}>{x} tweets</p>
    ))}
  </div>
);

export default Audience;
