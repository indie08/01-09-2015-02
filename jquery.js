	$(document).ready(function() {
		$('#return').click(function(evento) {
			$('#back-btn').fadeOut('fast');
				}),
	$(document).ready(function() {
			$('#return').click(function(){
				$('.rightTotal').animate({"margin-left":"100%"}),
				$('#title0').fadeOut('fast');
				});
			});
		

	});
	
	
	$(document).ready(function(){
 		$("#miboton").click(function(){
		$('#title0').fadeIn('fast'),
    	$("#title0").html("<p>Artes- escenicas</p>");
 });
});	

	$(document).ready(function(){
 		$("#boton").click(function(){
		$('#title0').fadeIn('fast'),
    	$("#title0").html("<p>Cineclub</p>");
		});
     
}),
	$(document).ready(function(){
    	$('#boton').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    }),
	
	$(document).ready(function() {
		$('#boton').click(function(evento) {
			$('#back-btn').fadeIn('fast');
				});
			});			
});
	$(document).on("ready", main);
	
	function cargarNota(url){
		$("#rightTotal").text("Cargando....");
		$("#rightTotal").load(url);
	}
	function main(){
		$("#boton").on("click",function(){
			cargarNota("http://www.farodeoriente.org/prueba/cineclub.html");
			});
		
	}
	

