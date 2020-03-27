class MyTester extends React.Component {

	state = {
  	says:'moes!',
    days: {
    	monday: 'yeah',
      tuesday: 'noes'
    },
    next: this.props.self.level
  }

	render(){
  	return (
    	<div>
    	  <h2>{this.state.next}</h2>
    	</div>
    );
  }
}


class App extends React.Component {

 state = {
	names: ['foo', 'bar', 'baz'],
  message:'Moes Moes!',
  myObj: {
  	name:'Panda',
    level:'four',
    color:'Black'
  }
 }

 render() {
 	return (
  	<main>
    	<h1>Output:</h1>
      <MyTester
      	name={this.state.names}
        self={this.state.myObj}
        message={this.state.message}
      />
  	</main>
  );
 }
}

ReactDOM.render(<App />, mountNode);
