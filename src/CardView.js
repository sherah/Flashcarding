//card views
var CardView = Backbone.View.extend({
	tagName: "li",

	events: {
		//on front:
		//click 'answer' to see answer (aka flip over)

		//on back:
		//click 'got it' to add to answered deck

		//everywhere:
		//click 'pass' to put at end of queue
		"click .pass": "passCard",

		//make an "answered" card disappear from the displayed deck
		"click .answer": "answerCard",

		//click 'edit' to edit
		"edit input": "editCard"

	},

	template: _.template("asdf"),
	// template: _.template($('.single-card').html()),

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	},

	passCard: function(){
		//change the card's queued number so it goes to the end of the queue

		//re-render
		this.render();
	},

	answerCard: function(){
		//remove the card from the overall view

	},

	editCard: function(event){
		var target = event.target;
		var theEdit = {};
		theEdit[target.name] = target.value;
		this.model.set(theEdit);

	}

	//TODO: event listener function

});