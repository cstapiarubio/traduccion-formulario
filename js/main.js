function translate (){
	var title =document.getElementById("form-signin-heading");
	var email =document.getElementById("inputEmail");
	var password =document.getElementById("inputPassword");
	var remember =document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder= "Correo Electrónico";
	password.placeholder= "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar sesión";
}
translate();

/*function mostrar(inputEmail) {
        document.getElementsByTagName('input').innerHTML = 
                    document.getElementById("inputEmail").value;
    }

mostrar();

}
document.write ("El correo electrónico ingresado es: " + "La clave ingresada es: ");*/