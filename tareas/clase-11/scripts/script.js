/* 
1)
    Escribe un programa que le pida al usuario que introduzca su edad mediante un prompt. 
    Luego, el programa debe determinar y mostrar en la consola en qué etapa de la vida se encuentra el usuario 
    según su edad. Las etapas son las siguientes:
    Si la edad es menor de 0, mostrar "Edad no válida."
    Si la edad es menor de 13, mostrar "Eres un niño."
    Si la edad es entre 13 y 17 inclusive, mostrar "Eres un adolescente."
    Si la edad es entre 18 y 64 inclusive, mostrar "Eres un adulto."
    Si la edad es 65 o mayor, mostrar "Eres una persona mayor."
*/
const ageButton = document.getElementById("submit-age");
const ageInput = document.getElementById("age-input");
const ageSpan = document.getElementById("age-span");

const showSpanText = function (span, message) {
  span.textContent = message;
};

const handlerAge = function (age) {
  if (age < 0) showSpanText(age.Span, "Edad no valida!");

  if (age < 13) showSpanText(ageSpan, "Eres un niño.");

  if (age >= 13 && age <= 17) showSpanText(ageSpan, "Eres un adolecente.");

  if (age >= 18 && age <= 64) showSpanText(ageSpan, "Eres un adulto.");

  if (age > 65 && age < 100) showSpanText(ageSpan, "Eres una persona mayor.");

  if (age > 100) showSpanText(ageSpan, "WOOOOOOW! Enserio!? Felicitaciones!");
};

ageInput.addEventListener("click", e => {
  showSpanText(ageSpan, "");
});

ageButton.addEventListener("click", e => {
  e.preventDefault();
  const age = ageInput.value;

  if (!age) {
    showSpanText(ageSpan, "Porfavor ingresa tu edad!💥");
    return;
  }

  handlerAge(age);
});

/*
2)
    Crea un programa que le pida al usuario que introduzca una calificación numérica (entre 0 y 100) 
    mediante un prompt. El programa debe convertir la calificación a una letra según la siguiente escala:
    90 a 100: A
    80 a 89: B
    70 a 79: C
    60 a 69: D
    0 a 59: F
    Si la calificación introducida está fuera del rango de 0 a 100, el programa debe mostrar "Calificación no válida."
    */

const noteButton = document.getElementById("submit-note");
const noteInput = document.getElementById("note-input");
const noteSpan = document.getElementById("note-span");
const handlerNote = function (note) {
  if (note < 0) showSpanText(noteSpan, "Nota no valida!");

  if (note > 0 && note < 59) showSpanText(noteSpan, "F😟");

  if (note >= 60 && note <= 69) showSpanText(noteSpan, "D😑");

  if (note >= 70 && note <= 79) showSpanText(noteSpan, "C😊");

  if (note >= 80 && note <= 89) showSpanText(noteSpan, "B😁");

  if (note >= 90 && note <= 100) showSpanText(noteSpan, "A🤩");
};

noteInput.addEventListener("click", () => {
  showSpanText(noteSpan, "");
});

noteButton.addEventListener("click", e => {
  e.preventDefault();
  const note = noteInput.value;

  if (!note)
    return showSpanText(noteSpan, "Porfavor ingresa tu calificacion!💥");

  handlerNote(note);
});
/*
3)
    Desarrolla un programa que le pida al usuario las longitudes de los tres lados de un triángulo 
    mediante tres prompts separados. El programa debe determinar y mostrar en la consola el tipo de 
    triángulo que se forma (equilátero, isósceles o escaleno) según las longitudes de los lados introducidos:
    Equilátero: todos los lados son iguales.
    Isósceles: dos lados son iguales.
    Escaleno: todos los lados son diferentes.
    Si alguna de las longitudes introducidas es menor o igual a 0, el programa debe mostrar "Longitudes no válidas."
    */

const inputTriangle1 = document.getElementById("triangle-input-1");
const inputTriangle2 = document.getElementById("triangle-input-2");
const inputTriangle3 = document.getElementById("triangle-input-3");
const btnTriangle = document.getElementById("submit-triangle");
const spanTriangle = document.getElementById("triangle-span");

const handlerTriangle = function (tri1, tri2, tri3) {
  if (tri1 < 0 || tri2 < 0 || tri3 < 0)
    return showSpanText(spanTriangle, "Longitudes no validas");

  if (tri1 === tri2 && tri2 === tri3)
    return showSpanText(spanTriangle, "Es un triangulo Equilátero 🔼");

  if (tri1 === tri2 || tri1 === tri3 || tri2 === tri3) {
    return showSpanText(spanTriangle, "Es un triangulo Isósceles");
  } else {
    return showSpanText(spanTriangle, "Es un triangulo Escaleno");
  }
};

btnTriangle.addEventListener("click", e => {
  e.preventDefault();
  const tri1 = inputTriangle1.value;
  const tri2 = inputTriangle2.value;
  const tri3 = inputTriangle3.value;

  if (!tri1 || !tri2 || !tri3)
    return showSpanText(
      spanTriangle,
      "Por favor ingrese todos los lados del triangulo!💥"
    );

  handlerTriangle(tri1, tri2, tri3);
});

/*
4)
    Escribe un programa que le pida al usuario que introduzca un número del 1 al 7 mediante un prompt. 
    El programa debe mostrar en la consola el día de la semana correspondiente al número introducido:
    1: Lunes
    2: Martes
    3: Miércoles
    4: Jueves
    5: Viernes
    6: Sábado
    7: Domingo
    Si el número introducido no está en el rango de 1 a 7, el programa debe mostrar "Número no válido."
    */

const inputDay = document.getElementById("input-day");
const btnDay = document.getElementById("btn-day");
const spanDay = document.getElementById("span-day");

const handleDay = function (day) {
  if (day < 0 || day > 7) return showSpanText(spanDay, "Numero no valido");

  if (day === 1) return showSpanText(spanDay, "LUNES");

  if (day === 2) return showSpanText(spanDay, "MARTES");

  if (day === 3) return showSpanText(spanDay, "MIERCOLES");

  if (day === 4) return showSpanText(spanDay, "JUEVES");

  if (day === 5) return showSpanText(spanDay, "VIERNES");

  if (day === 6) return showSpanText(spanDay, "SABADO");

  if (day === 7) return showSpanText(spanDay, "DOMINGO");
};

btnDay.addEventListener("click", e => {
  e.preventDefault();

  const day = inputDay.value * 1;

  if (!day) return showSpanText(spanDay, "Por favor ingrese un numero!");

  handleDay(day);
});

/*
5)
    Crea un programa que le pida al usuario que introduzca una temperatura en grados Celsius mediante un prompt. 
    El programa debe determinar y mostrar en la consola el estado del agua a esa temperatura:
    Sólido: 0 grados Celsius o menos.
    Líquido: entre 0 y 99 grados Celsius.
    Gaseoso: 100 grados Celsius o más.
    Si la temperatura introducida no es un número válido, el programa debe mostrar "Temperatura no válida." */

const inputTemperature = document.getElementById("input-temperature");
const btnTemperature = document.getElementById("btn-temperature");
const spanTemperature = document.getElementById("span-temperature");

const handleTemperature = function (temp) {
  if (temp <= 0) {
    return showSpanText(spanTemperature, "SOLIDO 🧊");
  }

  if (temp >= 0 && temp <= 99) {
    return showSpanText(spanTemperature, "LIQUIDO 💧");
  }

  if (temp >= 100) {
    return showSpanText(spanTemperature, "GASEOSO 🌫️");
  }
};
btnTemperature.addEventListener("click", e => {
  e.preventDefault();

  const temp = inputTemperature.value * 1;

  if (!temp)
    return showSpanText(spanTemperature, "Por favor ingrese una temperatura!");

  handleTemperature(temp);
});
