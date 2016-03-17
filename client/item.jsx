DataItem = React.createClass({
  	handleClick() {
  		var id = this.props.goal._id;
  		Meteor.call("removeData", id, function(e) {
  			if (e) alert(e.reason);
  		});
  	},
 
	render: function() {
		var team = this.props.goal.team;	
		var tail = this.props.goal.goals > 1 ? "goals" : "goal";
 
		return (
			<li onClick={this.handleClick}><strong>{team}</strong> bagged <strong>{this.props.goal.goals}</strong> {tail}</li>
		);
	}
})