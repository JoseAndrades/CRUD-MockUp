/*saludo*/
function getUser() {
    user = document.getElementById('identificador').value;  
}
$(document).ready(function () {
    console.log(user);
    let text = 'Bienvenido, ';
    document.getElementById("saludar").textContent = text;
})

/*Visibilidad del menu central*/
function mostrarMenu() {
    document.getElementById('menuCentral').style.display = 'block';
    document.getElementById('empleado').style.display = 'none';
    document.getElementById('almacen').style.display = 'none';
}

/*Visibilidad del contenido*/
function mostrarEmpleados() {
    document.getElementById('empleado').style.display = 'block';
    document.getElementById('menuCentral').style.display = 'none';
    document.getElementById('almacen').style.display = 'none';
}

function mostrarAlmacen() {
    document.getElementById('almacen').style.display = 'block';
    document.getElementById('menuCentral').style.display = 'none';
    document.getElementById('empleado').style.display = 'none';
}

/*TABLAS*/
/*AÑADIR*/
$(document).ready(function () {
    $("#anadir1").click(function () {
        $('#modalEmpAn').modal('show');
    });
    $("#confirmarEmpAn").click(function () {
        $('#modalEmpAn').modal('hide');
    });
    $("#anadir2").click(function () {
        $('#modalAlmAn').modal('show');
    });
    $("#confirmarAlmAn").click(function () {
        $('#modalAlmAn').modal('hide');
    });

})


function anadirFila1() {
    var col1 = document.getElementById('nombreAn').value;
    var col2 = document.getElementById('puestoAn').value;
    var col3 = document.getElementById('antiguedadAn').value;
    var col4 = document.getElementById('horarioAn').value;
    var col5 = document.getElementById('salarioAn').value;
    var col6 = '<input type="button" class="btn-borrar" value="Eliminar" /> <input type="button" class="btn-editar1" value="Editar" />';

    document.getElementById("tablaEmp").insertRow(-1).innerHTML = '<tr><td scope="row" class="nom" data-label="Nombre">' + col1 + '</td><td class="pue" data-label="Puesto">' + col2 + '</td><td class="ant" data-label="Antigüedad">' + col3 + '</td><td class="hor" data-label="Horario">' + col4 + '</td><td class="sal" data-label="Salario-mensual">' + col5 + '</td><td>' + col6 + '</td></tr>';

}

function anadirFila2() {
    var col1 = document.getElementById('nombreAn2').value;
    var col2 = document.getElementById('codigoAn').value;
    var col3 = document.getElementById('stockAn').value;
    var col4 = document.getElementById('pcompraAn').value;
    var col5 = document.getElementById('pventaAn').value;
    var col6 = '<input type="button" class="btn-borrar" value="Eliminar" /> <input type="button" class="btn-editar2" value="Editar" />';

    document.getElementById("tablaAlm").insertRow(-1).innerHTML = '<tr><td scope="row" data-label="Nombre">' + col1 + '</td><td data-label="Codigo">' + col2 + '</td><td data-label="Stock">' + col3 + '</td><td data-label="Precio-compra">' + col4 + '</td><td data-label="Precio-venta">' + col5 + '</td><td>' + col6 + '</td></tr>';
}


/*BORRAR*/
$(document).on('click', '.btn-borrar', function () {
    $(this).closest('tr').remove();
});


/*EDITAR*/
/*cargar valores*/
/*TAEmp*/
$(document).on('click', '.btn-editar1', function () {
    fila1 = $(this).parents('tr').index();

    var valores = new Array();
    var i = 0;

    $(this).parents('tr').find('td').each(function () {
        valores[i] = $(this).html();
        i++;
    });
    document.getElementById('nombreEd').value = valores[0];
    document.getElementById('puestoEd').value = valores[1];
    document.getElementById('antiguedadEd').value = valores[2];
    document.getElementById('horarioEd').value = valores[3];
    document.getElementById('salarioEd').value = valores[4];

});
$(document).on('click', '.btn-editar1', function () {
    $('#modalEmpEd').modal('show');
});

/*TAlm*/
$(document).on('click', '.btn-editar2', function () {
    nCol1 = ($("#tablaEmp tr").length - 1) * 6;
    fila2 = $(this).parents('tr').index();

    var valores = new Array();
    var i = 0;

    $(this).parents('tr').find('td').each(function () {
        valores[i] = $(this).html();
        i++;
    });
    document.getElementById('nombreEd2').value = valores[0];
    document.getElementById('codigoEd').value = valores[1];
    document.getElementById('stockEd').value = valores[2];
    document.getElementById('pcompraEd').value = valores[3];
    document.getElementById('pventaEd').value = valores[4];

});
$(document).on('click', '.btn-editar2', function () {
    $('#modalAlmEd').modal('show');
});

/*cargar datos*/
/*TAEmp*/
$(document).ready(function () {

    $('.btn-confirmar1').click(function () {

        var valores = new Array();
        valores[0] = document.getElementById('nombreEd').value;
        valores[1] = document.getElementById('puestoEd').value;
        valores[2] = document.getElementById('antiguedadEd').value;
        valores[3] = document.getElementById('horarioEd').value;
        valores[4] = document.getElementById('salarioEd').value;

        var a = fila1 * 6 + 0;
        var b = fila1 * 6 + 1;
        var c = fila1 * 6 + 2;
        var d = fila1 * 6 + 3;
        var e = fila1 * 6 + 4;

        document.querySelectorAll('td')[a].textContent = valores[0];
        document.querySelectorAll('td')[b].textContent = valores[1];
        document.querySelectorAll('td')[c].textContent = valores[2];
        document.querySelectorAll('td')[d].textContent = valores[3];
        document.querySelectorAll('td')[e].textContent = valores[4];

        $('#modalEmpEd').modal('hide');

    });


});

/*TAlm*/
$(document).ready(function () {

    $('.btn-confirmar2').click(function () {

        var valores = new Array();
        valores[0] = document.getElementById('nombreEd2').value;
        valores[1] = document.getElementById('codigoEd').value;
        valores[2] = document.getElementById('stockEd').value;
        valores[3] = document.getElementById('pcompraEd').value;
        valores[4] = document.getElementById('pventaEd').value;

        var a = (fila2 * 6 + 0) + nCol1;
        var b = (fila2 * 6 + 1) + nCol1;
        var c = (fila2 * 6 + 2) + nCol1;
        var d = (fila2 * 6 + 3) + nCol1;
        var e = (fila2 * 6 + 4) + nCol1;

        document.querySelectorAll('td')[a].textContent = valores[0];
        document.querySelectorAll('td')[b].textContent = valores[1];
        document.querySelectorAll('td')[c].textContent = valores[2];
        document.querySelectorAll('td')[d].textContent = valores[3];
        document.querySelectorAll('td')[e].textContent = valores[4];


        $('#modalAlmEd').modal('hide');
    });

});



