
"use strict";

const app = {
  title: "This is a title",
  subtitle: "this is a subtitle",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    renderFunc();
    e.target.elements.option.value = "";
  }
};

const removeOptions = () => {
  app.options = [];
  renderFunc();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderFunc = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>
        What should I do?
      </button>
      <button onClick={removeOptions}>remove all</button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

let visibility = false;
const toggleVisibility = () => {
  visibility = !visibility;
  render();
};
const render = () => {
  const jsx = (
    <div>
      <h1>visibility toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide Details" : "Show Details"}
      </button>
      {visibility && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          vel!
        </p>
      )}
    </div>
  );
  ReactDOM.render(jsx, appRoot);
};
render();
// renderFunc();

// ReactDOM.render(template, appRoot);
// ReactDOM.render(template, appRoot);

// let count = 0;

// const addOne = () => {
//   console.log('addOne');
// }

// const minusOne = () => {
//   console.log('minusOne');
// }

// const reset = () => {
//   console.log('reset');
// }

// const templateTwo = (
//   <div>
//     <h1>Count:{count}</h1>
//     <button onClick={addOne}> +1 </button>
//     <button onClick={minusOne}> -1 </button>
//     <button onClick={reset}>reset</button>

//   </div>
// )