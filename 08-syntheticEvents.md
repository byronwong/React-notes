# Passing 




## Passing state to components and back
Check out : https://reactjs.org/docs/handling-events.html
```js

  // First define the function (event handler)
  // NOTE: the function definition vs function statement this is to do with how this is defined
  toggleSidebar = () => {
    console.log('clicked', this);
    this.setState((prevState)=>({
      isToggle: !prevState.isToggle // toggle true/false
    });
  }

  // An alternative is to do this with the constructor 
  constructor(props){
    super(props);

    // state value
    this.state = {
      isToggle: false
    }

    // bind parent this to the toggleState Handler before it is passed to child component
    this.toggleState = this.toggleState.bind(this);
  }

  <component toggle={this.toggleState}/>



```
