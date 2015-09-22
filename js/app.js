require.def("vente/js/app", 
	[ 
		"antie/widgets/component", 
		"antie/widgets/button", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label" 
	], 
	function(Component, Button, Container, VerticalList, HorizontalList, Label){ 
		return Component.extend({ 
			init: function(){ 
			var self = this; 
			this._super("vente"); 

			
			} 
		}); 
	} 
); 
