import React, { Component } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {
    view: true,
  };
  statehandler = () => {
    this.setState({
      view: !this.state.view
    });
    this.state.view ? document.body.className = "bg-secondary" : document.body.className = "bg-light"
    this.state.view ? document.querySelector("body > *").className = "text-light" : document.querySelector("body > *").className = "text-dark"
  };
  render() {
    return (
      <div className="header">
        <h1 className="">KINO.CO</h1>
        <nav className="">
          <i
            onClick={this.statehandler}
            className={
              this.state.view ? "fa-regular fa-sun" : " fa-regular fa-moon"
            }
          ></i>
          <NavLink to="/">Ana Sehife</NavLink>
          <NavLink to="/movies">Filmler</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
