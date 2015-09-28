require.def("vente/static/datasources/villasource",
		[
			"antie/class"
		], //classe dépendant de la classe antie/class
		function(Class){
			"use strict";

			return Class.extend({ 
				loadData: function(callback){ 
					callback.onSuccess( 
							[ 
								{ 
									"id": "1", 
									"titre": "habillement", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "habillement", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "habillement", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement",
									"details" : "Tout sur l'habillement"
								}
							] 
						) 
					}	 
			}); 
		} 
			 
	);