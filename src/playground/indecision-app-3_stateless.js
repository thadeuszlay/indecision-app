class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: props.options,
      title: 'This is title',
      subtitle: 'This is subtitle'
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOptions = this.handleAddOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handleAddOptions(option) {
    if (!option) {
      return 'No options was entered';
    } else if (this.state.options.includes(option)) {
      return 'Option already exists';
    }

    this.setState(prevState => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }
  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);

    alert(this.state.options[rand]);
  }
  render() {
    return (
      <div>
        <Header subtitle={this.state.subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePickEventHandler={this.handlePick}
        />
        <AddOption addOptionEventHandler={this.handleAddOptions} />
        <Options
          options={this.state.options}
          removeEventHandler={this.handleDeleteOptions}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <p>This is header</p>
    </div>
  );
};

Header.defaultProps = {
  title: 'some default title'
};

const Action = props => {
  return (
    <div>
      <button
        onClick={props.handlePickEventHandler}
        disabled={!props.hasOptions}
      >
        What should I do
      </button>
    </div>
  );
};

const Option = props => {
  return <li>{props.value}</li>;
};

const Options = props => {
  return (
    <div>
      <p>Option Component here {props.options.length}</p>
      <button onClick={props.removeEventHandler}>Remove all</button>

      <ol>
        {props.options.map((o, idx) => (
          <Option key={idx} value={o} />
        ))}
      </ol>
    </div>
  );
};

class AddOption extends React.Component {
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

    this.setState(() => {
      return {
        error
      };
    });

    e.target.elements.option.value = '';
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

ReactDOM.render(<IndecisionApp options={['a', 'b', 'c']}/>, document.getElementById('app'));
