import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Input from '../common/textInput';


class AthleteForm extends React.Component {

	static propTypes = {
		athlete: React.PropTypes.object.isRequired,
		onSave: React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	};

	render() {
		return (
			<form>
				<h1>Manage Athlete</h1>

				<Input
					name="dni"
					label="DNI"
					value={this.props.athlete.dni}
					onChange={this.props.onChange}
					error={this.props.errors.dni}/>

				<Input
					name="firstName"
					label="First Name"
					//hooks with the onchange in parent component
					value={this.props.athlete.firstName}
					onChange={this.props.onChange}
					error={this.props.errors.firstName}/>

				<Input
					name="lastName"
					label="Last Name"
					//hooks with the onchange in parent component
					value={this.props.athlete.lastName}
					onChange={this.props.onChange}
					error={this.props.errors.lastName} />

				<input type="submit" value="Save" className="btn btn-default"
					onClick={this.props.onSave}/>
				<Link to='/athletesList' className="btn btn-default">Back to athletes list</Link>
			</form>
		);
	}
}

export default AthleteForm