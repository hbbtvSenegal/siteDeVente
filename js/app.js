require.def("vente/js/app", 
	[ 
		"antie/widgets/component", 
		"vente/static/composants/bouton", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label",
		//"antie/widgets/horizontalcarousel",
		"vente/static/composants/carouselhorizontal",
		"antie/datasource",
		"vente/static/datasources/produitsource",
		"vente/static/formatters/produitformatter",
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
		ProduitSource, 
		ProduitFormatter,
		Texte
		){ 
		return Component.extend({ 
			init: function(){ 
			var self = this; 
			this._super("appvente"); 

			//l'application
			this._application = this.getCurrentApplication();
			this._device = this._application.getDevice();


			//les details du categorie dans un component
			this._componentDetails = new Component("componentDetails");
			this._componentDetails.addClass("itemMenuApp");
			this._componentDetails.texte = new Texte("detailsCategoriesProduit");
			this._componentDetails.appendChildWidget(this._componentDetails.texte);
			
			//les categories dans un carousel
			this._produitsource = new DataSource(this, new ProduitSource(), "loadData");
			this._produitformatter = new ProduitFormatter(this._application, this._componentDetails);

			var carousel = new HorizontalCarousel("carouselProduits", this._produitformatter, this._produitsource);
			carousel.addClass("itemMenuApp");

			//le menu de la page
			var menu = new VerticalList("menuapp");
			menu.appendChildWidget(carousel);
			menu.appendChildWidget(this._componentDetails);
			self.appendChildWidget(menu);

			},

			//configuration de la carousel
            _getCarouselConfig: function (idd, datasource, formatter) {
                return {
                    id: idd,
                    description: "Carousel example, LEFT and RIGHT to navigate, SELECT to go back",
                    dataSource: new DataSource(null, datasource, 'loadData'),
                    formatter: formatter,
                    orientation: Carousel.orientations.HORIZONTAL,
                    carouselId: 'verticalCullingCarousel',
                    animOptions: {
                        skipAnim: false
                    },
                    alignment: {
                        normalisedAlignPoint: 0.5,
                        normalisedWidgetAlignPoint: 0.5
                    },
                    initialItem: 4,
                    type: "CULLING",
                    lengths: 264
                };
            }
		}); 
	} 
); 

