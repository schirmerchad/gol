Goals = new Mongo.Collection("Goals");
 
Meteor.methods({
	"insertData": function(numGoals, team) {
		numGoals = parseInt(numGoals);		
 
		check(numGoals, Number);
		check(team, String);
 
		return Goals.insert({goals: numGoals, team: team});
	},
 
	"removeData": function(id) {		
		check(id, String);		
		return Goals.remove(id);
	}
})