import './App.css';
import CardList from './Card/Card';
import Form from './Form/Form'
import React from 'react';

class App extends React.Component {
	state = {
		profiles: []
	};

	addNewProfile = (profileData) => {
		var unique = true;
		this.state.profiles.forEach(profile => {
			if(profile.id == profileData.id) {
				unique = false;
				console.log('This profile has already been added!');
			}
		})
		if(unique) {
			this.setState(prevState => ({
				profiles: [...prevState.profiles, profileData]
			}));
		}
	}

	render() {
		return (
		<div>
			<div className="header">The GitHub Cards App</div>
			<Form onSubmit={this.addNewProfile}/>
			<CardList profiles={this.state.profiles} />
		</div>
		);
	}
}

export default App;
