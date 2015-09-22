require.def("vente/static/datasources/produitdatasource",
		[
			"antie/class"
		], //classe dépendant de la classe antie/class
		function(Class){ 
			return Class.extend({ 
				loadData: function(callback){ //3. nom de la fonction
					callback.onSuccess( //prend en paramètre le tableau contenant les données
							[ 
								{ 
									"id": "1", 
									"lien": "http://www.paypal.com",
									"img" : "static/image/tof1.jpg" 
								}, 
								{ 
									"id": "2", 
									"lien" : "http://www.google.com",
									"img" : "static/image/tof2.jpg" 
								} 
								 
							] 
						) 
					}	 
				}); 
			} 
			 
		);