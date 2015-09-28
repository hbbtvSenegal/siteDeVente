require.def("vente/static/formatters/produitformatter", 
	[ 
		"antie/formatter", 
		"antie/widgets/button", 
		"antie/widgets/label", 
		"antie/widgets/image" 
	], 
	function(Formatter, Button, Label, Image){ 
		"use strict";
		return Formatter.extend({ 


			init: function(application, details){
                this._super();
                this._application = application;
                this._device = this._application.getDevice();

                this._componentTexte = details;
                var self = this;
            },

			format: function(iterateur){
				var self = this;

				var item = iterateur.next();

				var bouton  = new Button("produit"+item.id);
				bouton.addClass("produitBouton");
				var image = new Image("img-id", item.img, {width:100, height:100});
				bouton.appendChildWidget(image); 
				bouton.appendChildWidget(new Label("Voir")); 

				bouton.addEventListener("select", function(evt){
					//self._application.pushComponent("maincontainer", item.fichier);
					//console.log(item);
					self._application.pushComponent("maincontainer", item.fichier);
				});

				bouton.addEventListener("focus", function(evt){
                    bouton.addClass("produitFocus");
                    image.addClass("imageFocus");
                  	self._componentTexte.texte.setText(item.details);

                });

                bouton.addEventListener("blur", function(evt){
                    bouton.removeClass("produitFocus");
                    image.removeClass("imageFocus");
                });

                bouton.addEventListener("keydown", function(evt){

                });

				return bouton;
			}
		}); 
	} 
);