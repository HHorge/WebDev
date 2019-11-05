import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header.js'
import Body from './Components/Body/Body.js'
import Filter from './Components/Search/Filter.js';
import Wordcloud from './Components/Wordcloud/Wordcloud';
import Details from './Components/Details/Details.js'
import {Route, HashRouter as Router} from 'react-router-dom';
import DataFetcher from './Components/Content/DataFetcher.js'



class App extends Component {

  render(){
    return (
    <div>
      <Header/>
      <DataFetcher />
        <Router>
          <Route exact path='/wordcloud' component={Wordcloud}/>
          <Route exact path='/' component={Filter}/>
          <Route exact path='/' component={Body}/>
          <Route exact path='/details' component={Details}/>
        </Router>
    </div>
  );
  }
  
}

export default App;
