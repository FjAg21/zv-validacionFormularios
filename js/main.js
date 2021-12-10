

class ExpresionRegular {


  constructor() {

  }


  // cuenta el nº de vocales y consonantes de una cadena pasada por parámetro.
  cuentaCaracteres( cadena = ""){

    let result = "";

    if(!cadena) result = "No has escrito cadena.";
    if( typeof cadena !== "string") result =  `${cadena} no es un string`;


    return result;

  } // -----Fin  cuentaCaracteres( cadena = "")




  // --- param: 'cadena' valor que se toma del input.
  comprobarDNI(cadena = ""){

    let letrasDNI = ['T','R','W','A','G', 'M','Y','F','P','D', 'X','B','N','J','Z',
      'S','Q','V', 'H','L','C','K','E'];

    let result = " DNI CORRECTO";
    if(!cadena) return  result = "No has escrito datos para comprobar.";

    let expresion = /^([0-9]{7,8})-?([A-Za-z])$/;

    if (expresion.test(cadena)){
      let x = letrasDNI[parseInt(cadena.match(expresion)[1]) % 23];

      if ( x === cadena.match(expresion)[2].toUpperCase()){
        result = "Número de DNI correcto."
      }
      else {
        result = " Error!!!   letras de DNI NO correctas."
      }
    }
    else {
      result = " ERR0R --- Nº DNI --- INCORRECTO."
    }

    return result;
  }

  comprobarEmail(email = ""){

    let result = "";
    if (!email) return result = "No has escrito dirección de correo.";

    let expresion = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let expre = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

    if( expre.test(email) ){
      result = "Dirección de correo válida.";
    }
    else {
      result = "No es un email válido."
    }
    return result;
  }


}
// -------------------------------    Fin class ExpresionRegular   ----------------------------------


let d = document,
  inputDNI = d.getElementById('inpDni'),
  butDNI = d.getElementById('comDni'),
  $h2_dni = d.getElementById('c-h2-dni');

butDNI.addEventListener('click', (e) => {

  let solucion = " ";
  let comDNI = new ExpresionRegular();
  let dni = inputDNI.value;

  solucion = comDNI.comprobarDNI(dni);

  $h2_dni.innerHTML =  "<mark>" +inputDNI.value+ "</mark>"+ " " +solucion;
  inputDNI.value = " ";

});

let inputEmail = d.getElementById('inpEma'),
  butEmail = d.getElementById('btnEma'),
  $b_h2_email = d.getElementById('b-h2-email');



inputEmail.addEventListener('blur' , () => {

  inputEmail.style.color= '#01060EFF';
  inputEmail.style.backgroundColor= '#ffffff';

});

inputEmail.addEventListener('focus' , () => {

  inputEmail.style.color= '#0062ff';
  inputEmail.style.backgroundColor= '#99ff00';
})


butEmail.addEventListener('click' , (e) =>{

  let solucion = " ";
  let comEmail = new ExpresionRegular();
  let email = inputEmail.value;

  solucion = comEmail.comprobarEmail(email);
  $b_h2_email.value = " ";

  $b_h2_email.innerHTML =  "<mark>" +inputEmail.value+ "</mark>"+ " " +solucion;
  inputEmail.value = " ";
});





