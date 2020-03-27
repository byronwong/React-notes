# Creating a component

## Resources
To test example code copy and paste into the editor link below
[editor](https://jscomplete.com/repl)

## Function component
```jsx
  // basically a function that takes a props argument and returns html component.
  // Use this if all you have is a render method
  const Button = function (props) {
    // each component created from here has access to its own this.props
    return (
      <button>{props.label}</button>
    );
  }

  // We can pass in props here
  ReactDOM.render(<Button label="Do" propName="propValue" />, mountNode);
```

## Stateless functional component
```jsx
  // =====
  // Alternative
  function(props){
    return (
       <button>{props.label}</button>
    );
  }
```

## Class component
```jsx
  // this is a basic class implementation for components
  class Button extends React.Component {

    // Instead of using a constructor Fn
    state = {counter: 0};
  
    handleClick = () => {
      // using react.component setState (async method)
      this.setState({
        counter: this.state.counter + 1
      });
      
      // // if you depend on the previous state
      // this.setState( (prevState) => {
      // 	return {
      //   	counter: prevState.counter + 1
      //   }
      // })
    };

    render() {
      return (
        <button onClick={this.handleClick}>{this.state.counter}</button>
      );
    }
  }

  ReactDOM.render(<Button label="Do"/>, mountNode);
``` 

## Multi components
```jsx
  class Button extends React.Component {

    render() {
      return (
        // here we a invoking a method on the parent class
        <button onClick={this.props.onClickFunction}>
          +1
        </button>
      );
    }
  }

  const Result = (props) => {
    return (
      // here we don't have to add the 'this' keyword as this is a function component.
      <div>{props.counter}</div>
    );
  };

  // Created a perent component to house two child components
  class App extends React.Component {

    state = { counter : 0 };
    
    incrementCounter = () => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    }

    // here we pass in props to the components
    render() {
      return (
        <div>
          <Button onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter}/>
        </div>
      );
    }
  }

  ReactDOM.render(<App label="Do"/>, mountNode);
```

## Making components reusable
```jsx
  class Button extends React.Component {
    handleClick = () => {
      this.props.onClickFunction(this.props.incrementValue);
    }

    render() {
      return (
        // here we a invoking a method on the parent class
        // by defining a function here we would be giving each button it's own copy 
        // of the button. Instead if we move this to the handleClick Fn we will have 
        // all the functions share this Fn
        <button onClick={this.handleClick}>
          +{this.props.incrementValue}
        </button>
      );
    }
  }

  const Result = (props) => {
    return (
      // here we don't have to add the this keyword as this is a function component.
      <div>{props.counter}</div>
    );
  };

  // Created a perent component to house two child components
  class App extends React.Component {

    state = { counter : 0 };
    
    incrementCounter = (incrementValue) => {
      this.setState((prevState) => ({
        counter: prevState.counter + incrementValue
      }));
    }

    // here we are resusing the Button component 
    render() {
      return (
        <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter}/>
        </div>
      );
    }
  }

  // add virtual DOM elements to the DOM
  ReactDOM.render(<App label="Do"/>, mountNode);
```

## Working with Data


### Using ref 


### passing primitives or functions to the child components
```jsx
  // child component of CardList
  const Card = (props) => {
    return (
      <div style={{margin:'1rem'}}>
        <img width="75" src={props.avatar_url}/>
        <div style={{display:'inline-block', marginLeft:'1rem'}}>
          <div style={{fontWeight:'bold'}}>{props.name}</div>
          <div>{props.company}</div>
        </div>
      </div>
    );
  }

  // sibling component
  const CardList = (props) => {
    return (
      <div>
        {props.cards.map((card) => <Card key={card.id} {...card}/>)}
      </div>
    );
  };

  // sibling component
  class Form extends React.Component {
    state = { userName: ''};
    
    handleSubmit = (event) => {
      event.preventDefault();
      // console.log('Event: Form Submit', this.userNameInput.value);
      axios.get(`https://api.github.com/users/${this.userNameInput.value}`)
      .then((resp)=>{
          // here we get the passed in Fn on the props 
          this.props.onSubmit(resp.data);
          this.setState({ userName: ''});
        });
    };

    // Here react has a special property called ref, this allows you to get a reference to the current dom element.
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={(event) => this.setState({userName: event.target.value})}
            ref={(input) => this.userNameInput = input}  
            type="text" 
            placeholder="Github username"
            required
          />
          <button type="submit">Add card</button>
        </form>
      );
    }
  }

  // houses all the compontent for this app
  class App extends React.Component {

    // Our state data
    state = {
      cards: []
    }; 
    
    // 
    addNewCard = (cardInfo) => {
      this.setState(prevState => ({
      cards: prevState.cards.concat(cardInfo)
      }))
    };

    // here we are passing in the addNewCard Fn
  render() {
    return (
      <main>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards}/>
      </main>
    );
  }
  }

  ReactDOM.render(<App />, mountNode);


```

## Props in Initial State
When defining a component's initial state, avoid initializing that state with props. This is an error-prone anti-pattern, since state will only be initialized with props when the component is first created.
```jsx
  this.state = {
    user: props.user
  }
```



