import React from 'react';

const Option = props => (
  <li className="option">
    <p className="option__text">{props.count}. {props.value}</p>
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.value);
      }}
    >
      Remove
    </button>
  </li>
);

export default Option;
