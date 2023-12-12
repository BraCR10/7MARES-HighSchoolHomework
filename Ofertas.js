//Esta configuracion lo que hace es quitar y poner la palabra .activo de la clase FondoEmegente para hacer un efecto de emergente en el apartado de ofertas
var AbrirEmergente = document.getElementById("Ofertas"),//Ubica el id del apartado donde debe ejecutar el codigo en este caso ofertas y lo almacena en una variable
	Fondo = document.getElementById("FondoEmergente"),//Ubica el id del apartdo donde debe ejecutar el codigo y lo almacena en una variable
	CerrarEmergente = document.getElementById("CerrarEmergente");//Ubica el id del apartdo donde debe ejecutar el codigo y lo almacena en una variable

AbrirEmergente.addEventListener('click', function(){//Se le agrega un metodo el cual permite que con un click en el apartado de ofertas, se le agrege el .activo a la clase FondoEmergente
	Fondo.classList.add('activo');
});

CerrarEmergente.addEventListener('click', function(){//Se le agrega un metodo el cual permite que con un click en la EQUIS en la emergente, se le quite el .activo a la clase FondoEmergente
	Fondo.classList.remove('activo');
});

//Al quitar y poner el .activo de la clase FondoEmergente, La emergente desaparecera y aparecera en la pantalla del usurio gracias a una pequeña configuracion en el documeto de estilos CSS