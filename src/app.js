import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

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
