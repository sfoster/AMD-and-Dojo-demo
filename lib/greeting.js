define(function(){

	return {
		hello: function(){
			var qs = location.search.substring(1);
			var who = qs || "World";
			return who;
		}
	}
});