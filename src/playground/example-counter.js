"use strict";

const appRoot = document.getElementById("app");

const app = {
  title: "This is title",
  subtitle: "this is subtitle",
  options: ["one", "two", "three"]
};

let count = 0;
const incrementBy = increment => num => increment + num;

const addOne = () => {
  count = incrementBy(1)(count);
  console.log("plus count ", count);
  renderCounterApp();
};
const minusOne = () => {
  count = incrementBy(-1)(count);
  console.log("minus count ", count);
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};
const showCounter = () => {
  console.log(count);
};


const renderCounterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button id="plus" className="plus-botton" onClick={addOne}>
        Plus
      </button>
      <button id="minux" className="minus-button" onClick={minusOne}>
        Minus
      </button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderCounterApp();