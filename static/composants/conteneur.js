require.def("vente/static/composants/conteneur",
	[
		"antie/widgets/component"
	],
	function(Component){
		"use strict";

		return Component.extend({

			init: function(id){
				
				var self = this;
				this._super(id);

			},

			 //evenement a ajouter
			_onBeforeShow: function(){

			}
		});
	}
);