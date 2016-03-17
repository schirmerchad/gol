App = React.createClass({
	mixins: [ReactMeteorData],
 
	getMeteorData() {
	    return {
	      goals: Goals.find({}).fetch()
	    }
  	},

  	mapData: function() {  		
  		var data = [
  			{ qty: 0, xLabel: "RSL" }, 
  			{ qty: 0, xLabel: "SKC" },
  			{ qty: 0, xLabel: "SEA" },
  			{ qty: 0, xLabel: "POR" },
  			{ qty: 0, xLabel: "VAN" },
  			{ qty: 0, xLabel: "NYC" },
  			{ qty: 0, xLabel: "DAL" },
  		];
  		this.data.goals.map(function(d) {
	    	data[0].qty += d.goals;
	    });
	    
	    return data;
  	},
 
	render: function() {		
		return (
		  <div>
		  	<div className="page-header">
					<center>
						<h1>
						<i className="fa fa-shield"></i> Data 
						<small> Dashboard</small></h1>
					</center>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<DataForm />
						<DataList data={this.data.goals}/>
					</div>
 
					<div className="col-md-offset-2 col-md-6">
						<BarChart data={this.mapData()} width="480" height="320"/>					
					</div>
				</div>
			</div>         
		  </div>
		);
	}
});