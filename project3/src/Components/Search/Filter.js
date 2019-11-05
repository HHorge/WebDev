import React from "react";
import { useDispatch } from "react-redux";
import { filter, defaultPage } from "../../actions";
import "./Filter.css";

function Search() {
  const dispatch = useDispatch();
 
  function updateFilter(e) {
    dispatch(filter(e));
    dispatch(defaultPage());
  }

//Buttons for setting filter states
  return (
    <div className="container">
    {/* Toggle button to show sidebar with checkboxes */}
    <div id="menuToggle"> 
    <input id= "checkIt" type="checkbox" />
    <span></span>
    <span></span>
    <span></span>

          {/* Radiobuttons for choosing genre */}
          <ul id="menu">
          <li className="radioB">
              <input type="radio" id="def-option" name="selector" onChange={() => updateFilter("")}/>
              <label for="def-option">All</label>
              
              <div className="check"><div className="inside"></div></div>
            </li>

            <li className="radioB">
              <input type="radio" id="option" name="selector" onChange={() => updateFilter("Jazz")}/>
              <label for="option">Jazz</label>
              
              <div class="check"></div>
            </li>

            <li className="radioB">
              <input type="radio" id="f-option" name="selector" onChange={() => updateFilter("Blues")}/>
              <label for="f-option">Blues</label>
              
              <div class="check"></div>
            </li>
            
            <li className="radioB">
              <input type="radio" id="sec-option" name="selector" onChange={() => updateFilter("Pop")}/>
              <label for="sec-option">Pop</label>
              
              <div class="check"><div class="inside"></div></div>
            </li>
            
            <li className="radioB">
              <input type="radio" id="t-option" name="selector" onChange={() => updateFilter("Rock")}/>
              <label for="t-option">Rock</label>
              
              <div className="check"><div class="inside"></div></div>
            </li>
              
            <li className="radioB">
              <input type="radio" id="fo-option" name="selector" onChange={() => updateFilter("Funk / Soul")}/>
              <label for="fo-option">Funk/Soul</label>
              
              <div className="check"><div class="inside"></div></div>
            </li>

            <li className="radioB">
              <input type="radio" id="fi-option" name="selector" onChange={() => updateFilter("Electronic")}/>
              <label for="fi-option">Electronic</label>
              
              <div className="check"><div class="inside"></div></div>
            </li>

            <li className="radioB">
              <input type="radio" id="s-option" name="selector" onChange={() => updateFilter('"Classical')}/>
              <label for="s-option">Classical</label>
              
              <div className="check"><div class="inside"></div></div>
            </li>

            <li className="radioB">
              <input type="radio" id="se-option" name="selector" onChange={() => updateFilter("Reggae")}/>
              <label for="se-option">Reggae</label>
              
              <div className="check"><div class="inside"></div></div>
            </li>

            <li className="radioB">
              <input type="radio" id="e-option" name="selector" onChange={() => updateFilter("Hip Hop")}/>
              <label for="e-option">Hip Hop</label>
              
              <div className="check"><div class="inside"></div></div>
            </li>

            <li className="radioB">
              <input type="radio" id="n-option" name="selector" onChange={() => updateFilter('"Folk')}/>
              <label for="n-option">Folk</label>
              
              <div className="check"><div class="inside"></div></div>
            </li>
          </ul>

    </div>
    </div>
  );
}

export default Search;
