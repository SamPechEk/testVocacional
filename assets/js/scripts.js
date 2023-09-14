var test = false;
var idRegistro = 0;

var interesC = 0;
var interesH = 0;
var interesA = 0;
var interesS = 0;
var interesI = 0;
var interesD = 0;
var interesE = 0;

var aptitudesC = 0;
var aptitudesH = 0;
var aptitudesA = 0;
var aptitudesS = 0;
var aptitudesI = 0;
var aptitudesD = 0;
var aptitudesE = 0;

function limpiar(){
	
	setTimeout('document.location.reload()',4000);
	

}

function actualizar(){
	console.log('hola');
	var carreraSelect = $('#interes2').val();
	if(!carreraSelect){
		swal.fire("Falta tu carrera de interes.", "Porfavor selecciona la carrera de tu interes para finalizar.", "error");
		return;
	}
	var formData = new FormData();
	formData.append("idprospecto",idRegistro);
	formData.append("interes",carreraSelect);
	$.ajax({
		url: "../ajax/registrar.php?op=actualizar",
		type: "POST",
		data: formData,
		contentType: false,
		processData: false,

		success: function(datos){				
			swal.fire("Tu información ha sido guardada", "Gracias por tu interes.", "success");
			// console.log(datos);
			limpiar();	
		},
		error:function(error){
			swal.fire("Ocurrio un error al registrare.", "Porfavor intenta nuevamente.", "error");
			$('#registrar').prop('disabled', false);
			console.log(error);
			// limpiar();
			
		}
	});
	

}

function radioChange(value,idpregunta,tipo,area){
	
	if (value) {
		if (tipo=='i') {
			if (area=='c') {
				interesC++;
			}
			if (area=='h') {
				interesH++;
			}
			if (area=='a') {
				interesA++;
			}
			if (area=='s') {
				interesS++;
			}
			if (area=='i') {
				interesI++;
			}
			if (area=='d') {
				interesD++;
			}
			if (area=='e') {
				interesE++;
			}
		}else{
			if (area=='c') {
				aptitudesC++;
			}
			if (area=='h') {
				aptitudesH++;
			}
			if (area=='a') {
				aptitudesA++;
			}
			if (area=='s') {
				aptitudesS++;
			}
			if (area=='i') {
				aptitudesI++;
			}
			if (area=='d') {
				aptitudesD++;
			}
			if (area=='e') {
				aptitudesE++;
			}
		}
	}
	const divParaEliminar = document.getElementById('radio-'+idpregunta);
	divParaEliminar.parentNode.removeChild(divParaEliminar);
	

}

function scroll_to_class(element_class, removed_height) {
	var scroll_to = $(element_class).offset().top - removed_height;
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 0);
	}
}

function bar_progress(progress_line_object, direction) {
	var number_of_steps = progress_line_object.data('number-of-steps');
	var now_value = progress_line_object.data('now-value');
	var new_value = 0;
	if(direction == 'right') {
		new_value = now_value + ( 100 / number_of_steps );
	}
	else if(direction == 'left') {
		new_value = now_value - ( 100 / number_of_steps );
	}
	progress_line_object.attr('style', 'width: ' + new_value + '%;').data('now-value', new_value);
}

jQuery(document).ready(function() {
	// const preguntas = [
	// 	'¿Aceptarías trabajar escribiendo artículos en la sección económica de un diario?',
	// 	'¿Te ofrecerías para organizar la despedida de soltero de uno de tus amigos?',
	// 	'¿Te gustaría dirigir un proyecto de urbanización en tu provincia?',
	// 	'¿A una frustración siempre opones un pensamiento positivo?',
	// 	'¿Te dedicarías a socorrer a personas accidentadas o atacadas por asaltantes?',
	// 	'¿Cuando eras chico, te interesaba saber cómo estaban construidos tus juguetes?',
	// 	'¿Te interesan más los misterios de la naturaleza que los secretos de la tecnología?',
	// 	'¿Escuchás atentamente los problemas que te plantean tus amigos?',
	// 	'¿Te ofrecerías para explicar a tus compañeros un determinado tema que ellos no entendieron?',
	// 	'¿Sos exigente y crítico con tu equipo de trabajo?',
	// 	'¿Te atrae armar rompecabezas o puzzles?',
	// 	'¿Podés establecer la diferencia conceptual entre macroeconomía y microeconomía?',
	// 	'¿Usar uniforme te hace sentir distinto, importante?',
	// 	'¿Participarías como profesional en un espectáculo de acrobacia aérea?',
	// 	'¿Organizas tu dinero de manera que te alcance hasta el próximo cobro?',
	// 	'¿Convencés fácilmente a otras personas sobre la validez de tus argumentos?',
	// 	'¿Estás informado sobre los nuevos descubrimientos que se están realizando sobre la Teoría del Big-Bang?',
	// 	'¿Ante una situación de emergencia actuás rápidamente?',
	// 	'¿Cuando tenés que resolver un problema matemático, perseverás hasta encontrar la solución?',
	// 	'¿Si te convocara tu club preferido para planificar, organizar y dirigir un campo de deportes, aceptarías?',
	// 	'¿Sos el que pone un toque de alegría en las fiestas?',
	// 	'¿Crees que los detalles son tan importantes como el todo?',
	// 	'¿Te sentirías a gusto trabajando en un ámbito hospitalario?',
	// 	'¿Te gustaría participar para mantener el orden ante grandes desórdenes y cataclismos?',
	// 	'¿Pasarías varias horas leyendo algún libro de tu interés?',
	// 	'¿Planificás detalladamente tus trabajos antes de empezar?',
	// 	'¿Entablás una relación casi personal con tu computadora?',
	// 	'¿Disfrutás modelando con arcilla?',
	// 	'¿Ayudás habitualmente a los no videntes a cruzar la calle?',
	// 	'¿Considerás importante que desde la escuela primaria se fomente la actitud crítica y la participación activa?',
	// 	'¿Aceptarías que las mujeres formaran parte de las fuerzas armadas bajo las mismas normas que los hombres?',
	// 	'¿Te gustaría crear nuevas técnicas para descubrir las patologías de algunas enfermedades a través del microscopio?',
	// 	'¿Participarías en una campaña de prevención contra la enfermedad de Chagas?',
	// 	'¿Te interesan los temas relacionados al pasado y a la evolución del hombre?',
	// 	'¿Te incluirías en un proyecto de investigación de los movimientos sísmicos y sus consecuencias?',
	// 	'¿Fuera de los horarios escolares, dedicás algún día de la semana a la realización de actividades corporales?',
	// 	'¿Te interesan las actividades de mucha acción y de reacción rápida en situaciones imprevistas y de peligro?',
	// 	'¿Te ofrecerías para colaborar como voluntario en los gabinetes espaciales de la NASA?',
	// 	'¿Te gusta más el trabajo manual que el trabajo intelectual?',
	// 	'¿Estarías dispuesto a renunciar a un momento placentero para ofrecer tu servicio como profesional?',
	// 	'¿Participarías de una investigación sobre la violencia en el fútbol?',
	// 	'¿Te gustaría trabajar en un laboratorio mientras estudiás?',
	// 	'¿Arriesgarías tu vida para salvar la vida de otro que no conoces?',
	// 	'¿Te agradaría hacer un curso de primeros auxilios?',
	// 	'¿Tolerarías empezar tantas veces como fuere necesario hasta obtener el logro deseado?',
	// 	'¿Distribuís tu horarios del día adecuadamente para poder hacer todo lo planeado?',
	// 	'¿Harías un curso para aprender a fabricar los instrumentos y/o piezas de las máquinas o aparatos con que trabajas?',
	// 	'¿Elegirías una profesión en la tuvieras que estar algunos meses alejado de tu familia, por ejemplo el marino?',
	// 	'¿Te radicarías en una zona agrícola-ganadera para desarrollar tus actividades como profesional?',
	// 	'¿Cuando estás en un grupo trabajando, te entusiasma producir ideas originales y que sean tenidas en cuenta?',
	// 	'¿Te resulta fácil coordinar un grupo de trabajo?',
	// 	'¿Te resultó interesante el estudio de las ciencias biológicas?',
	// 	'¿Si una gran empresa solicita un profesional como gerente de comercialización, te sentirías a gusto desempeñando ese rol?',
	// 	'¿Te incluirías en un proyecto nacional de desarrollo de la principal fuente de recursos de tu provincia?',
	// 	'¿Tenés interés por saber cuales son las causas que determinan ciertos fenómenos, aunque saberlo no altere tu vida?',
	// 	'¿Descubriste algún filósofo o escritor que haya expresado tus mismas ideas con antelación?',
	// 	'¿Desearías que te regalen algún instrumento musical para tu cumpleaños?',
	// 	'¿Aceptarías colaborar con el cumplimiento de las normas en lugares públicos?',
	// 	'¿Crees que tus ideas son importantes,y haces todo lo posible para ponerlas en práctica?',
	// 	'¿Cuando se descompone un artefacto en tu casa, te disponés prontamente a repararlo?',
	// 	'¿Formarías parte de un equipo de trabajo orientado a la preservación de la flora y la fauna en extinción?',
	// 	'¿Acostumbrás a leer revistas relacionadas con los últimos avances científicos y tecnológicos en el área de la salud?',
	// 	'¿Preservar las raíces culturales de nuestro país, te parece importante y necesario?',
	// 	'¿Te gustaría realizar una investigación que contribuyera a hacer más justa la distribución de la riqueza?',
	// 	'¿Te gustaría realizar tareas auxiliares en una nave, como por ejemplo izado y arriado de velas, pintura y conservación del casco, arreglo de averías, conservación de motores, etc?',
	// 	'¿Crees que un país debe poseer la más alta tecnología armamentista, a cualquier precio?',
	// 	'¿La libertad y la justicia son valores fundamentales en tu vida?',
	// 	'¿Aceptarías hacer una práctica rentada en una industria de productos alimenticios en el sector de control de calidad?',
	// 	'¿Consideras que la salud pública debe ser prioritaria, gratuita y eficiente para todos?',
	// 	'¿Te interesaría investigar sobre alguna nueva vacuna?',
	// 	'¿En un equipo de trabajo, preferís el rol de coordinador?',
	// 	'¿En una discusión entre amigos, te ofrecés como mediador?',
	// 	'¿Estás de acuerdo con la formación de un cuerpo de soldados profesionales?',
	// 	'¿Lucharías por una causa justa hasta las últimas consecuencias?',
	// 	'¿Te gustaría investigar científicamente sobre cultivos agrícolas?',
	// 	'¿Harías un nuevo diseño de una prenda pasada de moda, ante una reunión imprevista?',
	// 	'¿Visitarías un observatorio astronómico para conocer en acción el funcionamiento de los aparatos?',
	// 	'¿Dirigirías el área de importación y exportación de una empresa?',
	// 	'¿Te inhibís al entrar a un lugar nuevo con gente desconocida?',
	// 	'¿Te gratificaría el trabajar con niños?',
	// 	'¿Harías el diseño de un afiche para una campaña contra el sida?',
	// 	'¿Dirigirías un grupo de teatro independiente?',
	// 	'¿Enviarías tu curriculum a una empresa automotriz que solicita gerente para su área de producción?',
	// 	'¿Participarías en un grupo de defensa internacional dentro de alguna fuerza armada?',
	// 	'¿Te costearías tus estudios trabajando en una auditoría?',
	// 	'¿Sos de los que defendés causas perdidas?',
	// 	'¿Ante una emergencia epidémica participarías en una campaña brindando tu ayuda?',
	// 	'¿Sabrías responder que significa ADN y ARN?',
	// 	'¿Elegirías una carrera cuyo instrumento de trabajo fuere la utilización de un idioma extranjero?',
	// 	'¿Trabajar con objetos te resulta más gratificante que trabajar con personas?',
	// 	'¿Te resultaría gratificante ser asesor contable en una empresa reconocida?',
	// 	'¿Ante un llamado solidario, te ofrecerías para cuidar a un enfermo?',
	// 	'¿Te atrae investigar sobre los misterios del universo, por ejemplo los agujeros negros?',
	// 	'¿El trabajo individual te resulta más rápido y efectivo que el trabajo grupal?',
	// 	'¿Dedicarías parte de tu tiempo a ayudar a personas de zonas carenciadas?',
	// 	'¿Cuando elegís tu ropa o decorás un ambiente, tenés en cuenta la combinación de los colores, las telas o el estilo de los muebles?',
	// 	'¿Te gustaría trabajar como profesional dirigiendo la construcción de una empresa hidroeléctrica?',
	// 	'¿Sabés qué es el PBI?'
	//   ];

	  
	//   let bloqueHTML = '';
	  
	//   for (let i = 0; i < preguntas.length; i++) {
	// 	const preguntaActual = preguntas[i];
	// 	const numeroPregunta = i + 1;
	  
	// 	bloqueHTML += `<div class="form-group" id="radio-${numeroPregunta}">
	// 					<label for="">${numeroPregunta}.- ${preguntaActual}</label>
	// 					<div class="form-check-inline">
	// 						<label class="form-check-label">
	// 						  <input type="radio" class="form-check-input" name="p${numeroPregunta}"  onclick="radioChange(true,${numeroPregunta},,)" value="true">Si
	// 						</label>
	// 					</div>
	// 					<div class="form-check-inline">
	// 						<label class="form-check-label">
	// 						  <input type="radio" class="form-check-input" name="npregunta${numeroPregunta}"  onclick="radioChange(false,${numeroPregunta},,)"value="false">No
	// 						</label>
	// 					</div>
	// 				  </div>`;
	//   }
	  
	//   console.log(bloqueHTML);
    /*
        Fullscreen background
    */
    $.backstretch("../assets/img/backgrounds/1.jpg");
    
    $('#top-navbar-1').on('shown.bs.collapse', function(){
    	$.backstretch("resize");
    });
    $('#top-navbar-1').on('hidden.bs.collapse', function(){
    	$.backstretch("resize");
    });
    
    /*
        Form
    */
	$('#nextf1').prop('disabled', true);
	
	$('#test').on('change', function() {
    	if (test) {
			test = false;
			$('#carrerainteres').show();
			$('#registrar').prop('disabled', false);
			$('#nextf1').prop('disabled', true);
		}else{
			test = true;
			$('#carrerainteres').hide();
			$('#registrar').prop('disabled', true);
			$('#nextf1').prop('disabled', false);
		}
    	
    });

	$('#registrar').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
		// var doTest = $('#test').val();
    	// var next_step = true;
    	// navigation steps / progress steps
    	// var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	// var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	var canRegister = true;
    	// fields validation
		var charValidation = 'input[type="tel"],input[type="email"],input[type="text"], input[type="password"], textarea, select';
		
    	parent_fieldset.find(charValidation).each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			canRegister = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
		if (canRegister) {
			var formData = new FormData();
			var nombre = $('#nombre').val();
			if (!nombre) {
				swal.fire("Falta tu nombre.", "Porfavor asegurate de ingresar tu nombre.", "error");
				return;
			}
			var telefono = $('#telefono').val();
			if (!telefono) {
				swal.fire("Falta tu telefono.", "Porfavor asegurate de ingresar tu telefono.", "error");
				return;
			}
			var correo = $('#correo').val();
			if (!correo) {
				swal.fire("Falta tu correo.", "Porfavor asegurate de ingresar tu correo.", "error");
				return;
			}
			var interes = $('#interes').val();
			
			if (!interes) {
				swal.fire("Falta tu carrera de interes.", "Porfavor asegurate de ingresar la carrera de tu interes.", "error");
				return;
			}
			var grado = $('#grado').val();
			if (!grado) {
				swal.fire("Falta tu grado.", "Porfavor asegurate de ingresar tu grado.", "error");
				return;
			}
			var escuela = $('#escuela').val();
			if (!escuela) {
				swal.fire("Falta tu escuela.", "Porfavor asegurate de ingresar tu escuela de procedencia.", "error");
				return;
			}
			var regexCorreo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var correoTest = regexCorreo.test(correo);
			if (!correoTest) {
				swal.fire("Correo incorrecto.", "Porfavor ingresa un correo valido.", "error");
				return;
			}
			var telefonoRegex = /^\d{10}$/;
			telefonoTest = telefonoRegex.test(telefono);
			if (!telefonoTest) {
				swal.fire("Telefono incorrecto.", "Porfavor ingresa un telefono valido.", "error");
				return;
			}
			formData.append("nombre",nombre);
			formData.append("telefono",telefono);
			formData.append("correo",correo);
			formData.append("interes",interes);
			formData.append("grado",grado);
			formData.append("escuela",escuela);
			$.ajax({
				url: "../ajax/registrar.php?op=registrar",
				type: "POST",
				data: formData,
				contentType: false,
				processData: false,
		
				success: function(datos){				
					swal.fire("Tu información ha sido guardada", "Gracias por tu interes.", "success");
					// console.log(datos);
					limpiar();	
				},
				error:function(error){
					swal.fire("Ocurrio un error al registrare.", "Porfavor intenta nuevamente.", "error");
					$('#registrar').prop('disabled', false);
					console.log(error);
					// limpiar();
					
				}
			});
		}
    	
    });

	
    $('.f1 fieldset:first').fadeIn('slow');
    
    $('input[type="tel"],input[type="email"], .f1 input[type="text"], .f1 input[type="password"], .f1 textarea,select').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
	
    // next step
    $('.f1 .btn-next').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	
    	// fields validation
    	parent_fieldset.find('input[type="tel"],input[type="email"],input[type="text"], input[type="password"], textarea,radio').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	if (($('#radios').children().length > 0) && (idRegistro!=0)) {
			next_step = false;
			swal.fire("Faltan opciones por responder.", "Porfavor responde todas las preguntas.", "error");
		} 
    	if( next_step ) {
			
			if(idRegistro==0){
				var formData = new FormData();
				var nombre = $('#nombre').val();
				if (!nombre) {
					swal.fire("Falta tu nombre.", "Porfavor asegurate de ingresar tu nombre.", "error");
					return;
				}
				var telefono = $('#telefono').val();
				if (!telefono) {
					swal.fire("Falta tu telefono.", "Porfavor asegurate de ingresar tu telefono.", "error");
					return;
				}
				var correo = $('#correo').val();
				if (!correo) {
					swal.fire("Falta tu correo.", "Porfavor asegurate de ingresar tu correo.", "error");
					return;
				}
				var interes = $('#interes').val();
				interes = 'Por decidir';
				
				if (!interes) {
					swal.fire("Falta tu carrera de interes.", "Porfavor asegurate de ingresar la carrera de tu interes.", "error");
					return;
				}
				var grado = $('#grado').val();
				if (!grado) {
					swal.fire("Falta tu grado.", "Porfavor asegurate de ingresar tu grado.", "error");
					return;
				}
				var escuela = $('#escuela').val();
				if (!escuela) {
					swal.fire("Falta tu escuela.", "Porfavor asegurate de ingresar tu escuela de procedencia.", "error");
					return;
				}
				var regexCorreo = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				var correoTest = regexCorreo.test(correo);
				if (!correoTest) {
					swal.fire("Correo incorrecto.", "Porfavor ingresa un correo valido.", "error");
					return;
				}
				var telefonoRegex = /^\d{10}$/;
				telefonoTest = telefonoRegex.test(telefono);
				if (!telefonoTest) {
					swal.fire("Telefono incorrecto.", "Porfavor ingresa un telefono valido.", "error");
					return;
				}
				formData.append("nombre",nombre);
				formData.append("telefono",telefono);
				formData.append("correo",correo);
				formData.append("interes",interes);
				formData.append("grado",grado);
				formData.append("escuela",escuela);
				$.ajax({
					url: "../ajax/registrar.php?op=registrar",
					type: "POST",
					data: formData,
					contentType: false,
					processData: false,
			
					success: function(datos){
						var data = JSON.parse(datos);
						idRegistro=data.id.id;
						// console.log(idRegistro);
						// swal.fire("Tu información ha sido guardada", "Gracias por tu interes.", "success");		
					},
					error:function(error){
						swal.fire("Ocurrio un error al registrare.", "Porfavor intenta nuevamente.", "error");
						$('#registrar').prop('disabled', false);
						console.log(error);
						// limpiar();
						
					}
				});
			}else{		
				var miDiv = $('#interesC');
				miDiv.text('C: '+interesC);
				miDiv = $('#interesH');
				miDiv.text('H: '+interesH);
				miDiv = $('#interesA');
				miDiv.text('A: '+interesA);
				miDiv = $('#interesS');
				miDiv.text('S: '+interesS);
				miDiv = $('#interesI');
				miDiv.text('I: '+interesI);
				miDiv = $('#interesD');
				miDiv.text('D: '+interesD);
				miDiv = $('#interesE');
				miDiv.text('E: '+interesE);
				miDiv = $('#aptitudesC');
				miDiv.text('C:'+aptitudesC);
				miDiv = $('#aptitudesH');
				miDiv.text('H: '+aptitudesH);
				miDiv = $('#aptitudesA');
				miDiv.text('A: '+aptitudesA);
				miDiv = $('#aptitudesS');
				miDiv.text('S: '+aptitudesS);
				miDiv = $('#aptitudesI');
				miDiv.text('I: '+aptitudesI);
				miDiv = $('#aptitudesD');
				miDiv.text('D: '+aptitudesD);
				miDiv = $('#aptitudesE');
				miDiv.text('E: '+aptitudesE);
				console.log(interesC,interesH,interesA,interesS,interesI,interesD,interesE);
				console.log(aptitudesC,aptitudesH,aptitudesA,aptitudesS,aptitudesI,aptitudesD,aptitudesE);
			}			
			
				
    		parent_fieldset.fadeOut(400, function() {
    			// change icons
    			current_active_step.removeClass('active').addClass('activated').next().addClass('active');
    			// progress bar
    			bar_progress(progress_line, 'right');
    			// show next step
	    		$(this).next().fadeIn();
	    		// scroll window to beginning of the form
    			scroll_to_class( $('.f1'), 20 );
	    	});
    	}
    	
    });
    
    // previous step
    $('.f1 .btn-previous').on('click', function() {
    	// navigation steps / progress steps
    	var current_active_step = $(this).parents('.f1').find('.f1-step.active');
    	var progress_line = $(this).parents('.f1').find('.f1-progress-line');
    	
    	$(this).parents('fieldset').fadeOut(400, function() {
    		// change icons
    		current_active_step.removeClass('active').prev().removeClass('activated').addClass('active');
    		// progress bar
    		bar_progress(progress_line, 'left');
    		// show previous step
    		$(this).prev().fadeIn();
    		// scroll window to beginning of the form
			scroll_to_class( $('.f1'), 20 );
    	});
    });
    
    // submit
    $('.f1').on('submit', function(e) {
    	
    	// fields validation
    	$(this).find('input[type="text"], input[type="password"], textarea').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	// fields validation
    	
    });
    
    
});
