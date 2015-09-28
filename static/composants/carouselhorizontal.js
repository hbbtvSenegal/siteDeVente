require.def("vente/static/composants/carouselhorizontal",
	[
		"antie/widgets/horizontalcarousel",
	],
	function(Carousel){
		return Carousel.extend({
			init: function(id, formatter, datasource, animation, modeWrap){
				var self = this;
				this._super(id, formatter, datasource);
				this._modeWrap = modeWrap;
				self._setConfig();
			},

			_onBeforeShow: function(){

			},

			_onBeforeRender: function(){

			},

			_setConfig: function(){
				this._setNavigation();
				this.setRenderMode(2); //element UL
				
			},

			_setNavigation: function(modeWrap){
				switch(modeWrap){
					case "infinie":
						this.setWrapMode(Carousel.WRAP_MODE_VISUAL);
						break;
					case "finie":
						this.setWrapMode(Carousel.WRAP_MODE_NAVIGATION_ONLY);
						break;
					default:
						this.setWrapMode(Carousel.WRAP_MODE_NAVIGATION_ONLY);
						break;
				}
			}


		})
	}
);