import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css';

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    // //helper below because can't use async await directly w useEffect
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };
    //below avoids 500ms delay upon init render (if there's no results yet, just return search)
    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        //below sets 500ms timeout before fetching wiki api, but also resets timeout every time term changes
        if (term) {
          search();
        }
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>

          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <h3 >Enter Search Term:</h3>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

// Notes:
//   2nd argument of useEffect dictates when useEffect is executed. 3 possibilities:
//   1. [] - runs 1st arg of useEffect at initial render only
//   2. nothing - runs 1st arg at initial render AND after every rerender
//   3. [1+ elements inside] - runs at initial rerender AND after every rerender IF 1+ elements inside array has
//   changed since last render
