import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  //Helper function:
  const onTitleClick = (index) => {
    index === activeIndex ? setActiveIndex(null) : setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment className="dropdown" key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
