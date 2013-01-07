//collections of cards
var Cards = Backbone.Collection.extend({

	queued: function(){

	    // chain, filter, sortBy, and value are from underscore.
	    // chain returns a wrapped object (like song)
	    // filter returns true values, given an obj/iterator
	    // sortBy Returns a sorted copy of list, ranked in 
	    // ascending order by the results of running each value 
	    // through iterator.
	    // value extracts the value of the wrapped object
	    
	    return this.chain().filter(function(card){
	      return !!card.attributes.queuedAt;
	    }).sortBy(function(card){
	      return song.attributes.queuedAt;
	    }).value();
  }

});