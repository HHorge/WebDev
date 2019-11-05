//Component to display details about objects

import React from "react";
import "../Body/Body.css";
import "./Details.css";
import { useSelector } from "react-redux";
import Rating from '../Rating/Rating.js';
import { Link } from "react-router-dom";

function Details() {
  const stateDetails = useSelector(state => state.details);

    return(
        <div>
        <div>
            {/* Backbutton to mainpage */}
            <Link to="/">
            <button className="nav backbutton">
            {"<"}
            </button>
            </Link>
        </div>
    {/* Detailed view of album */}
        <div className="grid">
        <div className="DetailsGrid"> 
        <div className="albumInfo">
        <ul className="DetailsList">
            
            <li><h2 className="h2Details">Album name</h2><p className="ParagraphDetails">{stateDetails["Album"]}</p></li>
            <li><h3 className="h3Details">Artist</h3><p className="ParagraphDetails">{stateDetails["Artist"]}</p></li>
            <li><h3 className="h3Details">Year</h3><p className="ParagraphDetails">{stateDetails["Year"]}</p></li>
            <li><h3 className="h3Details genre">Genre</h3><p className="ParagraphDetails">{stateDetails["Genre"]}</p></li>
            <li><h3 className="h3Details genre">Subgenre</h3><p className="ParagraphDetails">{stateDetails["Subgenre"]}</p></li>
            
            </ul>
            </div>
            <div className="rating">
            <Rating/>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Details;
