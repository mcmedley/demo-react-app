import './App.css';
import CardList from './Card/Card';
import Form from './Form/Form'
import React from 'react';

class App extends React.Component {
	state = {
		profiles: []
	};

	constructor(props) {
		super(props);
	}

	addNewProfile = (profileData) => {
		var unique = true;
		this.state.profiles.forEach(profile => {
			if(profile.id == profileData.id) {
				unique = false;
			}
		});
		if(unique) {
			this.setState(prevState => ({
				profiles: [...prevState.profiles, profileData]
			}));
		}
	}

	removeProfile = (profileData) => {
		var profileIndex = 0;
		while(this.state.profiles[profileIndex].id != profileData.id) {
			profileIndex++;
		}
		this.state.profiles.splice(profileIndex, 1);
		console.log(this.state.profiles);
		this.setState(prevState => ({
			profiles: [...prevState.profiles]
		}));
		console.log(this.state.profiles);
	}

	render() {
		return (
		<div>
			<div className="header">GitHub Cards App</div>
			<Form onSubmit={this.addNewProfile}/>
			<CardList profiles={this.state.profiles} remove={this.removeProfile} />
		</div>
		);
	}
}

export default App;
