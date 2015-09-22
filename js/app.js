require.def("vente/js/app", 
	[ 
		"antie/widgets/component", 
		"antie/widgets/button", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label",
		"antie/widgets/horizontalcarousel"
	], 
	function(Component, Button, Container, VerticalList, HorizontalList, Label, HorizontalCarousel){ 
		return Component.extend({ 
			init: function(){ 
			var self = this; 
			this._super("vente"); 

			this.appendChildidget(new Label("Bonjout"))
		/*	var carousel = new HorizontalCarousel("carouselProduits");
			var bouton1 = new Button("id_produit1");
			var bouton2 = new Button("id_bouton2");
			bouton1.appendChildWidget(new Label("idLabelBouton1", "Chemise"));
			bouton2.appendChildWidget(new Label("Tishirt"));

			carousel.appendChildWidget(bouton1);
			carousel.appendChildWidget(bouton2);

			self.appendChildWidget(carousel);*/

			} 
		}); 
	} 
); 
