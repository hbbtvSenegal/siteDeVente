require.def("vente/static/formatters/articleformatter", 
	[ 
		"antie/formatter", 
		"antie/widgets/button", 
		"antie/widgets/label", 
		"antie/widgets/image",
		"antie/widgets/component"
	], 
	function(Formatter,  Button, Label, Image, Component){ 
		return Formatter.extend({ 
			format: function(iterateur){ //prend en paramètre l'iterateur
				var item = iterateur.next();

				//console.log(item.titre);

				var conteneur  = new Button("article"+item.titre+item.id);
				conteneur.addClass("articleBouton");
				conteneur.appendChildWidget(new Image("img-id"+item.titre,item.img, {width:200, height:180})); 
			//	conteneur.appendChildWidget(new Label("Voir")); 

			//	var acheter = new Button("AcheterArticle");
			//	acheter.appendChildWidget(new Label("Acheter"));

				//conteneur des boutons et textes
			//	var controle = new Component("controleArticle");
			//	controle.appendChildWidget(acheter);

				//conteneur.appendChildWidget(controle);

				var label = new Label("Acheter");

				conteneur.addEventListener("focus", function(evt){
                    conteneur.addClass("articleFocus");
                   // image.addClass("imageAppFocus");
                //  	self._componentTexte.texte.setText(item.details);
                  	conteneur.appendChildWidget(label);

                });

                conteneur.addEventListener("blur", function(evt){
                    conteneur.removeClass("articleFocus");
                  //  image.removeClass("imageFocus");
                  conteneur.removeChildWidget(label);
                });


				conteneur.addEventListener("keydown", function(evt){
					if(evt.keyCode===40)
					{
						console.log(evt.keyCode);
						//conteneur.setActiveChildWidget(acheter);
					}
					
				});

				conteneur.addEventListener("focus", function(evt){
					console.log("----");
				});

				conteneur.addEventListener("select", function(evt){
					document.location.href = item.lien;
				});

				
				
				return conteneur;
			} 
		} ); 
	} );