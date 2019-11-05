import React from 'react';
import './Body.css';
import Search from '../Search/Search.js';
import Content from '../Content/Content.js';
import Wordcloud from '../Wordcloud/Wordcloud.js';

function Body(){
    return(
        <div className="App grid">
        <div className="Content"><Search/><Content/></div>
        </div>
    );
}

export default Body;

