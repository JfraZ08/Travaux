$(document).ready(function(){

	//Scroll fluide

//...ici les instructions à lancer une fois la page chargée
$('.navbar-nav').localScroll();

//MENU DEROULANT

	$(".sous").hide();

	$('.navigation > li').on({
				mouseenter :function(){
					
					$(this).next().slideDown(200); //modification de la vitesse de déroulement du menu
			}
		});
	
	$('.navigation ul').on({
				mouseleave :function(){
				$(this).slideUp(200); //modification de la vitesse de réenroulement du menu
			}

		});






});

