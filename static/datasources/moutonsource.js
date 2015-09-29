require.def("vente/static/datasources/moutonsource",
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
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "habillement", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "habillement", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}
							] 
						) 
					}	 
				}); 
			} 
			 
		);