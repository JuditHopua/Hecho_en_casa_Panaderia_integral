/* volver al comienzo del html clickeando la flecha */

$(document).ready(function(){
    $('.up').hide();

    $('.up').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.up').slideDown(1000);
		} else {
			$('.up').slideUp(1000);
		}
	});

});

/* valida el formato del email del formulario de contacto */

function valida_email(valor) {
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(valor)){
		alert('Email no valido');
		document.form_contacto.email.focus();
		return(0);
	}
}

/* valida que se haya seleccionado alguna cantidad en algún producto y el formato del mail del contacto para permitir el envío del pedido */

function valida_enviar() {
	if(document.form_valida_pedido.pan_5_semillas.value == 0 && 
		document.form_valida_pedido.pan_centeno_salvado.value == 0 &&
		document.form_valida_pedido.pan_salvado_trigo.value == 0 &&
		document.form_valida_pedido.pan_semillas.value == 0 &&
		document.form_valida_pedido.pan_integral_avena_lino.value == 0 &&
		document.form_valida_pedido.pan_integral_cerveza_negra_datiles.value == 0 &&
		document.form_valida_pedido.pan_integral_chia.value == 0 &&
		document.form_valida_pedido.pan_integral_molde.value == 0 &&
		document.form_valida_pedido.pan_bollitos_ajo_mozarella.value == 0 &&
		document.form_valida_pedido.budin_pan_integral.value == 0 &&
		document.form_valida_pedido.budin_integral_banana.value == 0 &&
		document.form_valida_pedido.budin_integral_naranja_chocolate.value == 0 &&
		document.form_valida_pedido.budin_integral_limon.value == 0 &&
		document.form_valida_pedido.budin_banana_chocolate_avena.value == 0 &&
		document.form_valida_pedido.budin_ingles_integral.value == 0 &&
		document.form_valida_pedido.budin_integral_remolacha_naranja.value == 0 &&
		document.form_valida_pedido.budin_integral_zanahoria_nueces.value == 0 &&
		document.form_valida_pedido.budin_pan_dulce_integral.value == 0 &&
		document.form_valida_pedido.galletitas_avena_chocolate.value == 0 &&
		document.form_valida_pedido.galletitas_avena_coco.value == 0 &&
		document.form_valida_pedido.galletitas_avena_pasas_uva.value == 0 &&
		document.form_valida_pedido.galletitas_avena_chocolate_mandarina.value == 0 &&
		document.form_valida_pedido.galletitas_integrales_jengibre.value == 0 &&
		document.form_valida_pedido.galletitas_integrales_lino.value == 0 &&
		document.form_valida_pedido.galletitas_avena_manzana_pasas_uva.value == 0 &&
		document.form_valida_pedido.galletitas_integrales_vainilla.value == 0 &&
		document.form_valida_pedido.facturas_medialunas_integrales.value == 0 &&
		document.form_valida_pedido.facturas_medialunas_integrales_miel.value == 0 &&
		document.form_valida_pedido.facturas_harina_integral.value == 0 &&
		document.form_valida_pedido.facturas_espirales.value == 0 &&
		document.form_valida_pedido.facturas_challah_integral.value == 0 &&
		document.form_valida_pedido.facturas_brioche_integral.value == 0 &&
		document.form_valida_pedido.facturas_muffins_integrales_zanahoria.value == 0 &&
		document.form_valida_pedido.facturas_muffins_integrales_chocolate.value == 0 &&
		document.form_valida_pedido.facturas_muffins_frutillas.value == 0 &&
		document.form_valida_pedido.facturas_donuts_integrales.value == 0 &&
		document.form_valida_pedido.tartas_integral_caprese.value == 0 &&
		document.form_valida_pedido.tartas_integral.value == 0 &&
		document.form_valida_pedido.tartas_brocoli_choclo.value == 0 &&
		document.form_valida_pedido.tartas_choclo_queso.value == 0 &&
		document.form_valida_pedido.tartas_integral_colorida.value == 0 &&
		document.form_valida_pedido.tartas_integral_zapallitos.value == 0 &&
		document.form_valida_pedido.tartas_integral_jamon_queso.value == 0 &&
		document.form_valida_pedido.tartas_queso_cebolla.value == 0 &&
		document.form_valida_pedido.tartas_frutos_rojos.value == 0 &&
		document.form_valida_pedido.pizza_fugazzetta_integral.value == 0 &&
		document.form_valida_pedido.pizza_integral.value == 0 &&
		document.form_valida_pedido.pizza_integral_jamon_queso.value == 0 &&
		document.form_valida_pedido.pizza_base_zanahoria.value == 0 &&
		document.form_valida_pedido.pizza_integral_vegana.value == 0 &&
		document.form_valida_pedido.pizza_integral_base_remolacha.value == 0 &&
		document.form_valida_pedido.pizza_integral_rucula_tomates.value == 0 &&
		document.form_valida_pedido.pizza_integral_napolitana.value == 0 &&
		document.form_valida_pedido.pizza_prepizza_integral.value == 0 &&
		document.form_valida_pedido.promo_facturas.value == 0 &&
		document.form_valida_pedido.promo_tartaletas.value == 0 &&
		document.form_valida_pedido.promo_canapes.value == 0 &&
		document.form_valida_pedido.promo_pizzetas.value == 0 &&
		document.form_valida_pedido.promo_salado.value == 0 &&
		document.form_valida_pedido.promo_dulce.value == 0
		){
			alert('No ha seleccionado productos');
			document.form_valida_pedido.pan_5_semillas.focus();
			return(0);
		}
		valida_email(document.form_valida_pedido.email.value);
}