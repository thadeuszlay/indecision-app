import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <p>Option Component here {props.options.length}</p>
    {props.options.length === 0 && <p>Please add an option to get started.</p>}
    <button onClick={props.removeEventHandler}>Remove all</button>

    <ol>
      {props.options.map((o, idx) => (
        <Option
          key={idx}
          value={o}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ol>
  </div>
);

export default Options;
