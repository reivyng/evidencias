document.addEventListener('DOMContentLoaded', function () {
    let bingo = [];
    let contador = 0;
    for (let iteracion1 = 0; iteracion1 < 5; iteracion1++) {
        let iterno = [];
        for (let iteracion2 = 0; iteracion2 < 5; iteracion2++) {
            contador = contador + 1;
            let tabla = contador * 2;
            iterno.push(tabla);
        }
        bingo.push(iterno);
    }
    let imprimir = '';
    imprimir += '<div class="col-3">';
    imprimir += '<table class="table table-bordered mt-4">';
    imprimir += '<thead>';
    imprimir += '<tr>';
    imprimir += "<td style='font-weight: bold; border-radius: 23px;'>B</td>";
    imprimir += "<td style='font-weight: bold; border-radius: 23px;'>I</td>";
    imprimir += "<td style='font-weight: bold; border-radius: 23px;'>N</td>";
    imprimir += "<td style='font-weight: bold; border-radius: 23px;'>G</td>";
    imprimir += "<td style='font-weight: bold; border-radius: 23px;'>O</td>";
    imprimir += '</tr>';
    imprimir += '</thead>';
    imprimir += '<tbody>';
    for (let iteracion1 = 0; iteracion1 < bingo.length; iteracion1++) {
        imprimir += "<tr>";
        for (let iteracion2 = 0; iteracion2 < bingo[iteracion1].length; iteracion2++) {
            imprimir += "<td onclick='marcaCelda(this)'>" + bingo[iteracion1][iteracion2] + "</td>";
        }
        imprimir += "</tr>";
    }
    imprimir += '</tbody>';
    imprimir += '</table>';
    imprimir += '</div>';
    document.getElementById('tablas').innerHTML = imprimir;

});
function marcaCelda(celda) {
    if (celda.style.backgroundColor === "blue") {
        celda.style.backgroundColor = "";
    } else {
        celda.style.backgroundColor = "blue";
    }
}
function coloreaDiagonales() {
    // Selecciona el cuerpo de la tabla
    let tabla = document.querySelector('.table tbody');
    // Selecciona todas las filas de la tabla
    let rows = tabla.querySelectorAll('tr');
    let colorActualPrincipal = rows[0].querySelectorAll('td')[0].style.backgroundColor;
    let nuevoColorPrincipal = colorActualPrincipal === 'yellow' ? '' : 'yellow';
    let colorActualSecundaria = rows[0].querySelectorAll('td')[rows[0].querySelectorAll('td').length - 1].style.backgroundColor;
    let nuevoColorSecundaria = colorActualSecundaria === 'yellow' ? '' : 'yellow';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        // Selecciona todas las celdas de la fila actual
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda de la diagonal principal
        // La celda en la posición (iteracion, iteracion)
        cells[iteracion].style.backgroundColor = nuevoColorPrincipal;
        // Colorea la celda de la diagonal secundaria
        // La celda en la posición (iteracion, longitud de la fila - 1 - iteracion)
        cells[cells.length - 1 - iteracion].style.backgroundColor = nuevoColorSecundaria;
    }
}
function coloreaColumnaB() {
    let tabla = document.querySelector('.table tbody');
    let rows = tabla.querySelectorAll('tr');
    let colorActual = rows[0].querySelectorAll('td')[0].style.backgroundColor;
    let nuevoColor = colorActual === 'lightblue' ? '' : 'lightblue';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda en la primera columna (columna 'B')
        cells[0].style.backgroundColor = nuevoColor;
    }
}
function coloreaColumnaI() {
    let tabla = document.querySelector('.table tbody');
    let rows = tabla.querySelectorAll('tr');
    let colorActual = rows[0].querySelectorAll('td')[1].style.backgroundColor;
    let nuevoColor = colorActual === 'green' ? '' : 'green';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda en la segunda columna (columna 'I')
        cells[1].style.backgroundColor = nuevoColor;
    }
}
function coloreaColumnaN() {
    let tabla = document.querySelector('.table tbody');
    let rows = tabla.querySelectorAll('tr');
    let colorActual = rows[0].querySelectorAll('td')[2].style.backgroundColor;
    let nuevoColor = colorActual === 'red' ? '' : 'red';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda en la tercera columna (columna 'I')
        cells[2].style.backgroundColor = nuevoColor;
    }
}
function coloreaColumnaG() {
    let tabla = document.querySelector('.table tbody');
    let rows = tabla.querySelectorAll('tr');
    let colorActual = rows[0].querySelectorAll('td')[3].style.backgroundColor;
    let nuevoColor = colorActual === 'orange' ? '' : 'orange';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda en la cuarta columna (columna 'I')
        cells[3].style.backgroundColor = nuevoColor;
    }
}
function coloreaColumnaO() {

    let tabla = document.querySelector('.table tbody');
    let rows = tabla.querySelectorAll('tr');
    let colorActual = rows[0].querySelectorAll('td')[4].style.backgroundColor;
    let nuevoColor = colorActual === 'aqua' ? '' : 'aqua';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda en la quinta columna (columna 'I')
        cells[4].style.backgroundColor = nuevoColor;
    }
}
function coloreaTresDiagonales() {
    let tabla = document.querySelector('.table tbody');
    let rows = tabla.querySelectorAll('tr');
    let colorActualPrincipal = rows[0].querySelectorAll('td')[0].style.backgroundColor;
    let nuevoColorPrincipal = colorActualPrincipal === 'purple' ? '' : 'purple';
    // Itera a través de cada fila
    for (let iteracion = 0; iteracion < rows.length; iteracion++) {
        let cells = rows[iteracion].querySelectorAll('td');
        // Colorea la celda en las tres x columna (triple 'X')
        cells[cells.length - 3 - iteracion].style.backgroundColor = nuevoColorPrincipal;
        cells[iteracion].style.backgroundColor = nuevoColorPrincipal;
        cells[cells.length - 1 - iteracion].style.backgroundColor = nuevoColorPrincipal;
        cells[iteracion + 2].style.backgroundColor = nuevoColorPrincipal;
        for (let iteracion = 2; iteracion < rows.length; iteracion++) {
            let cells = rows[iteracion].querySelectorAll('td');
            for (let iteracion3 = 2; iteracion3 < 5; iteracion3++) {
                for (let iteracion4 = 2; iteracion4 < 5; iteracion4++) {
                  if (iteracion3%2==0&&iteracion4%2==1){
                    cells[iteracion-1].style.backgroundColor = nuevoColorPrincipal;
                  }else if (iteracion3%2==1&&iteracion4%2==0){
                    cells[cells.length - 1 - iteracion+1].style.backgroundColor = nuevoColorPrincipal;
                  }else{
                    console.log("")
                  }
                }
              } 
        }
    }
}