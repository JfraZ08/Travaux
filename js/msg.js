$(document).ready(function(){

		
					

			//console.log('démarrage du script...');
			setInterval(function(){
				//console.log('je rafraichit toutes les 2 sec');
				$.get('php/affiche.php', function(donnees){
					//console.log('Données chargées'+donnees)
					$('#affiche').html(donnees)//on pousse les donnees dans la div affiche

					
				});

				
			}, 500);
					
			function envoi(){
				$.get(
					'php/dire.php',
					{
						pseudo: $('#pseudo').val(),
						//ou var pseudo=$('#pseudo').val
						message: $('#message').val(), 

						//ou var message=$('#message').val
						//var UrlDire='?pseudo='+ pseudo +'&message='+ message 
						//$.ajax(UrlDire)
					},

				)
			};

			

			$('#message').keydown(function(event){
				if(event.which==13){
					var message = $('#message').val();
					

					if ( message=='wizz' || message=='WIZZ') {
						console.log(' wizz !');
						wizz.play();
						$( "#affiche" ).effect( "shake" );
					}else{
						envoi();
						element = document.getElementById('affiche');
						element.scrollTop = element.scrollHeight;
					}
					$('#message').val('').focus();

				}

			
				
			});

			$('#envoyer').click(function(){
					var message = $('#message').val();

					if ( message=='wizz' || message=='WIZZ') {
						console.log(' wizz !');
						wizz.play();
						$( "#affiche" ).effect( "shake" );
					}else{
						envoi();
						element = document.getElementById('affiche');
						element.scrollTop = element.scrollHeight;
					}
					//vidage des zones de saisie
					$('#message').val('').focus();
				});	
			//autre methode si utilisation de formulaire
			//$('form').submit(function(e){
				//e.preventDefault()//empeche de se faire rediriger
				//envoi()
				//})
			
		

		});
