# Routing

## React router Installing 

`npm install --save react-router-dom`

## Getting started

```jsx
  // import on the page that calls render dom
  import { BrowserRouter } from 'react-router-dom';

  // in react starter app this is the index.js page
  // wrap app in browserRouter
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

```

## The link component
If you're experienced with routing on the web, you'll know that sometimes our links need to be a little more complex than just a string. For example, you can pass along query parameters or link to specific parts of a page. What if you wanted to pass state to the new route? To account for these scenarios, instead of passing a string to Links to prop, you can pass it an object like this,
```jsx

  import { Link } from 'react-router-dom';
  // replaces <a> tags

  <Link to="/create" className="class-name" >Add contact</Link>

  <Link to={{
    pathname: '/courses',
    search: '?sort=name',
    hash: '#the-hash',
    state: { fromDashboard: true }
  }}>
    Courses
  </Link>

```

## Route Component
```jsx 

  import { Route } from 'react-router-dom';
  
  // use instead of using state to manage views
  // pass in a component
  <Route path="/create" component={reactComponent} />


  // Or pass in a function
  // use exact to stop matching this `/`
  // NOTE: () not {} in render Fn
  <Route exact path="/create" render={()=>(

    <UIComponent prop={someProp} ></UIComponent></UIComponent>
    
    // OR

    <div className="rawHtml">
      ...
    </div>
  )} />

```




## Serialize The Form Data
At this point, our form will serialize the values from user input (i.e., the name and email), adding them as a query string to the URL. We can add some additional functionality by having our app serialize these form fields on its own. After all, we want the app to ultimately handle creating the contact and saving it to the state.

To accomplish this, we'll use the form-serialize package to output this information as a regular JavaScript object for the app to use.

`npm install --save form-serialize`
