import React from 'react';

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle}</h2>
      <p>This is header</p>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'some default title'
};

export default Header;
