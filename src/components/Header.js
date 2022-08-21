import { useState } from "react";
import App from "../App";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Rick and Morty App",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
