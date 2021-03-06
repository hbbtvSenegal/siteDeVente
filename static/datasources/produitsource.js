require.def("vente/static/datasources/produitsource",
		[
			"antie/class"
		], //classe dépendant de la classe antie/class
		function(Class){ 
			return Class.extend({ 
				loadData: function(callback){ 
					callback.onSuccess( 
							[ 
								{ 
									"id": "1", 
									"titre": "habillement", 
									"img" : "static/image/chemise1.png",
									"fichier": "vente/js/ventehabillement",
									"source" : "habillement",
									"formatter" : "vente/static/formatters/habillementformatter",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre" : "gadget",
									"img" : "static/image/tof1.png",
									"fichier": "vente/js/ventegadget",
									"source" : "gadget",
									"formatter" : "vente/static/formatters/gadgetformatter",
									"details" : "Tout sur les gadgets"
								}, 
								{ 
									"id": "3", 
									"titre" : "villa",
									"img" : "static/image/villa_piscine1.png",
									"fichier": "vente/js/ventevilla",
									"source" : "villa",
									"formatter" : "vente/static/formatters/villaformatter",
									"details" : "Tout sur les villas"
								},
								{ 
									"id": "4", 
									"titre": "mouton", 
									"img" : "static/image/mouton1.png",
									"fichier": "vente/js/ventehabillement",
									"source" : "mouton",
									"formatter" : "vente/static/formatters/moutonformatter",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "5", 
									"titre" : "equipements electromenagers",
									"img" : "static/image/eqmenager2.png",
									"fichier": "vente/js/ventegadget",
									"source" : "electromenager",
									"formatter" : "vente/static/formatters/gadgetformatter",
									"details" : "Tout sur les gadgets"
								}, 
								{ 
									"id": "6", 
									"titre" : "automobiles",
									"img" : "static/image/villa_piscine2.png",
									"fichier": "vente/js/ventevilla",
									"source" : "automobile",
									"formatter" : "vente/static/formatters/villaformatter",
									"details" : "Tout sur les villas"
								}
							] 
						) 
					}	 
				}); 
			} 
			 
		);