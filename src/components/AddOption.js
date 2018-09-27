import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOptions(e) {
    e.preventDefault();

    const optVal = e.target.elements.option.value;
    const error = this.props.addOptionEventHandler(optVal);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p className="add-option-error">Error: {this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOptions}>
          <input className="add-option__input" type="text" name="option" />
          <button
            className="button button--link"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
