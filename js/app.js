require.def("vente/js/app", 
	[ 
		"antie/widgets/component", 
		"antie/widgets/button", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label",
		"antie/widgets/horizontalcarousel",
		"antie/datasource",
		"vente/static/datasources/produitdatasource",
		"vente/static/formatters/produitformatter"
	], 
	function(Component, Button, Container, VerticalList, HorizontalList, Label, HorizontalCarousel, DataSource, ProduitSource, ProduitFormatter){ 
		return Component.extend({ 
			init: function(){ 
			var self = this; 
			this._super("vente"); 

			
			this._produitsource = new DataSource(this, new ProduitSource(), "loadData");
			this._produitformater = new ProduitFormatter();

			var carousel = new HorizontalCarousel("carouselProduits", this._produitformater, this._produitsource);

			self.appendChildWidget(carousel);

			} 
		}); 
	} 
); 
