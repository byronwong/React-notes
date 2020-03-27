

## Handling events up chain
1. we create a method in our parent component
2. we pass the method to the child component as a prop.
3. we bind the method on the child component using: `onClick={()=>{}}`

Every time local state changes, React will trigger a re-render of the component 
by calling its `render()` method.

```js 

  // Parent component
  removeContact = (contact) => {
    // filter state.contacts for the contact that was clicked
    this.setState((state)=>({
      contacts: this.state.contacts.filter((c)=>c.id !== contact.id)
    }));
  }

  render() {
    return (
      <div>
        <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    )
  }
  // ---

  // Child component 
  function ListContacts(props) {
    return (
      <ol className='contact-list'>
        {props.contacts.map((contact)=>(
          <li key={contact.id} className='contact-list-item'>
            <div className='contact-avatar' style={{backgroundImage:`url(${contact.avatarURL})`}}></div>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            {/* note here that contact is coming from the map fn */}
            <button className='contact-remove' onClick={()=>{props.onDeleteContact(contact)}}>Remove</button>
          </li>
        ))}
      </ol>
    );
  }

```

## Component level

```jsx
  // form updated within the component
  class NameForm extends React.Component {
  
  	state = {
    	email: 'email'
    }
    
    handleChange = (event) => {
    	this.setState({
      	email: event.target.value
      });
    }

    render(){
      return (
      	<form>
      	  <input type="text" value={this.state.email} onChange={this.handleChange} />
          <h2>{this.state.email}</h2>
      	</form>
      );
    }
  }
  
  ReactDOM.render(<NameForm />, mountNode);


```
