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

// houses all the component for this app
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
