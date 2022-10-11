import React from 'react';

export default function CardList(props) {
	return (
		<div>
			{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
		</div>
	)
}

class Card extends React.Component {
	render() {
		const profile = this.props;
		return (
		<div className="github-profile" style={{margin: '1rem'}}>
			<img src={profile.avatar_url} />
			<div className="info" style={{display: 'inline-block', marginLeft: 10}}>
				<div className="name" style={{fontSize: '125%'}}>{profile.name}</div>
				<div className="company">{profile.company}</div>
			</div>
		</div>
		);
	}
}
