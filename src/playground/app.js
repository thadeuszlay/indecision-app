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
  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const parsedCount = parseInt(json, 10);

      const count = isNaN(parsedCount) ? 0 : parsedCount;
      console.log('count ', count);
      this.setState(() => ({ count }));
    } catch (e) {
      console.error('Error while fetching ', e);
    }
  }
  componentDidUpdate(previousProps, previousState) {
    console.log('update ', previousState);
    if (previousState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
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
ReactDOM.render(<Counter />, document.getElementById('app'));
