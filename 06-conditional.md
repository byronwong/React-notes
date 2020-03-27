# Conditions

Calculate height using: `this.refs.inner.clientHeight`

## Conditional class

```jsx

  render() {
    // destructuring
    const {isWorking} = this.state; // bool

    return (
      <div className={`is-working ${isWorking ? 'is-expanded' : ''}`}>
        <h3>Working...</h3>
      </div>
    );

  }
```
