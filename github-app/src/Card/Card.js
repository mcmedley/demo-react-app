import React from 'react';
import './Card.css';

export default class CardList extends React.Component {
	removeTrigger = (profileData) => {
		this.props.remove(profileData);
	}
	render() {
		console.log(this.props.profiles.length);
		if(this.props.profiles.length < 3) {
			return (
				<div>
					{this.props.profiles.map(profile => <Card profile={profile} key={profile.id} remove={this.removeTrigger} {...profile}/>)}
				</div>
			)
		} 
		
		else {
			return (
				<div className="flex-container">
					{this.props.profiles.map(profile =>
						<div className="flex-cell">
							<Card profile={profile} key={profile.id} remove={this.removeTrigger} {...profile}/>
						</div>
					)}
				</div>
			)
		}
	}
}

class Card extends React.Component {
	handleRemove = async (event) => {
		event.preventDefault();
		console.log(this.props.remove);
		this.props.remove(this.props.profile);
	}
	render() {
		const profile = this.props;
		console.log(profile);
		return (
		<div className="github-profile">
			<div className="profile-item">
				<div className="icon-div">
					<p className="profile-header">{profile.login}</p>
					<i className="pi pi-times icon" onClick={this.handleRemove}></i>
				</div>
				<img src={profile.avatar_url} className="profile-image" />
				<div className="info">
					<div className="bio">{profile.name}</div>
					<div className="bio">
						Company: {profile.company != null ? profile.company : "None"}
					</div>
					<div className="bio">{profile.public_repos} repos</div>
					<div className="bio">{profile.followers} followers</div>
					<div className="bio">{profile.following} following</div>
				</div>
			</div>
		</div>
		);
	}
}
