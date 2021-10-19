
	//declaration des variables
	var canvas1 = document.getElementById('monCanvas');
	var context = canvas1.getContext('2d');
	var x=250; 
	var y=250; 
	var vity=0; 
	var vitx=4; 
	var sauter=0; 
	var oldsauter=0; 
	var xobs=475; 
	var yobs=200; 
	var compteur=0;

	$('body').keydown(function(ev){
	if(ev.keyCode == 74) sauter=1 ;
	});

$('body').keyup(function(ev){
	if(ev.keyCode == 74) {sauter=0;oldsauter=0} ;
	}); 
	
	// appel du ballon, des barres, et des obstacles
   
	var voiture = new Image();
	voiture.src = "../images/voiture.png";

	var voiture2 = new Image();
	voiture2.src = "../images/voiture2.png";
	
	var barre = new Image();
	barre.src = "../images/barre.png";

	var obstacle = new Image();
	obstacle.src = "../images/obstacle.png";

	var fond = new Image();
	fond.src = "../images/fastfurious.jpg";

   

	// Rafraichir la scène pour les déplacements
	var montimer = setInterval(function(){
		//Dessiner le fond  
		context.drawImage(fond,0,0)
		

		//Dessiner la voiture
		context.drawImage(voiture,x,y);
	   
		

		//Animer le ballon
		x+=vitx
		
		//Dessiner les barres
		context.drawImage(barre,0,-25);
		context.drawImage(barre,0,475);
		x+=vitx
		y+=vity

		//Dessiner les obstacles

		context.drawImage(obstacle, xobs, yobs);


		//compteur 

		 

		 //incrementation variable vity

		 vity += 0.05;

		//test des bordures
		if( x >= 430 ) { // Touche à droite
			
			vitx = -vitx ;
			
			compteur += 1;
			
			 

			if(y >= yobs-40 && y <= yobs+59) {
				//console.log('touché')
				compteur = 0;
			}
			
			x = 430 
			
		
			xobs = -24
			yobs = Math.round((Math.random()*330)+20)
			
		}
		if( x <= 0  ) {  // Touche à gauche
			vitx = -vitx ;
			
			compteur += 1;
			context.drawImage(voiture,x,y)
			
			x= 0 

			if(y >= yobs-40 && y <= yobs+89) {
				//console.log('touché')
				compteur = 0;
			}
		
			xobs = 476
			yobs = Math.round((Math.random()*330)+20)
		}
		if( y >= 435 ) { 
			vity = -vity ;
			compteur = 0 

			if(y >= yobs-40 && y <= yobs+89) {
				//console.log('touché')
				compteur = 0;
			}
			
			y= 435 }
		if( y <= 20  ) { 
			vity = -vity ;
			compteur = 0
			

			if(y >= yobs-40 && y <= yobs+89) {
				//console.log('touché')
				compteur = 0;
			}
			
			y= 20 }
		
		

	   

		if( sauter == 1 && oldsauter == 0 ) { oldsauter=1 ; vity-=4; }

				
		
			//compteur 

		context.fillStyle="white";
		context.fillText('Score:'+compteur,10,50);


	   


	}, 25)
	
