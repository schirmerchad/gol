DataList = React.createClass({	
 
  	renderData() {		
		return this.props.data.map((goal) => {			
		  return <DataItem goal={goal} />;
		});
	},
 
	render: function() {		
		return (
			<div className="panel panel-default">			  
			  <div className="panel-heading">
			    <h3 className="panel-title">History
			    <small> click to remove</small>
			    </h3>			    
			  </div>
			  <div className="panel-body">
			    <ul>
			    	{this.renderData()}
			    </ul>
			  </div>
			</div>
		);
	}
})