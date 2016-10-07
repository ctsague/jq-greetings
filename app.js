console.log('have fun !');



$("button").click(function(){
	var monObjet = {
		prenom :$("#first_name").val(),
		nom : $("#last_name").val(),
		ville : $("#city").val()
	};

	console.log(monObjet);
	$("#username").html(monObjet.prenom + " " + monObjet.nom);
});
