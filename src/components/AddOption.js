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
    console.log('====================================');
    console.log('testing');
    console.log('====================================');
    const optVal = e.target.elements.option.value;
    const error = this.props.addOptionEventHandler(optVal);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOptions}>
        <input type="text" name="option" />
        <button>Submit</button>
        {this.state.error && <p>Error: {this.state.error}</p>}
      </form>
    );
  }
}
