class IndecisionApp extends React.Component {
  render() {
    const title = "This is title";
    const subtitle = "This is subtitle";
    const options = ["adf", "basdf", "cadsf"];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        <p>This is header</p>
      </div>
    );
  }
}

class Action extends React.Component {
  handleClick() {
    alert("handle pick");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <li>{this.props.value}</li>;
  }
}

class Options extends React.Component {
  // overwrite constructor
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
    // alert("remove all");
  }

  render() {
    return (
      <div>
        <p>Option Component here {this.props.options.length}</p>
        <button onClick={this.handleRemoveAll}>Remove all</button>

        <ol>
          {this.props.options.map((o, idx) => (
            <Option key={idx} value={o} />
          ))}
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const optVal = e.target.elements.option.value;
    if (optVal.trim()) {
      alert(optVal);
    }
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
