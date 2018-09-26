import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

const Layout = () => {
  return (
    <div>
      <p>header</p>
    </div>
  );
}
ReactDOM.render(
  <IndecisionApp options={['a', 'b', 'c']} />,
  document.getElementById('app')
);
