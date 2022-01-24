import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [ searchTitle, setSearchTitle ] = useState('');
  const [ searchRank, setSearchRank ] = useState('');

  return (
    <div className="App">
      <h1>IMDB's Top 100 Movies in 2022</h1>
      <input
        type="text"
        placeholder="Search Title..."
        onChange={(event) => {
          setSearchTitle(event.target.value);
        }}
      />
      <h2>Or</h2>
      <input
        type="text"
        placeholder="Search Rank..."
        onChange={(event) => {
          setSearchRank(event.target.value);
        }}
      />

      {JSONDATA.filter((val) => {
        if (searchTitle == '') {
          return null;
        } else if (val.title.toLowerCase().includes(searchTitle.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="movieTitle" key={key}>
            <h3 className="title">{val.title}</h3>
            <p className="rank">Rank: {val.rank}</p>
            <hr />
          </div>
        );
      })}

      {JSONDATA.filter((val) => {
        if (searchRank == '') {
          return null;
        } else if (val.rank.includes(searchRank)) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="movieTitle" key={key}>
            <h3 className="title">{val.title}</h3>
            <p className="rank">Rank: {val.rank}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
