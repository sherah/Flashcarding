//CardSetView
window.CardSetView = Backbone.View.extend({
	tagName: 'ul',

	//TODO: somehow get the data into this template ???
	// ACTUALLY WAIT DO I NEED THIS TO BE HERE?
	template: _.template("<li></li>"),


	initialize: function(){
		this.collection.bind("change", this.handleQueueChange.bind(this));
		var that = this;
		this.collection.each(function(card){
			card.on("change:queued", function(){
				that.render();
			});
		});

		this.render();
	},

	render: function(){
		var that = this;

		if(that.collection.length === 0){
			that.$el.html("<li>Select a card deck to begin!</li>");
		} else {
		// // 	//TODO: hook this up to the card deck collection and get its name etc
			that.$el.html("<p class='titles'>Deck: </p>");
			this.subviews = this.collection.map(function(card){
				return new CardView({model:card});
			});
			_.each(this.subviews, function(subview){
				that.$el.append(subview.render());
			});
		};

		return this.$el;
	},

	handleQueueChange: function(){
		//when you click a card to skip it, it goes to the end of the queue.
		this.queued = this.collection.queued();
		this.render();
	},

	
});


