require.def("vente/static/datasources/articlesource",
		[
			"antie/class"
		], 
		function(Class){ 
			return Class.extend({ 
				init: function(categorie){
					this._categorie = categorie;
					//console.log(this._categorie);
				},

				loadData: function(callback){ 
					var self = this;
				//	console.log(self._donnees[self._categorie]);

					callback.onSuccess( 
							
								self._donnees[self._categorie]
							
						) 
				},

				_getDonnees: function(){
					return 0;
				},

				_donnees: {
						"habillement":[
								{ 
									"id": "1", 
									"titre": "chemise", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "veste", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "pantalon", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}							
						],
						"villa":[
								{ 
									"id": "1", 
									"titre": "villa avec piscine", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "villa a moyen prix", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "villa standard", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}
						],
						"mouton":[
								{ 
									"id": "1", 
									"titre": "mouton avec corne", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "mouton bali bali", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "mouton de Casamance", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}
						],
						"automobile":[
								{ 
									"id": "1", 
									"titre": "toyota", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "4x4", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "Mitsibushi", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}
						],
						"gadget":[
								{ 
									"id": "1", 
									"titre": "montre", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "tablette", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "telephone portable", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}
						],
						"electromenager":[
								{ 
									"id": "1", 
									"titre": "climatiseur", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "2", 
									"titre": "cuisiniere", 
									"img" : "static/image/tof2.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}, 
								{ 
									"id": "3", 
									"titre": "refrigerateur", 
									"img" : "static/image/tof1.png",
									"lien" :  "sites/sitehabillement.php",
									"details" : "Tout sur l'habillement"
								}
						]
					}	 
				}); 
			} 
			 
		);