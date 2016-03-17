DataForm = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var numGoals = React.findDOMNode(this.refs.numGoals);
		var team = React.findDOMNode(this.refs.team);
		
		Meteor.call("insertData", numGoals.value, team.value, function(e, r) {
			if (e) alert(e.reason)			
		});
 
		numGoals.value = "";
		team.value = "";
	},
 
	render: function() {		
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">Data</h3>
			  </div>
			  <div className="panel-body">
			    <form className="form-horizontal" onSubmit={this.handleSubmit}>
				  <div className="form-group">				    
				    <div className="col-sm-10">
				      <input type="number" className="form-control" 
				      		placeholder="Number of Goals?" ref="numGoals" />
				    </div>
				  </div>
				  <div className="form-group">				    
				    <div className="col-sm-10">
				      <input type="text" className="form-control" ref="team" placeholder="Team name"/>
				    </div>
				  </div>
				  
				  <div className="form-group">
				    <div className="col-sm-10">
				      <button type="submit" className="btn btn-primary btn-block">Add</button>
				    </div>
				  </div>
				</form>
			  </div>
			</div>
		);
	}
})