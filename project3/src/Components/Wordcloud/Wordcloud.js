import React from "react";
import ReactWordcloud from "react-wordcloud";
import "./Wordcloud.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Wordcloud() {
  const stateAlbums = useSelector(state => state.albums);
  let genres = [{ text: "Hello", value: 0 }];

  function makeGenreDic() {
    // Iterates through albums and pushes unique genres to json list.
    // this doesnt work as intended, so the wordcloud shows one of each genre mentiones
    for (let a in stateAlbums) {
      if (!genres.includes(stateAlbums[a]["Genre"])) {
        genres.push({
          text: stateAlbums[a]["Genre"],
          value: 1
        });
      } else if (genres.text === stateAlbums[a]) {
        genres.value += 1;
      }
    }

    return genres;
  }

  return (
    <div>
      <div>
        {/* Backbutton to mainpage */}
        <Link to="/">
          <button className="nav backbutton">{"<"}</button>
        </Link>
      </div>
      <div className="Wordcloud" style={{ height: 300, width: 300 }}>
        <ReactWordcloud words={makeGenreDic()} size={[300, 300]} />
      </div>
    </div>
  );
}

export default Wordcloud;
