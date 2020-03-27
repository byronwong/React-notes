# State

We cannot change the state directly, instead we use `setState()`.
There are two main ways we can do this:

## using an object 
```jsx
  // here we are overriding 
  this.setState({
    username: 'Tyler'
  });
```

## using a function
```jsx
  // use this when you need to update an existing state
  // the object returned from this function will be merged to create a new state object
  this.setState((prevState)=>({
    count: prevState.count + 1;
  });
```

## Updating state - UI=fn(state)
we can do this via a helper function `setState()`
There are two ways (patterns) we can use to do this:

```jsx
  // passing an object
  this.setState({
    username: 'Tyler'
  });

  // passing a function
  // note the parens around {}
  // use this if the new state depends on the old state
  this.setState((prevState)=>({
    count: prevState + 1;
  }));
```


## this.setState(Fn, Callback);
```js 
  this.setState({ name: name }, callback());

```
