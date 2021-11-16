const meses = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
const diasSemana = ["Lun","Mar","X","Jue","Vie","Sáb","Dom"];

window.onload = function() {
    hoy = new Date();
    diasHoy = hoy.getDay();
    diaDeHoy = hoy.getDate();
    mesHoy = hoy.getMonth();
    yearHoy = hoy.getFullYear(); 
    
    title = document.getElementById("titulos");
    ant = document.getElementById("anterior");
    post = document.getElementById("posterior");

    filaPrinc = document.getElementById("fila0");

    fechaAct = document.getElementById("fechaactual");

    fechaAct.innerHTML+=semana[diasHoy]+", "+diaDeHoy+" de "+meses[mesHoy]+" de "+yearHoy;

    mesPrinc = mesHoy;
    yearPrinc = yearHoy;

cabecera();
primeraLinea();
writeDias();

}

function cabecera() {
    title.innerHTML = meses[mesPrinc]+ " de " + yearPrinc;
    mesAnt = mesPrinc - 1;
    mesPost = mesPrinc + 1;
    if(mesAnt < 0) {mesAnt = 11};
    if(mesPost > 11) {mesPost  = 0}
    ant.innerHTML = meses[mesAnt];
    post.innerHTML = meses[mesPost];
}


function primeraLinea() {
    for(i = 0; i <7; i++) {
        celdaPrinc = filaPrinc.getElementsByTagName("th")[i]
        celdaPrinc.innerHTML = diasSemana[i]
    }
}





function writeDias() {
    primerMes = new Date(yearPrinc, mesPrinc, "1")
    prsem = primerMes.getDay();
    prsem--;
    if(prsem == -1) {prsem = 6};
    diaPrimerMes = primerMes.getDate();
    prcelda = diaPrimerMes -prsem;
    empezar = primerMes.setDate(prcelda);
    diaMes = new Date();
    diaMes.setTime(empezar);

    for (i = 1; i < 7; i++) {
        fila = document.getElementById("fila" + i);
        for(j = 0; j <7; j++) {
            midia = diaMes.getDate();
            miMes = diaMes.getMonth();
            miYear = diaMes.getFullYear();
            celda = fila.getElementsByTagName("td")[j];
            celda.innerHTML = midia;
            
            celda.style.backgroundColor = "#6BFF7A";
            celda.style.color = "#492736";
            if(j == 6) {
                celda.style.color = "#f11445";
            }
            if (miMes != mesPrinc) {
                celda.style.color = "#7A7A7A";
            }

            if (miMes = mesHoy && midia == diaDeHoy && miYear == yearHoy) {
                celda.style.backgroundColor = "#F501D4";
                celda.innerHTML= "<cite title = 'Fecha Actual'>"+midia+"</cite>";
                
            }
            midia = midia + 1;
            diaMes.setDate(midia);
        }
    }
}


function mesantes() {
    nuevoMes = new Date();
    primerMes--;
    nuevoMes.setTime(primerMes);
    mesPrinc = nuevoMes.getMonth();
    yearPrinc = nuevoMes.getFullYear();
    cabecera();
    writeDias();
}

function mesdespues() {
    nuevoMes = new Date();
    tiempounix = primerMes.getTime();
    tiempounix = tiempounix + (45*24*60*60*1000);
    nuevoMes.setTime(tiempounix);
    mesPrinc = nuevoMes.getMonth();
    yearPrinc = nuevoMes.getFullYear();
    cabecera();
    writeDias();
}

function actualizar() {
    mesPrinc = hoy.getMonth();
    yearPrinc = hoy.getFullYear();
    cabecera();
    writeDias();
}