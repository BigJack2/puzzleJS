let letras = document.getElementById("letras");
let numeros = document.getElementById("numeros");

let botonA1 = document.getElementById("btnA1");
let botonB2 = document.getElementById("btnB2");
let botonC3 = document.getElementById("btnC3");
let botonD4 = document.getElementById("btnD4");
let botonE5 = document.getElementById("btnE5");
let botonF6 = document.getElementById("btnF6");
let botonG7 = document.getElementById("btnG7");
let botonH8 = document.getElementById("btnH8");
let botonI9 = document.getElementById("btnI9");
let botonJ10 = document.getElementById("btnJ10");


const datoA1 = () => {
  if (letras.innerHTML == "") {
    letras.innerHTML = "A";
  } else if (letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "1";
  } else {
    alert("Faltan datos");
  }
}

const datoB2 = () => {
  if (letras.innerHTML == "A") {
    letras.innerHTML += "B";
  } else if (numeros.innerHTML == "1" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "2";
  } else {
    alert("Faltan datos");
  }
}

const datoC3 = () => {
  if (letras.innerHTML == "AB") {
    letras.innerHTML += "C";
  } else if (numeros.innerHTML == "12" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "3";
  } else {
    alert("Faltan datos");
  }
}

const datoD4 = () => {
  if (letras.innerHTML == "ABC") {
    letras.innerHTML += "D";
  } else if (numeros.innerHTML == "123" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "4";
  } else {
    alert("Faltan datos");
  }
}

const datoE5 = () => {
  if (letras.innerHTML == "ABCD") {
    letras.innerHTML += "E";
  } else if (numeros.innerHTML == "1234" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "5";
  } else {
    alert("Faltan datos");
  }
}

const datoF6 = () => {
  if (letras.innerHTML == "ABCDE") {
    letras.innerHTML += "F";
  } else if (numeros.innerHTML == "12345" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "6";
  } else {
    alert("Faltan datos");
  }
}

const datoG7 = () => {
  if (letras.innerHTML == "ABCDEF") {
    letras.innerHTML += "G";
  } else if (numeros.innerHTML == "123456" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "7";
  } else {
    alert("Faltan datos");
  }
}

const datoH8 = () => {
  if (letras.innerHTML == "ABCDEFG") {
    letras.innerHTML += "H";
  } else if (numeros.innerHTML == "1234567" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "8";
  } else {
    alert("Faltan datos");
  }
}

const datoI9 = () => {
  if (letras.innerHTML == "ABCDEFGH") {
    letras.innerHTML += "I";
  } else if (numeros.innerHTML == "12345678" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "9";
  } else {
    alert("Faltan datos");
  }
}

const datoJ10 = () => {
  if (letras.innerHTML == "ABCDEFGHI") {
    letras.innerHTML += "J";
  } else if (numeros.innerHTML == "123456789" && letras.innerHTML == "ABCDEFGHIJ") {
    numeros.innerHTML += "10";
  } else {
    alert("Faltan datos");
  }
}



btnA1.onclick = () => { datoA1(); }
btnB2.onclick = () => { datoB2(); }
btnC3.onclick = () => { datoC3(); }
btnD4.onclick = () => { datoD4(); }
btnE5.onclick = () => { datoE5(); }
btnF6.onclick = () => { datoF6(); }
btnG7.onclick = () => { datoG7(); }
btnH8.onclick = () => { datoH8(); }
btnI9.onclick = () => { datoI9(); }
btnJ10.onclick = () => { datoJ10(); }