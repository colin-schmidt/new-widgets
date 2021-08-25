import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Chinese (Simplified)",
    value: "zh",
  },
  {
    label: "English",
    value: "en",
  },
  {
    label: "Hmong",
    value: "hmn",
  },
  {
    label: "Spanish",
    value: "es",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <Dropdown
        label="Select a language:"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <div className="ui form">
        <div className="field">
          <label>Enter text to be translated:</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <hr />
      <h3 className="ui header">Output:</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
