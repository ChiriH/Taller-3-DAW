var pelis = {
    "Peliculas": [
        {"imagen" : "img/venom.jpg",
         "Pelicula" : "Venom 2",
         "Clasificacion" : "A",
         "Duracion" : 90,
         "Horarios" : "10 a.m | 12 a.m | 1 p.m",
         "Butacas" : "Tradicionales",
         "link" : "compra.html"},
        {"imagen" : "img/spider.jpg",
         "Pelicula" : "Spider-man: no way home",
         "Clasificacion" : "B",
         "Duracion" : 120,
         "Horarios" : "7 a.m | 10 a.m | 12 p.m",
         "Butacas" : "Tradicionales",
         "link" : "compra.html"},
        {"imagen" : "img/end.jpg",
         "Pelicula" : "Avengers: Endgame",
         "Clasificacion" : "C",
         "Duracion" : 190,
         "Horarios" : "11 a.m | 2 p.m | 6 p.m",
         "Butacas" : "Tradicionales",
         "link" : "compra.html"},
         ]
};

//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = volcarDatos(pelis.Peliculas);

function volcarDatos(datos){
    var total = datos.length;
    data = "<div class=\"grid\">\n";
    for(var i=0; i<total; i++){
        data += "<div class=\"cards\">\n"; 
            data += "<div class=\"text image\">\n";
                data += "<img width=\"300px\" src=\"" + datos[i].imagen + "\" alt=\"Imagen de " + datos[i].Pelicula + "\" class=\"avatar\" />\n";
            data += "</div>\n";
            data += "<div class=\"text\">\n";
                data += "<h4>\nPelícula: " + datos[i].Pelicula + "\n</h4>\n";
                data += "<p>\nDuración (min): " + datos[i].Duracion + "\n<br />\n";
                data += "Horarios: " + datos[i].Horarios+ "\n<br>\n";
                data += "Butacas: " + datos[i].Butacas+ "\n</p>\n";
                 data += "<a href="+ datos[i].link+">Comprar</a> " ;
            data += "</div>\n";
        data += "</div>\n";
    }
    data += "</div>\n";
    return data;
}