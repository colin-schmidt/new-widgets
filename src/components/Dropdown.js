import React, { useState, useEffect, useRef } from "react";

/*
Bubbling - when an event is triggered, it originates on the target of what you (clicked, hovered over, etc.)
then it "bubbles up" to that element's parent and also calls any function thats on that parent
it continues up to the most parent element in a similar way

CAN cancel event bubbling, but that's bad practice bc it can easily break stuff

Important note about event listeners:

Event listeners that are added with .addEventListener actually trigger first
THEN the rest of the callback functions trigger/bubble, starting with the "youngest" child


*/

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false); //for displaying/not displaying the rest of dropdown
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        {/* below we display the label prop and pass in it's value instead of hard coding color or language */}
        <label className="label">{label} </label> 
        <div
          //whenever we click dropdown, it sets state to the opposite of what state is currently
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
