import React, { useState } from "react";
import Faqbox from "./faqCompo";
import Header from "./Header";

const Faq = () => {
  const arr = [
    {
      question: "Do I need to use JSX with React?",
      answer: "No! Check out “React Without JSX” to learn more.",
    },
    {
      question: "Do I need to use ES6 (+) with React?",
      answer: "No! Check out “React Without ES6” to learn more.",
    },
    {
      question: "Can I use inline styles?",
      answer:
        "CSS classes are generally better for performance than inline styles.",
    },
    {
      question: "What is CSS-in-JS?",
      answer:
        "CSS-in-JS” refers to a pattern where CSS is composed using JavaScript instead of defined in external files.Note that this functionality is not a part of React, but provided by third-party libraries. React does not have an opinion about how styles are defined; if in doubt, a good starting point is to define your styles in a separate *.css file as usual and refer to them using className.",
    },
  ];
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="faqHeading">
        <h1>FAQ Page</h1>
      </div>

      <div className="faqS">
        {arr.map((elem) => {
          return <Faqbox question={elem.question} answer={elem.answer} />;
        })}
      </div>
    </>
  );
};

export default Faq;
