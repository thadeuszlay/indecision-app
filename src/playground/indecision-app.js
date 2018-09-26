console.log("App.js is running!");

// JSX - JavaScript XML
const app = {
  title: "Indecision Appasdf",
  subtitle: "Test only",
  options: []
};
const submitForm = e => {
  e.preventDefault();
  console.log("submitform");
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    console.log(app.options);
    render();
  }
};

const removeAllOptions = () => {
  app.options = [];
  console.log(app.options);
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.random();
  console.log(randomNum);
  const indexArr = Math.floor(randomNum * app.options.length);
  alert(app.options[indexArr]);

};
const render = () => {
  const appRoot = document.getElementById("app");

  const template = (
    <div>
      <p>{app.options.length}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>Make descision</button>
      <button onClick={removeAllOptions}>Remove all</button>
      <form onSubmit={submitForm}>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <input type="text" name="option" />
        <button>Add</button>
      </form>
      <hr />
      <ol>
        {app.options.map((o, idx) => (
          <li key={idx}>{o}</li>
        ))}
      </ol>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
