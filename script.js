$( document ).ready(function(){
	$( "#spaceInput" ).keypress(function(e) {
		if ((e.keyCode == 13) && ($( "#spaceInput" ).val().trim() != '')) {
	  		$('#spaceList').prepend('<li class="elemLista"><i class="itemHecho far fa-check-circle"></i><span class="itemNuevo">'+$( "#spaceInput" ).val()+'</span><i class="itemQuitar fas fa-trash-alt"></i></li>');
	  		$( "#spaceInput" ).val('');
	  		$('#noElem').addClass('displayHidden');
		}
	});

	$('#spaceList').on('click','.itemQuitar', function(e){
		$(this).parent().remove();
		hideNoElem();
	});

	$('#spaceList').on('click','.itemNuevo', function(e){
		$(this).toggleClass('textTachado');
	});

	$('#spaceList').on('click','.itemHecho', function(e){
		$(this).toggleClass('itemCheck');
	});

	$('#checkAll').click(function(e){
		$('.itemHecho').addClass('itemCheck');
	});

	$('#deleteAll').click(function(e){
		$('.itemCheck').parent().remove();
		hideNoElem();
	});

	$('#uncheckAll').click(function(e){
		$('.itemHecho').removeClass('itemCheck');
	});

	$('#allItem').click(function(e){
		$('.itemNuevo').parent().removeClass('displayHidden');
		hideNoElem();
	});

	$('#allCheck').click(function(e){
		filterElement('.itemCheck');
	});	

	$('#allTachado').click(function(e){
		filterElement('.textTachado');
	});
	//En #allCheck y #allTachado todo es lo mismo solo varia la class, asi que se crea una function 
	//en este caso "filterElement" así se resume el tener que tener lo mismo dos veces.

	$('#hideLista').click(function(e){
		slideLista();
	})

	$('#showLista').click(function(e){
		slideLista();
	})

	function hideNoElem(){
		if($('.elemLista').length == 0){
			$('#noElem').removeClass('displayHidden');
		}
		else{
			$('#noElem').addClass('displayHidden');
		}
	}

	function slideLista(){
		$('.espacioLista').slideToggle();
		$('#hideLista,#showLista').toggleClass('displayHidden');
	}

	function filterElement(className){
		let existenElem = false;
		$('.elemLista').removeClass('displayHidden'); 
		$('#noElem').addClass('displayHidden');
		$('.elemLista').each(function(elementIndex){ 
			if($(this).find(className).length == 0){ 
				$(this).addClass('displayHidden'); 
			}
			else{
				existenElem = true;
			}
		})
		if(existenElem === false){
			$('#noElem').removeClass('displayHidden');
		}
	}

	//reviso si esta oculto para asi puedo intercalar entre los diferentes filtros.
	//hago un recorrido por todos los .elemLista ("li") de mi lista.
	//que busque la class y si no lo tiene (0 elem encontrados)...
	//...que agregue una class (class que los oculta).
});





//e.preventdefault() <-- e es por el evento y el preventdefault previene errores en las funciones.
// parent() - no solo eliminar el itemQuitar, sino también el padre.
// addClass - agrega clase.
// removeClass - remueve la clase.
// toggleClass - si no la tiene la agrega y si la tiene la quita.