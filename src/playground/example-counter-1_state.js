class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    this.setState((previousState) => {
      return {
        count: Number(previousState.count + 1)
      };
    });
    console.log("add one ", this.state.count);
  }
  handleMinusOne() {
    if (this.state.count !==0) {
      this.setState((previousState) => {
        return {
          count: Number(previousState.count - 1)
        };
      });
      console.log("minus one ", this.state.count);
    }
  }
  handleReset() {
    this.setState(() => {
      return {
        count: this.state.count + 1
      };
    });
    console.log("reset ", this.state.count);
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

ReactDOM.render(<Counter />, document.getElementById("app"));
// const appRoot = document.getElementById("app");

// const app = {
//   title: "This is title",
//   subtitle: "this is subtitle",
//   options: ["one", "two", "three"]
// };

// let count = 0;
// const incrementBy = increment => num => increment + num;

// const addOne = () => {
//   count = incrementBy(1)(count);
//   console.log("plus count ", count);
//   renderCounterApp();
// };
// const minusOne = () => {
//   count = incrementBy(-1)(count);
//   console.log("minus count ", count);
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };
// const showCounter = () => {
//   console.log(count);
// };

// const renderCounterApp = () => {
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id="plus" className="plus-botton" onClick={addOne}>
//         Plus
//       </button>
//       <button id="minux" className="minus-button" onClick={minusOne}>
//         Minus
//       </button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };

// renderCounterApp();
