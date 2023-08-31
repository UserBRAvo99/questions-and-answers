import React from "react";

function questionAnswerRender(data) {
  return (
    <ul>
      {data.map(({ question, answer }) => {
        return (
          <li>
            <h2>{question}</h2>
            <p>{answer}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default questionAnswerRender;
