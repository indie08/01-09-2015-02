
	$(document).ready(function(){
 		$("#miboton").click(function(){
    	$("#title").html("<p>Nuevo contenido de la capa</p>");
 });
});	

	$(document).ready(function(){
 		$("#boton").click(function(){
    	$("#title").html("<p>contenido de la capa</p>");
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
	

	$(document).ready(function() {
		$('#return').click(function(evento) {
			$('#back-btn').fadeOut('fast');
				}),
	$(document).ready(function() {
			$('#return').click(function(){
				$('.rightTotal').animate({"margin-left":"100%"})
				});
			}),
	$(document).ready(function() {
			$('#return').click(function(evento){
				$('#title0').fadeIn('fast');
				});
			});			

	});