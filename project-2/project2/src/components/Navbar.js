import "./Navbar.css";
import React, { Component } from "react";
import Tools from "./Tools.js";

class Navbar extends Component {
  constructor(props) {
    super(props);
    let startTab = this.load();
    this.state = {
      tab: startTab,
      saveBtn: false,
      loadBtn: false
    };

    this.toggleSaveBtn = this.toggleSaveBtn.bind(this);
    this.toggleLoadBtn = this.toggleLoadBtn.bind(this);
  }

  setTab = tab => {
    this.setState({ tab });
  };

  toggleSaveBtn() {
    this.setState(state => ({ saveBtn: !state.saveBtn }));
  }
  toggleLoadBtn() {
    this.setState(state => ({ loadBtn: !state.loadBtn }));
  }

  load() {
    if (sessionStorage.getItem("current")) {
      return JSON.parse(sessionStorage.getItem("current"))["tab"];
    } else {
      return 0;
    }
  }

  save = () => {
    this.toggleSaveBtn();
  };

  loadFavourite = () => {
    if (localStorage.getItem("favourite")) {
      this.toggleLoadBtn();
      let favTab = localStorage.getItem("favourite");
      let tab = JSON.parse(favTab)["tab"];
      this.setTab(tab);
    } else {
      alert("You haven't saved a combination yet!");
    }
  };

  render() {
    return (
      // NAVIGATIONBUTTONS
      <div>
        <button className="Save SaveLoad" onClick={() => this.save()}>
          Save current combination
        </button>
        <button className="Load SaveLoad" onClick={() => this.loadFavourite()}>
          Load saved combination             
        </button>
        <div className="grid">
          <button className="tab1" onClick={() => this.setTab(0)}>
            Trump
          </button>
          <button className="tab2" onClick={() => this.setTab(1)}>
            Richard
          </button>
          <button className="tab3" onClick={() => this.setTab(2)}>
            Jaden
          </button>
          <button className="tab4" onClick={() => this.setTab(3)}>
            Michael
          </button>
        </div>

      {/* PICTURE AND BUTTONS FOR MAKING ARTBOART */}
        <div className="Artboard-tools">
          <Tools
            toggleSaveBtn={this.toggleSaveBtn}
            toggleLoadBtn={this.toggleLoadBtn}
            activeTab={this.state.tab}
            saveBtn={this.state.saveBtn}
            loadBtn={this.state.loadBtn}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
