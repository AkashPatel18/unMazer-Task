import React, { useState } from "react";

const Faqbox = (props) => {
  return (
    <div className="faqs">
      <div className="faq">
        <h3 className="faqQ">{props.question}</h3>
        <p id="answer" className="faqA">
          {props.answer}
        </p>
      </div>
    </div>
  );
};
export default Faqbox;
