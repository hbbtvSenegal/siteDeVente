require.def("sitehabillement/sites/sitehabillement",
	[
		"antie/widgets/component",
		"antie/widgets/label",
		"antie/widgets/horizontallist",
		"sitehabillement/static/composants/bouton"
	],
	function(Component, Label, HorizontalList, Bouton){
		return Component.extend({
			init: function(){
				var self = this;
				this._super("sitehabillement");

				this._descrption = new Label("descrptionSite", "Description");
				this.appendChildWidget(this._descrption);

			//faire le menu
				var menu = new HorizontalList("menusite");
				var boutonAccueil = new Bouton("boutonAccueil");
				var boutonProduits = new Bouton("boutonProduits");
				var boutonApropos = new Bouton("boutonApropos");

				//evenements
				boutonAccueil.addEventListener("focus", function(evt){

				});

				boutonProduits.addEventListener("focus", function(evt){

				});

				boutonApropos.addEventListener("focus", function(evt){
				
				});

					//ajouts des elements
				menu.appendChildWidget(boutonAccueil);
				menu.appendChildWidget(boutonProduits);
				menu.appendChildWidget(boutonApropos);

				this.appendChildWidget(menu);
			}

		});
	}
);