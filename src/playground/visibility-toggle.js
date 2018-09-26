console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "Visibility toggle",
  subtitle: "Challenge",
  isVisible: false
};

const toggleVisibility = () => {
  app.isVisible = !app.isVisible;
  render();
};
const render = () => {
  const appRoot = document.getElementById("app");

  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>

      <button onClick={toggleVisibility}>
        {app.isVisible ? "Hide" : "Show"}
      </button>
      {app.isVisible && <p>Here is some details</p>}
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
