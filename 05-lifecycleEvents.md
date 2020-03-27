# Life cycle events
Lifecycle events are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.

`componentDidMount()` is the lifecycle hook that is run right after the component is added to the DOM and should be used if you're fetching remote data or doing an Ajax request.


## Short-circuit Evaluation Syntax
```jsx
  { this.state.screen === 'list' && (
    <ListContacts
      contacts={this.state.contacts}
      onDeleteContact={this.removeContact}
    />
  )}
```

## Adding to the DOM
These lifecycle events are called when a component is being added to the DOM:

- constructor()
- componentWillMount() - invoked immediately before the component is inserted into the DOM
- render()
- componentDidMount() - invoked immediately after the component is inserted into the DOM


## Re-rendering
These lifecycle events are called when a component is re-rendered to the DOM

- componentWillReceiveProps() - invoked whenever the component is about to receive brand new props
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()

### render() Is For Rendering, Only!
I just mentioned this in the video, but I want to stress it again - data should not be fetched in the render method! A component's render() method should only be used to render that component; it should not make any HTTP requests, fetch data that's used to display the content, or alter the DOM. The render() method also shouldn't call any other functions that do any of these things, either.


# Removing from the DOM
This lifecycle event is called when a component is being removed from the DOM

- componentWillUnmount() - invoked immediately before a component is removed from the DOM
