import React, { useState, useEffect, useRef } from "react";
import './Dropdown.css';

const Dropdown = ({
  label,
  options,
  selected,
  onSelectedChange,
  dropdownNotes,
}) => {
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
        <h3 className="label">{label} </h3>
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
      {dropdownNotes}
    </div>
  );
};

export default Dropdown;
