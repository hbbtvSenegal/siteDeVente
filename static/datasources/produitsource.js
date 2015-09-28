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
									"img" : "static/image/tof1.png",
									"fichier": "vente/js/ventehabillement",
									"source" : "vente/static/datasources/habillementsource",
									"formatter" : "vente/static/formatters/habillementformatter",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre" : "gadgets",
									"img" : "static/image/tof2.png",
									"fichier": "vente/js/ventegadget",
									"source" : "vente/static/datasources/gadgetsource",
									"formatter" : "vente/static/formatters/gadgetformatter",
									"details" : "Tout sur les gadgets"
								}, 
								{ 
									"id": "3", 
									"titre" : "villa",
									"img" : "static/image/tof2.png",
									"fichier": "vente/js/ventevilla",
									"source" : "vente/static/datasources/villasource",
									"formatter" : "vente/static/formatters/villaformatter",
									"details" : "Tout sur les villas"
								}
							] 
						) 
					}	 
				}); 
			} 
			 
		);