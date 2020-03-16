function validacion(){
var rut = document.getElementById("rut").value;
var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellidos").value;
var correo = document.getElementById("correo").value;

    if (rut.length>10){
        alert("El rut es muy largo")
        return false;
    }
    else if(/^\w+$/.test(rut)){
        return true;
    }

    if (nombre == ""){
        alert("Todos los campos son obligatorios");
        
        
    }

    else if (nombre.length>30){
        alert("El nombre es muy largo");
        
        
    }
    else if(nombre!=""&&nombre<=30){
        var expresion = /[abcdefghijklmnopqrstuvwxyz]/gi;
        var lista = nombre.match(expresion);
        alert("Ingresado correctamente")
        
    }
  




    else if(key==5){
        var cont = 0;
        var conta = 0;
        var opcion = prompt("Ingrese su nombre")
        var expresion =/[aeiou]/gi;
        var expresion2 = /[bcdfghjklmnpqrstvwxyz]/gi;
        var prueba = opcion.match(expresion);
        var prueba2 = opcion.match(expresion2);
        for (let i = 0; i<prueba.length;i++){
            cont=cont + 1;
            
        }alert("La cantidad de vocales que tiene es"+ " " +cont);

        for(let i = 0; i<prueba2.length;i++){
            conta = conta +1;

        }
        alert("La cantidad de consonantes que tiene es" + " " + conta)
    } 



/*
    if (apellido === ""){
        alert("Todos los campos son obligatorios");
       return false;
    }
    else if (apellido.length>80){
        alert("El apellido es muy largo");
        return false;
    }

    
    if (correo === ""){
        alert("Todos los campos son obligatorios");
       return false;
    }
    else if (correo.length>100){
        alert("El correo es muy largo");
        return false;
        
    }
    else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
        alert("La dirección de email " + valor + " es correcta.");
        return true;
       } else {
        alert("La dirección de email es incorrecta.");
        return false;
       }*/


    
}

    
