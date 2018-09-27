import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    {props.options.length === 0 && <p>Please add an option to get started.</p>}
    <p className="widget__message">Number of Options {props.options.length}</p>

    <div className="widget-header">
      <h3 className="widget-header__headline">Your Options</h3>
      <button
        className="button button--link"
        onClick={props.removeEventHandler}
      >
        Remove all
      </button>
    </div>
    <div className="widget-body">
      <ol>
        {props.options.map((o, idx) => (
          <Option
            count={idx + 1}
            key={idx}
            value={o}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))}
      </ol>
    </div>
  </div>
);

export default Options;
