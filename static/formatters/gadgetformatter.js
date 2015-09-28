require.def("vente/static/formatters/gadgetformatter", 
	[ 
		"antie/formatter", 
		"antie/widgets/button", 
		"antie/widgets/label", 
		"antie/widgets/image" 
	], 
	function(Formatter,  Button, Label, Image){ 
		return Formatter.extend({ 
			format: function(iterateur){ //prend en paramètre l'iterateur
				var item = iterateur.next();

				var bouton  = new Button("produit"+item.id); 
				bouton.appendChildWidget(new Image("img-id",item.img, {width:100, height:100})); 
				bouton.appendChildWidget(new Label("Voir")); 

				bouton.addEventListener("select", function(evt){
					document.location.href = item.lien;
				});

				bouton.addEventListener("focus", function(evt){
                    bouton.addClass("unProduitFocus");
                    image.addClass("imageProduitFocus");
                  	self._componentTexte.texte.setText(item.details);

                });

                bouton.addEventListener("blur", function(evt){
                    bouton.removeClass("unProduitFocus");
                    image.removeClass("imageProduitFocus");
                });

                bouton.addEventListener("keydown", function(evt){

                });
				//retourner le bouton
				return bouton;
			} 
		} ); 
	} );