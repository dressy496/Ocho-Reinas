var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
  var renglon = celda.parentElement.rowIndex;
  var columna = celda.cellIndex;
  var tablero = document.getElementById("tabla");

  if (celda.style.backgroundImage.includes("url(./img/reina.png)")) {
    // Quitar reina
    celda.style = "background-image: none";
    for (let i = 0; i < 8; i++) {
      // Restaurar verticales y horizontales
      tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[renglon].cells[i].style.backgroundColor = "";

      tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[i].cells[columna].style.backgroundColor = "";
    }

    // Restaurar diagonales
    for (let i = 1; i < 8; i++) {
      if (renglon - i >= 0 && columna + i < 8) {
        tablero.rows[renglon - i].cells[columna + i].setAttribute("onclick", "colocarReina(this)");
        tablero.rows[renglon - i].cells[columna + i].style.backgroundColor = "";
      }
      if (renglon + i < 8 && columna - i >= 0) {
        tablero.rows[renglon + i].cells[columna - i].setAttribute("onclick", "colocarReina(this)");
        tablero.rows[renglon + i].cells[columna - i].style.backgroundColor = "";
      }
      if (renglon - i >= 0 && columna - i >= 0) {
        tablero.rows[renglon - i].cells[columna - i].setAttribute("onclick", "colocarReina(this)");
        tablero.rows[renglon - i].cells[columna - i].style.backgroundColor = "";
      }
      if (renglon + i < 8 && columna + i < 8) {
        tablero.rows[renglon + i].cells[columna + i].setAttribute("onclick", "colocarReina(this)");
        tablero.rows[renglon + i].cells[columna + i].style.backgroundColor = "";
      }
    }

    reinasPorColocar++;
    reinasColocadas--;
  } else {
    // Colocar reina
    if (reinasColocadas < 8) {
      for (let i = 0; i < 8; i++) {
        // Bloquear verticales y horizontales
        tablero.rows[renglon].cells[i].removeAttribute("onclick");
        tablero.rows[renglon].cells[i].style.backgroundColor = "#ff0000";

        tablero.rows[i].cells[columna].removeAttribute("onclick");
        tablero.rows[i].cells[columna].style.backgroundColor = "#ff0000";
      }

      // Bloquear diagonales
      for (let i = 1; i < 8; i++) {
        if (renglon - i >= 0 && columna + i < 8) {
          tablero.rows[renglon - i].cells[columna + i].removeAttribute("onclick");
          tablero.rows[renglon - i].cells[columna + i].style.backgroundColor = "#ff0000";
        }
        if (renglon + i < 8 && columna - i >= 0) {
          tablero.rows[renglon + i].cells[columna - i].removeAttribute("onclick");
          tablero.rows[renglon + i].cells[columna - i].style.backgroundColor = "#ff0000";
        }
        if (renglon - i >= 0 && columna - i >= 0) {
          tablero.rows[renglon - i].cells[columna - i].removeAttribute("onclick");
          tablero.rows[renglon - i].cells[columna - i].style.backgroundColor = "#ff0000";
        }
        if (renglon + i < 8 && columna + i < 8) {
          tablero.rows[renglon + i].cells[columna + i].removeAttribute("onclick");
          tablero.rows[renglon + i].cells[columna + i].style.backgroundColor = "#ff0000";
        }
      }
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      reinasPorColocar--;
      reinasColocadas++;
    }
  }

  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;

  

  }
  function solucion1(valor) {

    var celdas = document.getElementById("tabla");

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        celdas.rows[i].cells[j].style = "background-image: none";
      }
    }

    switch (valor) {
      case "1":
        celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[1].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[2].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[3].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[4].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[5].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[6].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[7].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
        break;

      case "2":
        celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[2].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[3].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[4].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
        break;

      case "3":
        celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[1].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[2].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[4].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[5].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[7].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
        break;

      case "4":
        celdas.rows[0].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[3].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[4].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
        break;

      case "5":
        celdas.rows[0].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[1].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[3].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[4].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[5].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[6].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
        break;

      case "6":
        celdas.rows[0].cells[4].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[1].cells[2].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[2].cells[7].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[3].cells[3].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[4].cells[6].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[5].cells[0].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[6].cells[5].style = "background-image: url(./img/reina.png); background-size:cover;";
        celdas.rows[7].cells[1].style = "background-image: url(./img/reina.png); background-size:cover;";
        break;

      default:
        alert("Esa solucion no te la ando manejando");
        break;
    }
  }
  
  function reiniciarTablero() {
    var celdas = document.getElementById("tabla");
  
    // Eliminar todas las reinas y estilos
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        celdas.rows[i].cells[j].style = "background-image: none";
        celdas.rows[i].cells[j].setAttribute("onclick", "colocarReina(this)");
      }
    }
  
    // Restablecer contadores
    reinasPorColocar = 8;
    reinasColocadas = 0;
  
    // Actualizar mensajes
    document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
    document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;
  }  


