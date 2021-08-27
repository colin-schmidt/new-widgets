import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import "./components/App.css"

const items = [
  {
    title: "What is React?",
    content:
      "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
  },
  {
    title: "Why use React?",
    content: (
      <div>
        According to the{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React documentation page
        </a>
        , React is:
        <ul>
          <li>
            <strong>Declarative:</strong> React makes it painless to create
            interactive UIs. Design simple views for each state in your
            application, and React will efficiently update and render just the
            right components when your data changes. Declarative views make your
            code more predictable and easier to debug.
          </li>
          <li>
            <strong>Component-Based:</strong> Build encapsulated components that
            manage their own state, then compose them to make complex UIs. Since
            component logic is written in JavaScript instead of templates, you
            can easily pass rich data through your app and keep state out of the
            DOM.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "How do you use React?",
    content:
      "We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.",
  },
];

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "The color green",
    value: "green",
  },
  {
    label: "A shade of blue",
    value: "blue",
  },
];

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
          label="Select a color:"
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
    </div>
  );
};