$(document).ready(function() {
	$('form').submit(function(event){
		event.preventDefault(); // Empêche le changement de page
		//console.log('envoi');
		traitementDuFormulaire();

	});

	function traitementDuFormulaire(){
		var formData = $('form').serialize();  // = var data = { prenom : $('#prenom').val(), mail : $('#mail').val() };
		console.info(formData);

		$.ajax({
			dataType : 'json',
			type : 'POST',
			url : '../validation.php',
			data : formData,
			success: function (reponse){
				console.log(reponse);
				$('.erreur').remove();

				if (reponse === true) {
					//console.log ('tout est ok');
					$('input').last().after('Vous êtes bien enregistré !');
				}
				else{
					// Il y a des erreurs
					$.each(reponse, function(champ, erreur){
						msgErreur ='<span class="erreur">'+erreur+'</span>'
						$('#'+champ).after(msgErreur)
						  
						$.each(reponse, function (champ, erreur){
						  
						});
					});
				}
			},
			error: function(){
				console.log('Problème de validation');
			}

		});
	}

  });