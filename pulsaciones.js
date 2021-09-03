function calcularPulsaciones() {
  var edad = document.getElementById("edad").value;
  var sexo = document.getElementById("sexo").value;
  var resultado;
  if (sexo === "Masculino") {
    resultado = (210 - edad) / 10;
  } else {
    resultado = (220 - edad) / 10;
  }
  document.getElementById("pulsaciones").value = resultado;
  return resultado;
}

function defJson() {
  var iden = document.getElementById("identificacion").value;
  var nom = document.getElementById("nombre").value;
  var ape = document.getElementById("apellido").value;
  var sex = document.getElementById("sexo").value;
  var ed = document.getElementById("edad").value;
  var pulsa = calcularPulsaciones();

  var persona = {
    identificacion: iden,
    nombre: nom,
    apellido: ape,
    sexo: sex,
    edad: ed,
    pulsaciones: pulsa,
  };
  return persona;
}

function guardar() {
  var personas = [];
  var perTemp = defJson();
  if (localStorage.getItem("BDlocal") != null) {
    personas = JSON.parse(localStorage.getItem("BDlocal"));
  }
  personas.push(perTemp);
  localStorage.setItem("BDlocal", JSON.stringify(personas));
}



function consultar() {

  var personas = [];
  var pval = "";
  if (localStorage.getItem("BDlocal") != null) {
    personas = JSON.parse(localStorage.getItem("BDlocal"));
  }
  
  personas.forEach(element =>{
    pval +="<tr>" 
    pval +="<td>" +element.identificacion +"</td>" 
    pval +="<td>" +element.nombre +"</td>" 
    pval +="<td>" + element.apellido +"</td>" 
    pval +="<td>" +element.sexo +"</td>" 
    pval +="<td>" + element.edad +"</td>" 
    pval +="<td>" +element.pulsaciones +"</td>"
    pval +="<tr>" 
  }
  );
  document.getElementById("cuerpotabla").innerHTML = pval;

}
