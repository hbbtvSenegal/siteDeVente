require.def("vente/js/ventehabillement", 
	[ 
		"antie/widgets/component", 
		"vente/static/composants/bouton", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label",
		"antie/widgets/horizontalcarousel",
		"antie/datasource",
		"vente/static/datasources/habillementsource",
		"vente/static/formatters/habillementformatter",
		"vente/static/composants/texte"
	], 
	function(Component,
		Bouton, 
		Container,
		VerticalList,
		HorizontalList, 
		Label, 
		HorizontalCarousel, 
		DataSource, 
		HabillementSource, 
		HabillementFormatter,
		Texte
		){ 
		return Component.extend({ 
			init: function(){ 
				var self = this; 
				this._super("ventehabillement"); 

				//l'application
				this._application = this.getCurrentApplication();
				this._device = this._application.getDevice();

				//les categories dans un carousel
				this._source = new DataSource(this, new HabillementSource(), "loadData");
				this._formatter = new HabillementFormatter(this._application);

				this._carousel = new HorizontalCarousel("carouselHabillement", this._formatter);

				//le menu de la page
				self.appendChildWidget(this._carousel);

				//les evenements
				this.addEventListener("beforerender", function(evt){
					self._onBeforeRender(evt);
				});

			},

			_onBeforeRender: function(evt){
				this._setProduitSource();
			},

			_setProduitSource: function(){
				this._carousel.setDataSource(this._source);
			}

		}); 
	} 
); 

