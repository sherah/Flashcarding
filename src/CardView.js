//card views
var CardView = Backbone.View.extend({
	tagName: "li",

	events: {

		//on back:
		//click 'got it' to add to answered deck

		//everywhere:
		//click 'pass' to put at end of queue
		"click .cardFront": "flipCard",
		"click .cardBack": "render",

		//make an "answered" card disappear from the displayed deck
		"click .answer": "answerCard",

		//click 'edit' to edit
		"edit input": "editCard"

	},
	template: _.template("<span class='cardFront'><%= question %></span><br><span class='answer'>clear</span>"),
	template2: _.template("<span class='cardBack'><%= answer %></span>"),

	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	},

	flipCard: function(){
		return this.$el.html(this.template2(this.model.attributes));
	},

	answerCard: function(){
		//remove the card from the overall view
		return this.$el.remove();
	},

	passCard: function(){

	},

	editCard: function(event){
		var target = event.target;
		var theEdit = {};
		theEdit[target.name] = target.value;
		this.model.set(theEdit);

	}

	//TODO: event listener function

});