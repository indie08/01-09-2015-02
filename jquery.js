	$(document).ready(function(){
 		$("#miboton").click(function(){
    	$("#micapa").html("Nuevo contenido de la capa");
 });
});	

	$(document).ready(function(){
 		$("#boton").click(function(){
    	$("#micapa").html("contenido de la capa");
		});
     
}),
	$(document).ready(function(){
    	$('#boton').click(function(){
			$("#rightTotal").animate({"margin-left": "-100%"});
    })
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
	
