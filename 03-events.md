# Events

## Accessing items in the DOM

- You should not use DOM selection libraries such as querySelector, instead you want to be looking at it fron a React POV
- To do this you can create a `ref` using the React Class
- Add `ref` as a prop on the item you want to get a handle on, in this case it's the input field

```jsx
class StorePicker extends React.Component {
  // Created a ref using React Class
  myInput = React.createRef();

  goToStore(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            required
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
```

## Accessing 'this' from inside a method

Here we have a form that a user will select a store to enter, the function here is that we direct them on submit.

PROBLEMS: The 'this' keyword is undefined until the component is mounted. This means that using this within a class method will return 'undefined'. For example using 'this' in goToStore returns 'undefined'.

This has something to do with `binding` in React. All methods that are from `React.component` are bound by default, however our own custom methods are not.

```js
class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore(event) {
    event.preventDefault();
    console.log(this); // returns 'undefined'
  }

  componentDidMount() {
    console.log(this); // returns component
  }

  render() {
    console.log(this); // returns the component

    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            required
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
```

So how do we bind them?

### Solution A -- The plain ES6 way

Here we use the constructor and do our binding within. The problem here is that we may have multiple methods to bind so we would have to do this for each method on the class.

```js
class StorePicker extends React.Component {
  constructor() {
    super(); // use super as we are extending React.Component
    this.goToStore = this.goToStore.bind(this); // 'this' is the instance of store picker
  }

  myInput = React.createRef();

  goToStore(event) {
    event.preventDefault();
    console.log(this); // returns 'undefined'
  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            required
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
```

### Solution B -- Using properties (Recommended)

Here, instead of using the method `goToStore` we will make it a property and then assign an arrow function to it. As properties are assigned to the instance. NOTE: this works differently with arrow function; `this` is inheritence from the parent scope.

```js
class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    console.log(this); // returns instance
  };

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            placeholder="Store Name"
            required
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
```

## Passing arguments to event handlers

```js
// Button component
function Button(props) {
  return (
    // here we use an arrow function to wrap the `handleClick` function so that we are passing a reference and not invoking it
    // Note: you can also do this at the parent level: https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers
    <button onClick={() => props.handleClick(props.incrementVal)}>
      +{props.incrementVal}
    </button>
  );
}

// A display component showing the accumulated value
function Display(props) {
  return <div>{props.message}</div>;
}

// App component that is root and wraps other components
function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (incrementVal) => setCounter(counter + incrementVal);

  // Here we are creating 5 button components which increament different amount according to their `incrementVal` prop
  // the click handler is defined in the parent component, but the onClick handler is inside each button component
  return (
    <div>
      <Button handleClick={handleClick} incrementVal={1} />
      <Button handleClick={handleClick} incrementVal={5} />
      <Button handleClick={handleClick} incrementVal={10} />
      <Button handleClick={handleClick} incrementVal={100} />
      <Display message={counter} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("mountNode"));
```
