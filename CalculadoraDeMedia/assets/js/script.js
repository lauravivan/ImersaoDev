function calculate() {
  let name = document.getElementById("user-name").value.toUpperCase();
  let grade1 = parseFloat(document.getElementById("first-grade").value);
  let grade2 = parseFloat(document.getElementById("second-grade").value);
  let grade3 = parseFloat(document.getElementById("third-grade").value);

  if ((grade1 >= 0 && grade1 <= 10) && (grade2 >= 0 && grade2 <= 10) && (grade3 >= 0 && grade3 <= 10)) {
    clean();
    let sum = grade1 + grade2 + grade3;
    let average = sum/3;
    showOnScreen(name, average.toFixed(2));
  } else {
    gradeValidation(grade1, grade2, grade3);
  }
}

function gradeValidation(grade1, grade2, grade3) {
  let tagHTML = document.getElementById("result");
  if (grade1 < 0 || grade1 > 10) {
    document.getElementById("first-grade").value = "";
  }
  if (grade2 < 0 || grade2 > 10) {
    document.getElementById("second-grade").value = "";
  }
  if (grade3 < 0 || grade3 > 10) {
    document.getElementById("third-grade").value = "";
  }

  tagHTML.innerText = "Informe uma nota válida para que eu possa calcular corretamente!";
}

function showOnScreen(name, average) {
  if (average < 6) {
    message(name, average, "você foi", "REPROVADO(A)", "#d63031");
  } else if (average >= 6 && average <= 10) {
    message(name, average, "você foi", "APROVADO(A)", "#00b894");
  } 
}

function message(name, average, msg1, msg2, color) {
  let tagHTML = document.getElementById("result");
  if (msg2 == "REPROVADO(A)") {
    tagHTML.innerHTML = `${name}, ${msg1} <a style="color: ${color};">${msg2}</a>` + `.\n Sua média foi: ${average}`;
  } else {
    tagHTML.innerHTML = `${name}, ${msg1} <a style="color: ${color};">${msg2}</a>` + `.\n Sua média foi: ${average}`;
  }
}

function clean() {
  document.getElementById("user-name").value = "";
  document.getElementById("first-grade").value = "";
  document.getElementById("second-grade").value = "";
  document.getElementById("third-grade").value = "";
}
