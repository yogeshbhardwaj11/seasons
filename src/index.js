import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'


class App extends React.Component{
	state = { lat: null, errorMessage: ''};
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat: position.coords.latitude}),
			err => this.setState({errorMessage: err.message})
		);
	}

	renderContent() {
		if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat= {this.state.lat} />
		}

		if(!this.state.lat && this.state.errorMessage){
			return <div>Lat: {this.state.errorMessage}</div>;	
		}

		return <Loader message = "Please accept location Request"/>
	}

	//We have to define the render method inside the React Class.
	render(){
		return <div>{this.renderContent()}</div>
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
