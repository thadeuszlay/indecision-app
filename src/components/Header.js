import React from 'react';

const Header = props => (
  <div>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
    <p>This is header</p>
  </div>
);

Header.defaultProps = {
  title: 'some default title'
};

export default Header;
