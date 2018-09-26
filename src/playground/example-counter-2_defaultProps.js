class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    };
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    this.setState(previousState => {
      return {
        count: Number(previousState.count + 1)
      };
    });
    console.log('add one ', this.state.count);
  }
  handleMinusOne() {
    if (this.state.count !== 0) {
      this.setState(previousState => {
        return {
          count: Number(previousState.count - 1)
        };
      });
      console.log('minus one ', this.state.count);
    }
  }
  handleReset() {
    this.setState(() => {
      return {
        count: this.state.count + 1
      };
    });
    console.log('reset ', this.state.count);
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>

        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  count: 0
};
ReactDOM.render(<Counter count={10}/>, document.getElementById('app'));
