class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      isVisible: false,
      title: "This is title",
      subtitle: "This is subtitle"
    }
  }

  toggleVisibility () {
    console.log("toggle ", this.state.isVisible);
    this.setState((previousState) => {
      return {
        isVisible: !previousState.isVisible
      }
    });
  }
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.title}</h1>
          <p>{this.state.subtitle}</p>

          <button onClick={this.toggleVisibility}>
            {this.state.isVisible ? "Hide" : "Show"}
          </button>
          {this.state.isVisible && <p>Here is some details</p>}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// console.log("App.js is running!");

// // JSX - JavaScript XML
// const app = {
//   title: "Visibility toggle",
//   subtitle: "Challenge",
//   isVisible: false
// };

// const toggleVisibility = () => {
//   app.isVisible = !app.isVisible;
//   render();
// };
// const render = () => {
//   const appRoot = document.getElementById("app");

//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       <p>{app.subtitle}</p>

//       <button onClick={toggleVisibility}>
//         {app.isVisible ? "Hide" : "Show"}
//       </button>
//       {app.isVisible && <p>Here is some details</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
