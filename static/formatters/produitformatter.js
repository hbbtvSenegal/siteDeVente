require.def("vente/static/formatters/produitformatter", 
	[ 
		"antie/formatter", 
		"antie/widgets/button", 
		"antie/widgets/label", 
		"antie/widgets/image" 
	], 
	function(Formatter,  Button, Label, Image){ 
		return Formatter.extend({ 
			format: function(iterateur){ //prend en paramètre l'iterateur
				var item = iterateur.next(); //un élément de données  DataSource
				var bouton  = new Button("produit"+item.id); 
				//si on veut insérer une image et un label
				bouton.appendChildWidget(new Image("img-id",item.img, {width:150, height:100})); 
				bouton.appendChildWidget(new Label("acheter")); 

				bouton.addEventListener("select", function(evt){
					document.location.href = item.lien;
				});

				//retourner le bouton
				return bouton;
			} 
		} ); 
	} );