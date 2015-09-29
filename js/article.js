
require.def("vente/js/article", 
	[ 
		"antie/widgets/component", 
		"vente/static/composants/bouton", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label",
		"vente/static/composants/carouselhorizontal",
		"antie/datasource",
		"vente/static/datasources/articlesource",
		"vente/static/formatters/articleformatter",
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
		ArticleSource, 
		ArticleFormatter,
		Texte
		){ 
		return Component.extend({ 
			
			init: function(){ 
				var self = this; 
				this._super("article"); 

				//l'application
				this._application = this.getCurrentApplication();
				this._device = this._application.getDevice();

				//les categories dans un carousel
				//this._source = new DataSource(this, new ArticleSource(), "loadData");
				this._formatter = new ArticleFormatter(this._application);

				this._carousel = new HorizontalCarousel("carouselArticle", this._formatter);
				this._carousel._setNavigation("finie");

				//le menu de la page
				self.appendChildWidget(this._carousel);

				//les evenements
				this.addEventListener("beforerender", function(evt){
					self._onBeforeRender(evt);
				});

				this.addEventListener("keydown", function(evt){
					if(evt.KeyCode===40){
						this._device.back();
					}
				})

			},

			_onBeforeRender: function(evt){
				//console.log(evt.args._source);
				this._setProduitSource(evt.args._source);
			},

			_setProduitSource: function(source){
				console.log(source);
				this._source = new DataSource(this, new ArticleSource(source), "loadData");
				this._carousel.setDataSource(this._source);
			}

		}); 
	} 
); 

