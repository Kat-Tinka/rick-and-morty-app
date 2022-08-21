import { useState } from "react";
import App from "../../App";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="header">
      <span className="text-primary">
        <h1 className="text-center ubuntu my-3">{title}</h1>
      </span>
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
