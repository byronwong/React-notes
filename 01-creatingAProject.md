# Creating a React Project

## Using create web app
`create-react-app [my-app-name]` - create a react app

## Simplest APP
```html
  <div id="root"></div>
  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script src="like_button.js"></script>
```

```js
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  );
```


## Adding react into an existing app
[Adding react partially](https://reactjs.org/docs/add-react-to-a-website.html)
```html
  <!-- ... existing HTML ... -->
  <div id="like_button_container"></div>
  <!-- ... existing HTML ... -->

  <!-- Note: when deploying, replace "development.js" with "production.min.js". -->
  <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

  <!-- Load our React component. -->
  <script src="like_button.js"></script>
```

```js
  // inside like_button.js
  const domContainer = document.querySelector('#like_button_container');
  ReactDOM.render(e(LikeButton), domContainer);
```


## Creating a react app
[Creating a react app docs](https://reactjs.org/docs/create-a-new-react-app.html)


