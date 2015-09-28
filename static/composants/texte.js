/*
*
*/

require.def("vente/static/composants/texte",
	[
		"antie/widgets/textpager",
		"antie/events/keyevent"
	],
	function(TextPager, KeyEvent){
		'use strict';
		
		return TextPager.extend({
			//constructeur
			init: function(id){
				var self = this;
				self._super(id);

				var keyRetour = new KeyEvent("retour", KeyEvent.VK_LEFT);

				this.addEventListener("keydown", function(evt){

				});

				this.addEventListener("beforerender", function(evt){
					self.bubbleEvent(keyRetour);
				});
			},
			//les evenements a ajouter
			_onBeforeRender: function(){

			}

		});
	}
);

