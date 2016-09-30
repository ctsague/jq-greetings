console.log('have fun !');



$("button").click(function(){
	
var Mon_objet = {
	Prenom :$("#first_name").val(),
	Nom : $("#last_name").val(),
	Ville : $("#city").val()
};

console.log(Mon_objet);
$("#username").html(Mon_objet.Prenom + " " + Mon_objet.Nom);



});