<?php 
//incluir la conexion de base de datos
require "../config/Conexion.php";
class Prospecto{


	//implementamos nuestro constructor
	public function __construct(){

	}

	
	public function registrar($nombre,$telefono,$correo,$interes,$grado,$escuela){
		date_default_timezone_set('America/Merida');
		$fechaA = date("Y-m-d");
		// $horaA = date("H:i:s");
		$sql = "INSERT INTO prospecto (nombre, telefono, correo, interes, grado, escuela, fecha) VALUES ('$nombre', '$telefono', '$correo', '$interes','$grado','$escuela','$fechaA')";
		return ejecutarConsulta($sql);	
	}

	public function lastId(){
		$sql = "SELECT LAST_INSERT_ID() AS id";
		return ejecutarConsultaSimpleFila($sql);	
	}

	public function actualizar($idprospecto,$interes){
		$sql="UPDATE prospecto SET interes = '$interes' WHERE idprospecto='$idprospecto'";
		return ejecutarConsulta($sql);	
	}
	

}

 ?>
