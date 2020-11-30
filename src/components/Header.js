import React from "react";

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle}</h2>}
  </div>
);

// setting defaultProps
Header.defaultProps = {
  title: "some default!",
};

export default Header;
