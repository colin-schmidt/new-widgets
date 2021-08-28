import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import "./components/App.css";

const items = [
  {
    title: "Look at this Accordion Menu!",
    content: "I made it using state and event handlers. ",
  },
  {
    title:
      "I used a React.Fragment to avoid returning a <div>, which was creating unwanted effects.",
    content: "Good to know!",
  },
  {
    title: "The helper function onTitleClick...",
    content:
      "...had to be refactored in order to allow users to reclose all 3 indices after the page loaded.",
  },
];

const options = [
  {
    label: "Red!",
    value: "red",
  },
  {
    label: "Green!",
    value: "green",
  },
  {
    label: "Blue!",
    value: "blue",
  },
];

const dropdownNotes = (
  <div>
    <h4>Notes on making the dropdown menu:</h4>
    <br />
    <ul>
      <li>
        It was unexpectedly hard to allow the user to click outside of the menu
        to close the dropdown. I needed another helper function to allow the
        Dropdown component to "listen" for a click event on the body.
      </li>
    </ul>
  </div>
);

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          options={options}
          label="Select an option:"
          selected={selected}
          onSelectedChange={setSelected}
          dropdownNotes={dropdownNotes}
        />
      </Route>
    </div>
  );
};
