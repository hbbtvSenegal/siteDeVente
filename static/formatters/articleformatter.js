require.def("vente/static/formatters/articleformatter", 
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

				console.log(item.titre);

				var bouton  = new Button("article"+item.titre+item.id); 
				bouton.appendChildWidget(new Image("img-id"+item.titre,item.img, {width:100, height:100})); 
				bouton.appendChildWidget(new Label("Voir")); 

				bouton.addEventListener("select", function(evt){
					document.location.href = item.lien;
				});

				
				//retourner le bouton
				return bouton;
			} 
		} ); 
	} );