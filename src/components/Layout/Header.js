import { Fragment } from "react";

import realFakeDoors from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Demo-Meals</h1>
        <div className="headermenu">
          <button className="headerButtons">
            <Link className="links" to="/menu">
              shop
            </Link>
          </button>
          <button className="headerButtons">
            <Link className="links" to="/about">
              about
            </Link>
          </button>
          <button className="headerButtons">
            <Link className="links" to="/dashbord">
              account
            </Link>
          </button>
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={realFakeDoors} alt="Real fake doors" />
      </div>
    </Fragment>
  );
};

export default Header;
