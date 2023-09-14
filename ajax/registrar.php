<?php 
require_once "../modelos/Prospecto.php";

$prospecto  = new Prospecto();

$nombre=isset($_POST["nombre"])? limpiarCadena($_POST["nombre"]):"";
$telefono=isset($_POST["telefono"])? limpiarCadena($_POST["telefono"]):"";
$correo=isset($_POST["correo"])? limpiarCadena($_POST["correo"]):"";
$interes=isset($_POST["interes"])? limpiarCadena($_POST["interes"]):"";
$grado=isset($_POST["grado"])? limpiarCadena($_POST["grado"]):"";
$escuela=isset($_POST["escuela"])? limpiarCadena($_POST["escuela"]):"";
$idprospecto=isset($_POST["idprospecto"])? limpiarCadena($_POST["idprospecto"]):"";



switch ($_GET["op"]) {
	

	case 'registrar':
		$rspta=$prospecto->registrar($nombre,$telefono,$correo,$interes,$grado,$escuela);
		//$movimiento = 0;


        //pruebas

                
        // Datos a escribir en la hoja de cálculo
        $datos = [
            ['DESDE APPCONTACTAME', 'PENDIENTE', $interes, $nombre, $telefono, $correo, $grado, $escuela]
        ];

        // URL de ejecución de Apps Script
        $url = 'https://script.google.com/macros/s/AKfycbyBVk8Ii4eyq1Anakwtpf9qt1kZPIJzYGQvWHmEUdkCim6LfTYo2sOyYAZPLpUDgOWT/exec';

        // Realiza la solicitud HTTP POST a Apps Script
        $content = [
            'datos' => $datos
        ];

        $options = [
            'http' => [
                'header'  => 'Content-type: application/json',
                'method'  => 'POST',
                'content' => json_encode($content),
            ],
        ];
        $context  = stream_context_create($options);
        $response = file_get_contents($url, false, $context);
        


        //pruebas
		if ($rspta) {
			$rspta2 = $prospecto->lastId();
		}
		$dataSent = array(
			'stat'=>$rspta,
			'id'=>$rspta2
		);
		
		$json = json_encode($dataSent);
		
		echo $json;

	
		break;
	case 'actualizar':
		$rspta=$prospecto->actualizar($idprospecto,$interes);
		//$movimiento = 0;
		
		
		
		return $rspta;

	
		break;

	

}
?>
