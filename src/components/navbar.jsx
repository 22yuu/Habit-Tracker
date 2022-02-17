import React, { Component } from "react";

class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="navbar">
        <i className="navbar-logo fas fa-leaf" />
        <span>Habit Tracker</span>
        <span class="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}

export default Navbar;
