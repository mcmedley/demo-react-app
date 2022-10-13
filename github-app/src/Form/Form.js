import React from 'react';
import axios from 'axios';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import 'primereact/resources/primereact.min.css';
import 'flexgrid.io/src/flexgrid.scss';
import './Form.css';

export default class Form extends React.Component {
	state = {userName: '', blank: false};
	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
			this.setState({userName: '', blank: false});
			this.props.onSubmit(resp.data);
		} catch(Exception) {
			this.setState({userName: '', blank: true});
		}
	}
	render() {
		return (
			<div>
				<div className="flex-container">
					<div className="flex-item"></div>
					<div className="flex-item-middle">
						<span className="p-float-label form">
							<InputText 
								id="in" 
								className={!this.state.blank ? "input" : "input-warning"}
								value={this.state.userName}
								onChange={event => this.setState({userName: event.target.value, blank: false})}
								onSubmit={this.handleSubmit}
							/>
							<label htmlFor="in" className="label">GitHub Username</label>
						</span>
						<Button label="Add card" onClick={this.handleSubmit} className="p-button-warning" />
						<p className="message" style={{visibility: this.state.blank ? "visible" : "hidden"}}>No user was found</p>
					</div>
					<div className="flex-item"></div>
				</div>
			</div>
		);
	}
}