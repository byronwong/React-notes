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

### Soultion A The plain ES6 way

Here we use the constructor.

```js
class StorePicker extends React.Component {
  constructor() {
    super();
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

```

### Soultion B
```
