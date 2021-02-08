$(document).ready(function(){
    // ############################
    $('.filtros .categoriaPeriodo[category="todos"]').addClass('ct_periodo-active');

    // ############################
	$('.categoriaPeriodo').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// ADICIONAR A CLASSE ATIVA
		$('.categoriaPeriodo').removeClass('ct_periodo-active');
		$(this).addClass('ct_periodo-active');

		// OCULTAR PERIODO =========================
		function hideProduct(){
			$('.area-livro').hide();
            $('.titulo-disciplina').hide();
		} setTimeout(hideProduct,400);

		// MOSTRAR POR PERIODO =========================
		function showProduct(){
			$('.area-livro[category="'+catProduct+'"]').show();
            $('.titulo-disciplina[category="'+catProduct+'"]').show();
		} setTimeout(showProduct,400);
	});

    // MOSTRAR TODAS AS DISCIPLINAS 
    $('.categoriaPeriodo[category="todos"]').click(function(){
		function showAll(){
			$('.area-livro').show();
            $('.titulo-disciplina').show();
		} setTimeout(showAll,400);
	});
});